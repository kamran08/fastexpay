'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

require('./Routes/chat')
require('./Routes/service')
require('./Routes/reservation')

const Route = use('Route')
Route.post('/app/login', 'AuthController.userLogin')




// Route.get('/getSingleDoctor/:docId', 'HomeController.getSingleDoctor')

Route.get('app/initdata', 'HomeController.initdata')
Route.get('app/getUser', 'HomeController.getUser')
Route.get('/logout', 'HomeController.logout')
Route.post('/app/userRegister', 'AuthController.userRegister')

Route.post('/app/updateUser', 'HomeController.updateUser')

Route.post('/app/uploadImages', 'HomeController.uploadImages')
Route.post('app/sendMail', 'HomeController.sendApointmentInfo')
Route.post('app/sendContactMail', 'HomeController.sendContractInfo')




// other data
Route.get('/app/getPricing', 'OtherController.getPricing')
Route.get('/newapi', 'OtherController.newapi')
Route.get('/app/country', 'OtherController.getCountry')

Route.get('/app/getState/:id', 'OtherController.getState')
Route.get('/app/getDivisions/:id', 'OtherController.getDivisions')
Route.get('/app/getSubDivisions/:id', 'OtherController.getSubDivisions')

// notification 

Route.get('/app/getUserNotification', 'OtherController.getUserNotification')
Route.get('/app/getUserNotificationlimit', 'OtherController.getUserNotificationlimit')

Route.post('/app/updateNotificationById', 'OtherController.updateNotificationById')
Route.post('/app/seenAllNotification', 'OtherController.seenAllNotification')


// http://fastexpay.appifylab.com/app/seenAllNotification




