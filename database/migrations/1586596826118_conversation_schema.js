'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConversationSchema extends Schema {
  up() {
    this.create('conversations', (table) => {
      table.increments()
      table.integer('sender')
      table.integer('receiver')
      table.string('lastMessage')
      table.string('lastMessageSender')
      table.timestamps()
    })
  }

  down() {
    this.drop('conversations')
  }
}

module.exports = ConversationSchema
