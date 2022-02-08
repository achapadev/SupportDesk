const express = require('express');
const router = express.Router();
const {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} = require('../controllers/ticketController');

const { protect } = require('../middleware/authMiddleware');

// if we use router.route we can chain ..get ..post etc..
router.route('/').get(protect, getTickets).post(protect, createTicket);

router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
