'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Pricingplan = use('App/Models/Pricingplan');
const Service = use('App/Models/Service');
const Income = use('App/Models/Income');

const ServiceImage = use('App/Models/ServiceImage');
const moment = require('moment');
Service
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
// {
//   planId, id 
//   paymentType

// }

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
      seller_id: service.user_id,
      service_id: data.id,
      buyer_id: user.id,
      paymentType: data.paymentType,
      subscribe: 1,
      startTime: date1,
      endTime: date2,
      payment: plan.price,
    }

    let updata = await Service.query().where(id, data.id).update(updateServiceData)
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
    let alldata = Service.query().with('country').with('division').with('subDivision').with('state').fetch()
    return response.status(200).json({
      'success': true,
      'alldata': alldata
    })

  }
  async getAllServices ({ params, request, response }) {
    let service = Service.query().with('country').with('division').with('subDivision').with('state').where('service_type', 'service').fetch()

    return response.status(200).json({
      'success': true,
      'service': service
    })

  }
  async getAllServicesById ({ params, request, response }) {
    let service = Service.query().with('country').with('division').with('subDivision').with('state').where('service_type', 'service').where('id', params.id).first()
    return response.status(200).json({
      'success': true,
      'service': service
    })

  }

  // product

    async getAllProduct ({ params, request, response }) {
    let product = Service.query().with('country').with('division').with('subDivision').with('state').where('service_type', 'product').fetch()
    return response.status(200).json({
      'success': true,
      'product': product
    })

  }
  async getAllProductById ({ params, request, response }) {
    let service = Service.query().with('country').with('division').with('subDivision').with('state').where('service_type', 'product').where('id', params.id).first()
    return response.status(200).json({
      'success': true,
      'product': product
    })

  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ServiceController
