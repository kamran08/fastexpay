'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubDivisionSchema extends Schema {
  up () {
    this.create('sub_divisions', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('sub_divisions')
  }
}

module.exports = SubDivisionSchema
