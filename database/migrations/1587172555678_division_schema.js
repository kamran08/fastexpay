'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DivisionSchema extends Schema {
  up () {
    this.create('divisions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('divisions')
  }
}

module.exports = DivisionSchema
