'use strict'
const Reservation = use('App/Models/Reservation');
const ReservationPaymest = use('App/Models/ReservationPaymest');
const moment = require('moment');
class ReservationController {

  async storeReservation ({ params, request, response }) {
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

        return response.status(200).json({
        'success': true,
        'reservation': reserv
        })

  }
  
  async subscribeReservation ({ params, request, response }) {
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

  async getReservation ({ params, request, response }) {
        let user = {}

        try {
          user = await auth.getUser()
        } catch (error) {
          return response.status(401).json({
            message: 'You are not authorized!',
            success: false,
          })
        }
    let data = await Reservation.query().where('isPaid', 1).fetch()
    
    return response.status(200).json({
      reservation: data,
      'success': true,
    })

  }
  

}

module.exports = ReservationController
