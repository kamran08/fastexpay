'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Pricingplan = use('App/Models/Pricingplan');
const Service = use('App/Models/Service');
const Income = use('App/Models/Income');
const Review = use('App/Models/Review');
const Notification = use('App/Models/Notification');
const Conversation = use('App/Models/Conversation');
// const Review = use('App/Models/Review');
const Database = use('Database')
const firebase = require('../../../start/firebase')

const ServiceImage = use('App/Models/ServiceImage');
const moment = require('moment');
// Service
/**
 * Resourceful controller for interacting with services
 */
class ServiceController {
 
 async subscribeService ({ request, response, auth, params }) {
  let user = {}
   try {
      user = await auth.getUser()
   } catch (error) {
     return response.status(401).json({
       message: 'You are not authorized!',
       success: true,
     })
   }

    let data = request.all()


    // id  paymentType subscribe startTime endTime payment, planId
    let plan = await Pricingplan.query().where('id', data.planId).first()
    let service = await Service.query().where('id', data.id).first()
    var date1 = new Date(); // Now
    var date2 = new Date(); // Now
    let d = parseInt(plan.planDuration)
    date2.setDate(date2.getDate() + d);
   
    let updateServiceData = {
      id: data.id,
      paymentType: data.paymentType,
      subscribe: 1,
      startTime: date1,
      endTime: date2,
      payment: plan.price,
    }
    let incomess = {
      seller_id: service.seller_id,
      service_id: data.id,
      buyer_id: user.id,
      paymentType: data.paymentType,
      startTime: date1,
      endTime: date2,
      plan_id: plan.id,
      payment: plan.price,
      planName: plan.planName,
      planDuration: plan.planDuration,
    }
  

    let updata = await Service.query().where('id', data.id).update(updateServiceData)

           if (user.app_Token) {
             let obj1 = {
               user: user,
             }
             this.sendPushNotification(obj1, user.app_Token, "Your " + service.service_type + " Subscription Has been completed!!")
           }


           let notiObject = {
             notiFrom: null,
             notiFor: user.id,
             type: "service",
             titile: "FastexPay",
             descriptions: "Your " + service.service_type + "Subscription Has been completed!!",
             trac: service.id,
           }
           await Notification.create(notiObject)


    
      
      await Income.create(incomess)
     return response.status(200).json({
       'success': true,
       'message': 'service added  Successfully',
       "service": updata,
     })
 }
 async addNewService ({ request, response, auth, params }) {
   let user = {}

    try {
       user = await auth.getUser()
    } catch (error) {
      return response.status(401).json({
        message: 'You are not authorized!',
        success: false,
      })
    }

      let data = request.all()
     
      let imgs = data.images

      delete data.images
      delete data.token

      let service = await Service.create(data)

       if (user.app_Token) {
         let obj1 = {
           user: user,
         }
         this.sendPushNotification(obj1, user.app_Token, "Your " + service.service_type + " Has been Created!!")
       }


       let notiObject ={
         notiFrom:null,
         notiFor: user.id,
         type: "service",
         titile: "FastexPay",
         descriptions: "Your " + service.service_type + "Has been Created!!",
         trac: service.id,
       }
      await Notification.create(notiObject)


       

      let serviceimages = []
    if(imgs && imgs.length>0){
        let images = JSON.parse(JSON.stringify(imgs))
        for (let i in images) {
          let ob = {
            service_id: service.id,
            image: images[i].image,
          }
          let a = await ServiceImage.create(ob)

         
          serviceimages.push(a)
        }
    }
      //  imgs = imgs.toJSON()
       // console.log(mdata)
     

        return response.status(200).json({
          'success': true,
          'message': 'service added  Successfully please complete second step',
          "service": service,
          "serviceimages": serviceimages,
        })


 }





// services

  async getAll ({ params, request, response }) {
    let dd = new Date()

    let str = request.input('str') ? request.input('str') : ''
    
    let alldata = Service.query().with('country').with('division').with('avgRating').with('subDivision').with('state').with('users').with('images').where('endTime', '>=', dd).where('subscribe',1)

    if (str) {
        alldata.where('name', 'LIKE', '%' + str + '%')
    }
    let d = await alldata.fetch()
    return response.status(200).json({
      'success': true,
      'alldata': d
    })

  }
  async getAllServices ({ params, request, response }) {
    let dd = new Date()
    let services = await Service.query().with('country').with('avgRating').with('division').with('subDivision').with('state').with('users').with('images').where(`service_type`, "service").where('endTime', '>=', dd).where('subscribe', 1).fetch()

    return response.status(200).json({
      'success': true,
      'service': services
    })

  }
  async getAllServicesById ({ params, request, response }) {
    let dd = new Date()
    let service = await Service.query().with('country').with('avgRating').with('division').with('images').with('subDivision').with('state').with('users').where('service_type', 'service').where('id', params.id).first()
    return response.status(200).json({
      'success': true,
      'service': service
    })

  }

  // product

