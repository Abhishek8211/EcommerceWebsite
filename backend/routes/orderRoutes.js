// Order Routes
const express = require('express');
const router = express.Router();
const {
    createOrder,
    getMyOrders,
    getOrder,
    updateOrderStatus
} = require('../controllers/orderController');
const { protect, authorize } = require('../middleware/auth');

// Protected routes (require login)
router.post('/', protect, createOrder);
router.get('/my-orders', protect, getMyOrders);
router.get('/:id', protect, getOrder);

// Admin routes
router.put('/:id/status', protect, authorize('admin'), updateOrderStatus);

module.exports = router;
