'use strict'
const Route = use('Route')

// get chat list
// Route.get('/app/messenger/conversation/get/list', 'ChatController.getConversationList')

// // get chat history by id
// Route.get('/app/messenger/converstaion/:id', 'ChatController.getChatHistory')

// // get previous message of same chat
// Route.get('/app/messenger/conversation/previous-chat/:conId/:id', 'ChatController.getMoreMessages')


// // insert chat
// Route.post('/app/messenger/chat/add', 'ChatController.insertChat')


// service 

Route.post('/app/addNewService', 'ServiceController.addNewService')
Route.post('/app/subscribeService', 'ServiceController.subscribeService')

// services 
 Route.get('/app/getAll', 'ServiceController.getAll')
 Route.get('/app/getAllServices', 'ServiceController.getAllServices')
 Route.get('/app/getAllServicesById/:id', 'ServiceController.getAllServicesById')


//  product
 Route.get('/app/getAllProduct', 'ServiceController.getAllProduct')
 Route.get('/app/getAllProductById/:id', 'ServiceController.getAllProductById')

//  new view
Route.post('/app/addNewViewToService', 'ServiceController.addNewViewToService')
Route.get('/app/getMostViewedService', 'ServiceController.getMostViewedService')
Route.get('/app/getMostViewedProduct', 'ServiceController.getMostViewedProduct')
Route.get('/app/getCoversationWithSeller/:id', 'ServiceController.getCoversationWithSeller')


// http: //fastexpay.appifylab.com/

// reviews 
Route.post('/app/giveReview', 'ServiceController.giveReview')


