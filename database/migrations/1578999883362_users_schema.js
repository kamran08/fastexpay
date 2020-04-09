'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('firstName', 80)
      table.string('lastName', 80)
      table.string('country', 191).nullable()
      table.string('varification_code', 191).nullable()
      table.string('image', 191).nullable()
      table.string('file', 191).nullable()
      table.string('email', 191).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
