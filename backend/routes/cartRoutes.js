// Cart Routes
const express = require('express');
const router = express.Router();
const {
    getCart,
    addToCart,
    updateCart,
    removeFromCart,
    clearCart
} = require('../controllers/cartController');
const { protect } = require('../middleware/auth');

// All cart routes are protected (require login)
router.get('/', protect, getCart);
router.post('/add', protect, addToCart);
router.put('/update', protect, updateCart);
router.delete('/remove/:productId', protect, removeFromCart);
router.delete('/clear', protect, clearCart);

module.exports = router;
