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
Route.get('/getTeamMember', 'HomeController.getTeamMember')

Route.get('app/initdata', 'HomeController.initdata')
Route.get('/logout', 'HomeController.logout')
Route.post('/register', 'HomeController.userRegister')
Route.post('/uploadImages', 'HomeController.uploadImages')
Route.any('*', 'NuxtController.render')


