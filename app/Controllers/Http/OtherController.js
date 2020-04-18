'use strict'
const Country = use('App/Models/Country');
class OtherController {


    // 
    async getCountry ({ params, request, response }) {
        return await Country.all()
    }
    async getDivisions ({ params, request, response }) {
        return await Country.query().where('country_id', params.id).fetch()
    }
    async getSubDivisions ({ params, request, response }) {
        return await Country.query().where('division_id', params.id).fetch()
    }
    async getState ({ params, request, response }) {
        return await Country.query().where('sub_division_id', params.id).fetch()
    }
}

module.exports = OtherController
