const Server = use('Server')
const io = use('socket.io')(Server.getInstance())

// const ChatController = use('App/Controllers/Http/ChatController')
// io.on('connection', function (socket) {
//   ChatController.goMessage(socket, io)
// })



io.on('connection', function (socket) {
  console.log('socket id', socket.id)

  console.log('query', socket.request._query.conversation_id)
  // console.log('query', socket._query.orderId)
  // sender
  socket.on(`conversation_id_${socket.request._query.conversation_id}`, (data) => { 

  // reciver
    io.emit(`conversation_id_from_server_${socket.request._query.conversation_id}`, data)
  })

  socket.on(`chat_typing_${socket.request._query.conversation_id}`, (data) => { 

  // reciver
    io.emit(`chat_typing_from_server_${socket.request._query.conversation_id}`, data)
  })

  socket.on('disconnect', function(){ 
    console.log(`${socket.request._query.conversation_id} no driver has been disconnected!`)

    io.emit(`driver_${socket.request._query.conversation_id}_disconnected`, `${socket.request._query.conversation_id} no driver has been disconnected!`)
  });


})
