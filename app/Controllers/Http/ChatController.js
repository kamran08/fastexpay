'use strict'


const Conversation = use('App/Models/Conversation')
const Chat = use('App/Models/Chat')
const User = use('App/Models/User')
const DB = use('Database')
class ChatController {

    async getConversationList({ request, response, auth }) {
        let user = {}

        try {
            user = await auth.getUser()
        } catch (error) {
            return response.status(401).json({
                message: 'You are not authorized!'
            })
        }

        const id = user.id
        const lists = await DB.raw(`
  			SELECT co1.id,
				   co1.sender,
			       co1.receiver,
			       us.id "uid",
			       us.firstName,
			       us.lastName,
                   us.image,
                   ch1.id "chat_id",
        	       ch1.conversation_id,
        	       ch1.message,
        	       ch1.seen,
                   ch1.created_at,
        		   ch1.message_sender
			       FROM conversations co1
			            INNER JOIN users us
			                    ON CASE
			                            WHEN co1.sender <> ${id}
			                              THEN co1.sender
			                            WHEN co1.receiver <> ${id}
			                              THEN co1.receiver
                                        END = us.id
                        INNER JOIN chats ch1
                                ON ch1.conversation_id = co1.id

                        INNER JOIN (SELECT max(ch2.id) id,
                                ch2.conversation_id
                                FROM chats ch2
                                GROUP BY ch2.conversation_id order by id desc) ch3
        	                        ON ch3.conversation_id = ch1.conversation_id
        	                        AND ch3.id = ch1.id
        	       WHERE ${id} IN (co1.sender,
        	                   co1.receiver)
			      `)

        // IF THERE ARE DATA IN THE LISTS THEN RETRIVE THE DETAILS TOO
        let chatLists = []
        let msgNotiCount = 0
        if (lists[0].length) {
            chatLists = this.formateChatLists(lists[0])
            msgNotiCount = await this.msgNotiCount(id)
        }
        return {
            lists: chatLists,
            msgNotiCount: msgNotiCount

        }
    }

    async getChatHistory({ request, response, auth, params }) {

        let user = {}
        try {
            user = await auth.getUser()
        } catch (error) {
            return response.status(401).json({
                message: 'You are not authorized!'
            })
        }
        const id = user.id
        // get the chat details where not equal to deleted and update seen
        const chat = await Chat.query().where('conversation_id', params.id).limit(15).orderBy('id', 'desc').fetch()
        let c = chat.toJSON()

        c = c.reverse()
        // CHECK IF LAST MESSAGE IS SEEN OR NOT. IF seen===loggedin user id, mean it is not seen yet.
        if (c[c.length - 1].message_receiver == user.id && c[c.length - 1].seen == 0)// this mean my id is stored in seen column so its not seen yet
        {
            Chat.query().where('id', c[c.length - 1].id).update({
                seen: 1
            })
            // NOW SEND SEEN NOTIFICATION TO OTHER USER...
            // noti.sendSeenNoti(params.id, c[c.length - 1].msg_sender, 'seen')
        }
        return response.status(200).json({
            chats: this.formateChat(chat)
        })

    }

    async getMoreMessages({ request, response, auth, params }) {
        let user = {}

        try {
            user = await auth.getUser()
        } catch (error) {
            return response.status(401).json({
                message: 'You are not authorized!'
            })
        }

        const isOwner = await Conversation.query().where('id', params.conId)
            .where((q) => {
                q.where('sender', user.id)
                q.orWhere('receiver', user.id)
            }).getCount()

        if (isOwner === 0) {
            return response.status(403).json({ message: 'Unatuhrized requests. Request blocked.' })
        }

        const chat = await Chat.query().where('conversation_id', params.conId).where('id', '<', params.id).orderBy('id', 'desc').limit(15).fetch()

        return response.status(200).json({
            chats: this.formateChat(chat)
        })
    }

    async insertChat({ request, response, auth }) {

        let user = {}

        try {
            user = await auth.getUser()
        } catch (error) {
            return response.status(401).json({
                message: 'You are not authorized!'
            })
        }


        if (!request.body.receiver || !request.body.message) {
            return response.status(403).json({
                message: 'Invalid Request!'
            })
        }

        const data = request.body

        let receiver = await User.query()
            .where('id', data.receiver)
            .first()
        receiver = receiver.toJSON()

        // CHECK IF THERE ANY PREVIOUS CONVERSATIONS OR NOT 
        const conversation = await Conversation.query().whereRaw(`( sender = ${user.id} and receiver = ? ) or ( receiver = ${user.id} and sender = ? )`, [data.receiver, data.receiver]).first()
        if (conversation) {
            // A PREVIOUS CONVERSATION IS FOUND 
            const chat = await Chat.create({
                message_sender: user.id,
                message_receiver: data.receiver,
                conversation_id: conversation.id,
                message: data.message,
                seen: 0
            })

            if (receiver.app_Token) {
                let obj = {
                    user: user,
                    conversation: conversation
                }
                this.sendPushNotification(obj, receiver.app_Token, data.msg)
            }
            return chat
        } else {
            // create a new conversation...
            var con = await Conversation.create({
                sender: user.id,
                receiver: data.receiver
            })

            if (con) {
                // now insert the message.. 
                const chat = await Chat.create({
                    message_sender: user.id,
                    message_receiver: data.receiver,
                    conversation_id: con.id,
                    message: data.message,
                    seen: 0
                })
                if (receiver.app_Token) {
                    let obj = {
                        user: user,
                        conversation: conversation
                    }
                    this.sendPushNotification(obj, receiver.app_Token, data.msg)
                }
                // LET THE OTHER USERS KNOW 
                return chat
            }
        }
    }


    // static functions
    formateChat(chat) {
        chat = chat.toJSON()
        chat.reverse()
        return chat
    }

    formateChatLists(chatLists) {
        return chatLists
    }

    msgNotiCount(uid) {
        return Chat.query().where('message_receiver', uid).where('seen', 0).getCount()
    }


    sendPushNotification(data, dtoken, text) {
        let notific = {
            title: 'Tradister',
            body: `${data.user.firstName} ${data.user.lastName}\n\n${text}.`,
            // click_action: data.click_action
        }
        var message = {
            data: {
                click_action: "FLUTTER_NOTIFICATION_CLICK",
                sender: `${data.user.firstName} ${data.user.lastName}`,
                msg: `${text}`,
                con_id: `${data.con.id}`
            },
            notification: {
                title: notific.title,
                body: notific.body
            },
            token: dtoken
        };

        firebase.admin.messaging().send(message)
            .then((response) => {
                // Response is a message ID string.
                console.log('Successfully sent message:', response);
            })
            .catch((error) => {
                console.log('Error sending message:', error);
            });
    }
}

module.exports = ChatController