    async getAllProduct ({ params, request, response }) {
      let dd = new Date()
    let product = await Service.query().with('country').with('avgRating').with('division').with('images').with('subDivision').with('users').with('state').where('service_type', 'product').where('endTime', '>=', dd).where('subscribe', 1).fetch()
    return response.status(200).json({
      'success': true,
      'product': product
    })

  }
  async getAllProductById ({ params, request, response }) {
    let dd = new Date()
    let service = await Service.query().with('country').with('division').with('avgRating').with('images').with('subDivision').with('users').with('state').where('service_type', 'product').where('id', params.id).first()
    return response.status(200).json({
      'success': true,
      'product': product
    })

  }
  async getAllServicesBySeller ({ params, request, response,auth }) {
      let dd = new Date()

      let user = {}
      try {
        user = await auth.getUser()
      } catch (error) {
        return response.status(401).json({
          message: 'You are not authorized!',
          success: false,
        })
      }
    let service = await Service.query().with('country').with('division').with('avgRating').with('images').with('subDivision').with('users').with('state').where('seller_id', user.id).first()
    return response.status(200).json({
      'success': true,
      'servoce': service
    })

  }
  async addNewViewToService({ params, request, response, auth }) {
    let data = request.all()
    let service = await Service.query().where('id', data.id).first()
    let v = service.view
    v = parseInt(v)+1
    service = await Service.query().where('id', data.id).update({view:v})

    return response.status(200).json({
      'success': true,
      'views': v
    })

  }
  async getMostViewedService ({ params, request, response }) {
    let dd = new Date()
     let service = await Service.query().with('country').with('division').with('avgRating').with('images').with('subDivision').with('users').with('state').where('service_type', 'service').orderBy('view', 'desc').where('endTime', '>=', dd).where('subscribe', 1).limit(20).fetch()

    return response.status(200).json({
      'success': true,
      'services': service
    })

  }
  async getMostViewedProduct({ params, request, response }) {
    let dd = new Date()
      let service = await Service.query().with('country').with('division').with('avgRating').with('images').with('subDivision').with('users').with('state').where('endTime', '>=', dd).where('subscribe', 1).where('service_type', 'product').orderBy('view', 'desc').limit(20).fetch()

      return response.status(200).json({
        'success': true,
        'services': service
      })

  }
  async getCoversationWithSeller({ params, request, response, auth }) {

    let user = {}
     try {
       user = await auth.getUser()
     } catch (error) {
       return response.status(401).json({
         message: 'You are not authorized!',
         success: false,
       })
     }

  let id = user.id
  let service = await Service.query().where('id', params.id).first()
  let sellerId = service.seller_id
  // return service
 
    let conv = await Conversation.query().where((builder) => {
      builder
        .where('sender', id)
        .where('receiver', sellerId)
    })
    .orWhere((builder) => {
      builder
        .where('sender', sellerId)
        .where('receiver', id)
    })
    .first()

    return response.status(200).json({
      'success': true,
      'conv': conv
    })

  }

  async giveReview({ params, request, response, auth }) {
       let user = {}

       try {
         user = await auth.getUser()
       } catch (error) {
         return response.status(401).json({
           message: 'You are not authorized!',
           success: false,
         })
       }
       let data = request.all()

      
    let service = await Service.query().where('id', data.serviceId).first()
     let ob = {
       reviewer_id: user.id,
       review_for: service.seller_id,
       service_id: data.serviceId,
       review: data.review,
       rate: data.rate,
     }

     let review = await Review.create(ob)

    return response.status(200).json({
      'success': true,
      'review': review
    })

  }

    async getDashboardData({ params, request, response, auth }) {
       let user = {}

       try {
         user = await auth.getUser()
       } catch (error) {
         return response.status(401).json({
           message: 'You are not authorized!',
           success: false,
         })
       }
      let id = user.id

      let avg = await Review.query().where('review_for', 4).select('review_for', Database.raw('(cast(AVG(rate) as decimal(10,2))) AS averageRating'),Database.raw('count(id) as total')).first()
      let totalVIew = await Service.query().where('seller_id', 1).select(Database.raw('(cast(sum(view) as decimal(10,2))) AS totalView')).first()
      let subscribtions = await Service.query().where('seller_id', 1).orderBy('endTime', 'asc').fetch()
      let lists = await Database.raw(`
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
     

        return response.status(200).json({
          'success': true,
          'totalConversations': lists.length,
          'review': avg,
          'totalVIew': totalVIew,
          'subscribtions': subscribtions,
        })
       return lists.length
      }
    sendPushNotification(data, dtoken, text) {
      let notific = {
        title: 'FastexPay',
        body: `${data.user.firstName} ${data.user.lastName}\n\n${text}.`,
        // click_action: data.click_action
      }
      var message = {
        data: {
          click_action: "FLUTTER_NOTIFICATION_CLICK",
          sender: `${data.user.firstName} ${data.user.lastName}`,
          msg: `${text}`,
          // conversation: `${data.conversation.id}`
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

  async destroy ({ params, request, response }) {
  }
}

module.exports = ServiceController
