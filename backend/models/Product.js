// Product Model - Defines product schema
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide product title'],
        trim: true,
        maxlength: [200, 'Title cannot exceed 200 characters']
    },
    description: {
        type: String,
        required: [true, 'Please provide product description'],
        maxlength: [2000, 'Description cannot exceed 2000 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please provide product price'],
        min: [0, 'Price cannot be negative']
    },
    originalPrice: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0,
        min: [0, 'Discount cannot be negative'],
        max: [100, 'Discount cannot exceed 100%']
    },
    category: {
        type: String,
        required: [true, 'Please provide product category'],
        enum: ['electronics', 'fashion', 'home', 'sports', 'books']
    },
    subcategory: {
        type: String,
        default: ''
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, 'Rating cannot be negative'],
        max: [5, 'Rating cannot exceed 5']
    },
    reviews: {
        type: Number,
        default: 0
    },
    images: [{
        type: String,
        required: true
    }],
    stock: {
        type: Number,
        required: [true, 'Please provide stock quantity'],
        default: 0,
        min: [0, 'Stock cannot be negative']
    },
    inStock: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

// Update inStock status based on stock quantity
productSchema.pre('save', function(next) {
    this.inStock = this.stock > 0;
    next();
});

module.exports = mongoose.model('Product', productSchema);
