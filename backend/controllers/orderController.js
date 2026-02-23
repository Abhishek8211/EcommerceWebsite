// Order Controller - Handle order operations
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const Notification = require('../models/Notification');

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
exports.createOrder = async (req, res) => {
    try {
        const { items, shippingAddress, paymentMethod } = req.body;

        // Validate items
        if (!items || items.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No items in order'
            });
        }

        // Calculate total and validate stock
        let totalPrice = 0;
        const orderItems = [];

        for (let item of items) {
            const product = await Product.findById(item.productId);
            
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: `Product ${item.productId} not found`
                });
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({
                    success: false,
                    message: `Insufficient stock for ${product.title}`
                });
            }

            orderItems.push({
                product: product._id,
                title: product.title,
                image: product.images[0],
                price: product.price,
                quantity: item.quantity
            });

            totalPrice += product.price * item.quantity;

            // Reduce stock
            product.stock -= item.quantity;
            await product.save();
        }

        // Create order
        const order = await Order.create({
            user: req.user.id,
            items: orderItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            orderStatus: 'confirmed',
            paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid'
        });

        // Clear user cart
        await Cart.findOneAndUpdate(
            { user: req.user.id },
            { items: [] }
        );

        // Create order notification
        await Notification.create({
            user: req.user.id,
            type: 'order',
            icon: '📦',
            title: 'Order Confirmed!',
            message: `Your order #${order._id.toString().slice(-6)} has been confirmed. Expected delivery in 3 days.`,
            read: false
        });

        res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get user orders
// @route   GET /api/orders/my-orders
// @access  Private
exports.getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id })
            .populate('items.product')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: orders.length,
            orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('items.product')
            .populate('user', 'name email mobile');

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        // Make sure user can only see their own orders (unless admin)
        if (order.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to view this order'
            });
        }

        res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Update order status (Admin only)
// @route   PUT /api/orders/:id/status
// @access  Private/Admin
exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderStatus } = req.body;

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        order.orderStatus = orderStatus;
        
        if (orderStatus === 'delivered') {
            order.paymentStatus = 'paid';
        }

        await order.save();

        // Create notification for status update
        let notificationMessage = '';
        if (orderStatus === 'shipped') {
            notificationMessage = `Your order #${order._id.toString().slice(-6)} has been shipped!`;
        } else if (orderStatus === 'delivered') {
            notificationMessage = `Your order #${order._id.toString().slice(-6)} has been delivered. Thank you!`;
        }

        if (notificationMessage) {
            await Notification.create({
                user: order.user,
                type: 'delivery',
                icon: '🚚',
                title: 'Order Update',
                message: notificationMessage,
                read: false
            });
        }

        res.status(200).json({
            success: true,
            message: 'Order status updated',
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
