'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Pricingplan = use('App/Models/Pricingplan');
const Service = use('App/Models/Service');
const Income = use('App/Models/Income');
const Review = use('App/Models/Review');
const Conversation = use('App/Models/Conversation');

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
// {
//   planId, id 
//   paymentType

// }
// let user ={
//     id:1
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

    let str = request.input('str') ? request.input('str') : ''
    
    let alldata = Service.query().with('country').with('division').with('subDivision').with('state').with('users').with('images')

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
    let services = await Service.query().with('country').with('division').with('subDivision').with('state').with('users').with('images').where(`service_type`, "service").fetch()

    return response.status(200).json({
      'success': true,
      'service': services
    })

  }
  async getAllServicesById ({ params, request, response }) {
    let service = await Service.query().with('country').with('division').with('images').with('subDivision').with('state').with('users').where('service_type', 'service').where('id', params.id).first()
    return response.status(200).json({
      'success': true,
      'service': service
    })

  }

  // product

    async getAllProduct ({ params, request, response }) {
    let product = await Service.query().with('country').with('division').with('images').with('subDivision').with('users').with('state').where('service_type', 'product').fetch()
    return response.status(200).json({
      'success': true,
      'product': product
    })

  }
  async getAllProductById ({ params, request, response }) {
    let service = await Service.query().with('country').with('division').with('images').with('subDivision').with('users').with('state').where('service_type', 'product').where('id', params.id).first()
    return response.status(200).json({
      'success': true,
      'product': product
    })

  }
  async addNewViewToService ({ params, request, response }) {
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
     let service = await Service.query().with('country').with('division').with('images').with('subDivision').with('users').with('state').where('service_type', 'service').orderBy('view', 'desc').limit(20).fetch()

    return response.status(200).json({
      'success': true,
      'services': service
    })

  }
  async getMostViewedProduct({ params, request, response }) {
  let service = await Service.query().with('country').with('division').with('images').with('subDivision').with('users').with('state').where('service_type', 'product').orderBy('view', 'desc').limit(20).fetch()

    return response.status(200).json({
      'success': true,
      'services': service
    })

  }
  async getCoversationWithSeller({ params, request, response }) {

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
  async giveReview({ params, request, response }) {
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

      
    let service = await Service.query().with('id',data.id).first()
     let ob = {
       review_id: user.id,
       review_for: user.id,
     }



    return response.status(200).json({
      'success': true,
      'services': service
    })

  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ServiceController
