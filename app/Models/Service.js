'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Service extends Model {
    country(){
        return this.belongsTo('App/Models/Country', 'country_id')
    }
    division(){

        return this.belongsTo('App/Models/Division', 'division_id')
    }
    subDivision(){

        return this.belongsTo('App/Models/SubDivision', 'sub_division_id')
    }
    state(){
        return this.belongsTo('App/Models/State', 'state_id')
    }

}

module.exports = Service
