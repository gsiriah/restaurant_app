const express = require('express');
const router = express.Router();
const reservationController = require('../controller/reservation.controller');

router.get("/getAllReservations",reservationController.getAllReservations);
router.post("/createReservation",reservationController.createReservation);

module.exports = router;