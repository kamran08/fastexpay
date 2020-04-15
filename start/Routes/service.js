'use strict'
const Route = use('Route')

// get chat list
// Route.get('/app/messenger/conversation/get/list', 'ChatController.getConversationList')

// // get chat history by id
// Route.get('/app/messenger/converstaion/:id', 'ChatController.getChatHistory')

// // get previous message of same chat
// Route.get('/app/messenger/conversation/previous-chat/:conId/:id', 'ChatController.getMoreMessages')


// // insert chat
// Route.post('/app/messenger/chat/add', 'ChatController.insertChat')


// service 

Route.post('/app/addNewService', 'ServiceController.addNewService')
Route.post('/app/subscribeService', 'ServiceController.subscribeService')




