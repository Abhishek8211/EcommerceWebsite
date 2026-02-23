// Order Model - User orders
const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    title: String,
    image: String,
    price: Number,
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [orderItemSchema],
    shippingAddress: {
        fullName: { type: String, required: true },
        mobile: { type: String, required: true },
        email: String,
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: String, required: true },
        landmark: String
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['cod', 'card', 'upi']
    },
    totalPrice: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    },
    deliveryDate: {
        type: Date
    }
}, {
    timestamps: true
});

// Set estimated delivery date (3 days from order)
orderSchema.pre('save', function(next) {
    if (!this.deliveryDate) {
        this.deliveryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    }
    next();
});

module.exports = mongoose.model('Order', orderSchema);
