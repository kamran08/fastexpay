'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatSchema extends Schema {
  up() {
    this.create('chats', (table) => {
      table.increments()
      table.integer('message_sender')
      table.integer('message_receiver')
      table.integer('connection_id')
      table.string('message')
      table.integer('seen')
      table.timestamps()
    })
  }

  down() {
    this.drop('chats')
  }
}

module.exports = ChatSchema
