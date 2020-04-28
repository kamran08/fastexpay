'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reservation extends Model {
    seller() {
      return this.belongsTo('App/Models/User', 'seller_id')
    }
    buyer() {
      return this.belongsTo('App/Models/User', 'buyer_id')
    }
    service() {
      return this.belongsTo('App/Models/Service', 'service_id')
    }
}

module.exports = Reservation
