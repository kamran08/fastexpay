'use strict'
const Reservation = use('App/Models/Reservation');
const Notification = use('App/Models/Notification');
const ReservationPaymest = use('App/Models/ReservationPaymest');
const firebase = require('../../../start/firebase')
const moment = require('moment');
class ReservationController {

  async storeReservation({ params, request, response, auth}) {
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
        var date1 = new Date();
         let ob = {
           service_id: data.service_id,
           seller_id: data.seller_id,
           buyer_id: user.id,
           seller_mobile: data.seller_mobile,
           buyer_mobile: data.buyer_mobile ? data.buyer_mobile:null,
           palace: data.palace,
           price: data.price,
           isPaid: 0,
           reservationAmount: data.reservationAmount,
           reservationDate: date1,
           serviceType: data.serviceType,
         }
        if (data.serviceType == 'product') {
           ob.quantity = data.quantity
         }
         else{
             ob.duration = data.duration
         }

        let reserv = await Reservation.create(ob)



         if (user.app_Token) {
           let obj1 = {
             user: user,
           }
           this.sendPushNotification(obj1, user.app_Token, "Your reservation Has been created, waiting for subscribe!!")
         }


         let notiObject = {
           notiFrom: null,
           notiFor: user.id,
           type: "reservation",
           titile: "FastexPay",
           descriptions: "Your reservation Has been created ,waiting for subscribe!!",
           trac: service.id,
         }
         await Notification.create(notiObject)

        return response.status(200).json({
        'success': true,
        'reservation': reserv
        })

  }
  
  async subscribeReservation({ params, request, response, auth }) {
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

      let ob={
          paymentType: data.paymentType,
          isPaid: 1,
          status: "recived",
      }
      await Reservation.query().where('id', data.reservationId).update(ob)
      // notification
      if (user.app_Token) {
        let obj1 = {
          user: user,
        }
        this.sendPushNotification(obj1, user.app_Token, "Your reservation Amount has been reviced!!")
      }


      let notiObject = {
        notiFrom: null,
        notiFor: user.id,
        type: "reservation",
        titile: "FastexPay",
        descriptions: "Your reservation Amount has been reviced!!",
        trac: service.id,
      }
      await Notification.create(notiObject)
      // notification



      let reserve = await Reservation.query().where('id', data.reservationId).first()
      var date1 = new Date();
      let ob2={
          paymentType: data.paymentType,
          seller_id: reserve.seller_id,
          buyer_id: reserve.buyer_id,
          amount: reserve.reservationAmount,
          paymentDate: date1,
          adminRecive: 1,
          service_id: reserve.service_id,
      }
      
      
      let payment =await ReservationPaymest.create(ob2)

       return response.status(200).json({
         reservation: reserve,
         payment: payment,
         'success': true,
       })
  }

  async getReservation({ params, request, response, auth }) {
        let user = {}

        try {
          user = await auth.getUser()
        } catch (error) {
          return response.status(401).json({
            message: 'You are not authorized!',
            success: false,
          })
        }
    let data = await Reservation.query().where('isPaid', 1).with('seller').with('buyer').with('service').fetch()
    
    return response.status(200).json({
      reservation: data,
      'success': true,
    })

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
  async updateReservationStatus({ params, request, response, auth }) {

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


      //  user.id = 1

       let reserv =await Reservation.query().where('id', data.id).first()
       let u=''
       let ob={
         status: data.status
       }

       if (user.userType == 'general') {
         if (user.id == reserv.seller_id) {
             ob.hand = "seller"
             u = User.query().where('id', reserv.buyer_id)
         }
         else{
             ob.hand = "buyer"
             u = User.query().where('id', reserv.seller_id)
         }

       }
       else{
          ob.hand = "admin"
       }

       await Reservation.query().where('id',data.id).update(ob)

       let rrr = await Reservation.query().where('id', data.id).first()
       let admin = await Reservation.query().where('userType', 'admin').first()



       if (u.app_Token) {
         let obj1 = {
           user: u,
         }
         this.sendPushNotification(obj1, u.app_Token, "reservation has been updated to " + ob+" by "+ob.hand)
       }
       if (admin.app_Token) {
         let obj2 = {
           user: admin,
         }
         this.sendPushNotification(obj2, admin.app_Token, "reservation has been updated to " + ob + " by " + ob.hand)

         
       }

       if(admin){
         let notiObject1 = {
           notiFrom: user.id,
           notiFor: admin.id,
           type: "reservation",
           titile: "Your reservation status has been updated",
           descriptions: "reservation has been updated to " + ob + " by " + ob.hand,
           trac: reserv.id,
         }
         await Notification.create(notiObject1)
       }

       if(u){
            let notiObject = {
              notiFrom: user.id,
              notiFor: u.id,
              type: "reservation",
              titile: "Your reservation status has been updated",
              descriptions: "reservation has been updated to " + ob + " by " + ob.hand,
              trac: reserv.id,
            }
            await Notification.create(notiObject)

       }
    

       return response.status(200).json({
         reservation: rrr,
         'success': true,
       })

      //  pending , withdraw, complete , completed, cancel it comes from buyer canceled 


  }

  

}

module.exports = ReservationController
