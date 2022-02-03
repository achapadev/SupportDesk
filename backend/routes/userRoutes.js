const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');

// to use protected route pass as 2nd argument below

router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/me', protect, getMe);

module.exports = router;
