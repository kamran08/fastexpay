'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceImageSchema extends Schema {
  up () {
    this.create('service_images', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('service_images')
  }
}

module.exports = ServiceImageSchema
