// Notification Routes
const express = require('express');
const router = express.Router();
const {
    getNotifications,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification
} = require('../controllers/notificationController');
const { protect, authorize } = require('../middleware/auth');

// Protected routes (require login)
router.get('/', protect, getNotifications);
router.put('/read/:id', protect, markAsRead);
router.put('/read-all', protect, markAllAsRead);
router.delete('/:id', protect, deleteNotification);

// Admin routes
router.post('/add', protect, authorize('admin'), addNotification);

module.exports = router;
