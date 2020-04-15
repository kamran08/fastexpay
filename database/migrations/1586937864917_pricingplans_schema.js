'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PricingplansSchema extends Schema {
  up () {
    this.create('pricingplans', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('pricingplans')
  }
}

module.exports = PricingplansSchema
