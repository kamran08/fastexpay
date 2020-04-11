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

const Route = use('Route')
Route.post('/app/login', 'AuthController.userLogin')

// Route.get('/getSingleDoctor/:docId', 'HomeController.getSingleDoctor')

Route.get('app/initdata', 'HomeController.initdata')
Route.get('app/getUser', 'HomeController.getUser')
Route.get('/logout', 'HomeController.logout')
Route.post('/app/userRegister', 'AuthController.userRegister')

Route.post('/uploadImages', 'HomeController.uploadImages')
Route.post('app/sendMail', 'HomeController.sendApointmentInfo')
Route.post('app/sendContactMail', 'HomeController.sendContractInfo')


