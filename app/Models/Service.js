'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

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
    users() {
        return this.belongsTo('App/Models/User', 'seller_id')
    }
    images() {
        return this.hasMany('App/Models/ServiceImage', 'id','service_id')
    }
    coversation() {
        return this.hasMany('App/Models/ServiceImage', 'id','service_id')
    }
    avgRating() {
        return this.hasOne('App/Models/Review', 'id', 'service_id').select('service_id', Database.raw('(cast(AVG(rate) as decimal(10,2))) AS averageRating'))
    }
    // avgRating2() {
    //     return this.hasOne('App/Models/Review', 'id', 'reviewFor').select('reviewFor', Database.raw('(cast(AVG(rate) as decimal(10,2))) AS averageRating'), Database.raw('(cast(sum(rate) as decimal(10,2))) AS totalRating'), Database.raw('(cast(AVG(healthyIndex) as decimal(10,2))) AS averageHealthy'), Database.raw('(cast(sum(healthyIndex) as decimal(10,2))) AS totalHealthy'), Database.raw('(cast(sum(harmfulIndex) as decimal(10,2))) AS totalHarmful'), Database.raw('(cast(AVG(harmfulIndex) as decimal(10,2))) AS averageHarmful')).where('review_type', 'school')
    // }

}

module.exports = Service
