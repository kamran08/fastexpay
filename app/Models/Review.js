'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Review extends Model {

    images () {
        return this.hasMany('App/Models/Image', 'id', 'reviewId')
      }
}

module.exports = Review
