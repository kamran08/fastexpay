'use strict'
const Route = use('Route')

Route.post('/app/storeReservation', 'ReservationController.storeReservation')
Route.post('/app/subscribeReservation', 'ReservationController.subscribeReservation')
Route.get('/app/getReservation', 'ReservationController.getReservation')