'use strict'
const Country = use('App/Models/Country');
const Division = use('App/Models/Division');
const SubDivision = use('App/Models/SubDivision');
const State = use('App/Models/State');
class OtherController {


    // 
    async getCountry ({ params, request, response }) {

        let countries =  await Country.all()
        return response.status(401).json({
            countries: countries,
            success: true,
        })
    }
    async getDivisions ({ params, request, response }) {
        let divisions = await Division.query().where('country_id', params.id).fetch()
        return response.status(401).json({
            divisions: divisions,
            success: true,
        })
    }
    async getSubDivisions ({ params, request, response }) {
        let subDiv = await SubDivision.query().where('division_id', params.id).fetch()
        return response.status(401).json({
            sub_divisions: subDiv,
            success: true,
        })
    }
    async getState ({ params, request, response }) {
        let states = await State.query().where('sub_division_id', params.id).fetch()
        return response.status(401).json({
            states: states,
            success: true,
        })
    }
}

module.exports = OtherController
