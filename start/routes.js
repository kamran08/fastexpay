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

const Route = use('Route')
Route.post('/login', 'HomeController.userLogin')
Route.post('/storeTeamData', 'HomeController.storeTeamData')
Route.post('/updatedTeam', 'HomeController.updatedTeam')
Route.post('/deletesingleMember', 'HomeController.deletesingleMember')
Route.post('/storeReviewData', 'HomeController.storeReviewData')
Route.get('/getAllReviews', 'HomeController.getAllReviews')
Route.get('/getAllPublishReviews', 'HomeController.getAllPublishReviews')
Route.post('/updateReviews', 'HomeController.updateReviews')
Route.get('/getTeamMember', 'HomeController.getTeamMember')
Route.get('/getPrimeReview', 'HomeController.getPrimeReview')
Route.get('/getSingleDoctor/:docId', 'HomeController.getSingleDoctor')

Route.get('app/initdata', 'HomeController.initdata')
Route.get('/logout', 'HomeController.logout')
Route.post('/register', 'HomeController.userRegister')
Route.post('/uploadImages', 'HomeController.uploadImages')
Route.post('app/sendMail', 'HomeController.sendApointmentInfo')
Route.post('app/sendContactMail', 'HomeController.sendContractInfo')
Route.post('/updatePrimeReview', 'HomeController.updatePrimeReview')
Route.any('*', 'NuxtController.render')


