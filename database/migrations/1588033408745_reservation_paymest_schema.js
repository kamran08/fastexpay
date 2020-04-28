'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservationPaymestSchema extends Schema {
  up () {
    this.create('reservation_paymests', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('reservation_paymests')
  }
}

module.exports = ReservationPaymestSchema
