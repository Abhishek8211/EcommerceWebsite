// Authentication Routes
const express = require('express');
const router = express.Router();
const {
    register,
    login,
    sendOTP,
    verifyOTP,
    getProfile
} = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);

// Protected routes
router.get('/profile', protect, getProfile);

module.exports = router;
