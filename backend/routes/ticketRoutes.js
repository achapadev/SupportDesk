const express = require('express');
const router = express.Router();
const { getTickets, createTicket } = require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');

// if we use router.route we can chain ..get ..post etc..
router.route('/').get(protect, getTickets).post(protect, createTicket);

module.exports = router;
