'use strict'
const Pricingplan = use('App/Models/Pricingplan');
const Country = use('App/Models/Country');
const Division = use('App/Models/Division');
const SubDivision = use('App/Models/SubDivision');
const State = use('App/Models/State');
const Notification = use('App/Models/Notification');
class OtherController {


    // 
    async getPricing ({ params, request, response }) {

        let pricingplans = await Pricingplan.all()
        return response.status(200).json({
            plans: pricingplans,
            success: true,
        })
    }
    async getCountry ({ params, request, response }) {

        let countries =  await Country.all()
        return response.status(200).json({
            countries: countries,
            success: true,
        })
    }
    async getState ({ params, request, response }) {
        let states = await State.query().where('countriy_id', params.id).fetch()
        return response.status(200).json({
            states: states,
            success: true,
        })
    }
    async getDivisions ({ params, request, response }) {
        let divisions = await Division.query().where('state_id', params.id).fetch()
        return response.status(200).json({
            divisions: divisions,
            success: true,
        })
    }
    async getSubDivisions ({ params, request, response }) {
        let subDiv = await SubDivision.query().where('division_id', params.id).fetch()
        return response.status(200).json({
            sub_divisions: subDiv,
            success: true,
        })
    }
    async newapi ({ params, request, response }) {
        return  response
        // let subDiv = await SubDivision.query().where('division_id', params.id).fetch()
        // return response.status(200).json({
        //     sub_divisions: subDiv,
        //     success: true,
        // })
    }
    async getUserNotificationlimit ({ params, request, response,auth }) {
         let user = {}

         try {
           user = await auth.getUser()
         } catch (error) {
           return response.status(401).json({
             message: 'You are not authorized!',
             success: false,
           })
         }

        let notification = await Notification.where('notiFor', user.id).orderBy('id', 'desc').limit(10).fetch()
         return response.status(200).json({
           notification: notification,
           success: true,
         })

    }
    async getUserNotification ({ params, request, response,auth }) {
         let user = {}

         try {
           user = await auth.getUser()
         } catch (error) {
           return response.status(401).json({
             message: 'You are not authorized!',
             success: false,
           })
         }

        let notification = await Notification.where('notiFor', user.id).orderBy('id', 'desc').fetch()
         return response.status(200).json({
           notification: notification,
           success: true,
         })

    }
    async updateNotificationById ({ params, request, response,auth }) {
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

        let notification = await Notification.where('notiFor', user.id).where('id',data.id).update(data)
         return response.status(200).json({
           notification: notification,
           success: true,
         })

    }
    async seenAllNotification ({ params, request, response,auth }) {
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

        let notification = await Notification.where('notiFor', user.id).update({isseen:1})
         return response.status(200).json({
           notification: notification,
           success: true,
         })

    }


}

module.exports = OtherController
