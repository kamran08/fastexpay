'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Pricingplan = use('App/Models/Pricingplan');
const Service = use('App/Models/Service');
const ServiceImage = use('App/Models/ServiceImage');
const moment = require('moment');
Service
/**
 * Resourceful controller for interacting with services
 */
class ServiceController {
 async subscribeService ({ params, request, response }) {
    let data = request.all()


    // id  paymentType subscribe startTime endTime payment, planId
    let plan = await Pricingplan.query().where('id', data.planId)
    // let startTime = 
    

    let service = {
      id: id,
      paymentType: data.paymentType,
      subscribe: 1,
      startTime: 1,
      endTime: 1,
      payment: 1,
    }




 }
 async addNewService ({ params, request, response }) {

    try {
      user = await auth.getUser()
    } catch (error) {
      return response.status(401).json({
        message: 'You are not authorized!',
        success: true,
      })
    }

      let data = request.all()
      let imgs = data.images

      delete data.images

      let service = await Service.create(data)


       imgs = imgs.toJSON()
       // console.log(mdata)
       let images = JSON.parse(JSON.stringify(imgs))
      let serviceimages = []
       for (let i in images){
         let ob = {
            service_id:service.id,
            image: images[i].image,
         }
          let a = await ServiceImage.create(ob)
          serviceimages.push(a)
       }

        return response.status(200).json({
          'success': true,
          'message': 'service added  Successfully please complete second step',
          "service": service,
          "serviceimages": serviceimages,
        })


 }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ServiceController
