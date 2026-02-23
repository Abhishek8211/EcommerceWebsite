// Seed Database with Sample Products
// Run this file once to populate your database with products
// Usage: node utils/seedProducts.js

require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const connectDB = require('../config/db');

// Sample products (matching your frontend)
const sampleProducts = [
    {
        title: "Apple iPhone 15 Pro Max",
        description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system. 6.7-inch Super Retina XDR display.",
        price: 134900,
        originalPrice: 159900,
        discount: 16,
        category: "electronics",
        subcategory: "mobiles",
        rating: 4.8,
        reviews: 2547,
        images: ["https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg"],
        stock: 50,
        inStock: true
    },
    {
        title: "Samsung Galaxy S24 Ultra",
        description: "Premium Android flagship with 200MP camera, S Pen, Snapdragon 8 Gen 3, 6.8-inch Dynamic AMOLED display.",
        price: 129999,
        originalPrice: 149999,
        discount: 13,
        category: "electronics",
        subcategory: "mobiles",
        rating: 4.7,
        reviews: 1823,
        images: ["https://m.media-amazon.com/images/I/71m8PHCAoiL._SL1500_.jpg"],
        stock: 45,
        inStock: true
    },
    {
        title: "Sony WH-1000XM5",
        description: "Industry-leading noise cancellation, exceptional sound quality, 30-hour battery life.",
        price: 29990,
        originalPrice: 34990,
        discount: 14,
        category: "electronics",
        subcategory: "headphones",
        rating: 4.9,
        reviews: 3421,
        images: ["https://m.media-amazon.com/images/I/61vKjT0OwKL._SL1500_.jpg"],
        stock: 100,
        inStock: true
    },
    {
        title: "Dell XPS 15 Laptop",
        description: "13th Gen Intel i7, 16GB RAM, 512GB SSD, NVIDIA RTX 4050, 15.6-inch 4K OLED display.",
        price: 154990,
        originalPrice: 179990,
        discount: 14,
        category: "electronics",
        subcategory: "laptops",
        rating: 4.6,
        reviews: 876,
        images: ["https://m.media-amazon.com/images/I/71EiOV1AmtL._SL1500_.jpg"],
        stock: 25,
        inStock: true
    },
    {
        title: "Nike Air Max 270",
        description: "Comfortable running shoes with Max Air cushioning, breathable mesh upper.",
        price: 12995,
        originalPrice: 16995,
        discount: 24,
        category: "fashion",
        subcategory: "shoes",
        rating: 4.5,
        reviews: 5632,
        images: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/zwxes8uud05rkuei1mpt/air-max-270-shoes-6VTJjF.png"],
        stock: 200,
        inStock: true
    },
    {
        title: "Canon EOS R6 Mark II",
        description: "24.2MP full-frame mirrorless camera with 4K 60p video, in-body stabilization.",
        price: 224990,
        originalPrice: 249990,
        discount: 10,
        category: "electronics",
        subcategory: "cameras",
        rating: 4.8,
        reviews: 432,
        images: ["https://m.media-amazon.com/images/I/81V4wXJd9BL._SL1500_.jpg"],
        stock: 15,
        inStock: true
    },
    {
        title: "Apple AirPods Pro (2nd Gen)",
        description: "Active noise cancellation, adaptive audio, personalized spatial audio, MagSafe charging.",
        price: 24900,
        originalPrice: 27900,
        discount: 11,
        category: "electronics",
        subcategory: "accessories",
        rating: 4.7,
        reviews: 8934,
        images: ["https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg"],
        stock: 150,
        inStock: true
    },
    {
        title: "Google Pixel 8 Pro",
        description: "Google Tensor G3 chip, best-in-class camera with AI features, 6.7-inch LTPO display.",
        price: 106999,
        originalPrice: 119999,
        discount: 11,
        category: "electronics",
        subcategory: "mobiles",
        rating: 4.6,
        reviews: 1245,
        images: ["https://m.media-amazon.com/images/I/71FuVQtlDOL._SL1500_.jpg"],
        stock: 40,
        inStock: true
    },
    {
        title: "OnePlus 12",
        description: "Snapdragon 8 Gen 3, Hasselblad camera, 100W fast charging, 6.82-inch AMOLED display.",
        price: 64999,
        originalPrice: 74999,
        discount: 13,
        category: "electronics",
        subcategory: "mobiles",
        rating: 4.5,
        reviews: 2341,
        images: ["https://m.media-amazon.com/images/I/71hNaLt8CcL._SL1500_.jpg"],
        stock: 60,
        inStock: true
    },
    {
        title: "Xiaomi 14 Pro",
        description: "Leica camera system, Snapdragon 8 Gen 3, 120W HyperCharge, 6.73-inch LTPO display.",
        price: 79999,
        originalPrice: 89999,
        discount: 11,
        category: "electronics",
        subcategory: "mobiles",
        rating: 4.4,
        reviews: 1876,
        images: ["https://m.media-amazon.com/images/I/71K6H2uFpEL._SL1500_.jpg"],
        stock: 55,
        inStock: true
    },
    {
        title: "Nothing Phone (2)",
        description: "Unique Glyph Interface, Snapdragon 8+ Gen 1, clean Android experience, 6.7-inch LTPO AMOLED.",
        price: 44999,
        originalPrice: 49999,
        discount: 10,
        category: "electronics",
        subcategory: "mobiles",
        rating: 4.3,
        reviews: 1567,
        images: ["https://m.media-amazon.com/images/I/61BrXXlbPWL._SL1500_.jpg"],
        stock: 70,
        inStock: true
    },
    {
        title: "JBL Flip 6",
        description: "Portable Bluetooth speaker with powerful sound, IP67 waterproof, 12-hour playtime.",
        price: 12999,
        originalPrice: 14999,
        discount: 13,
        category: "electronics",
        subcategory: "accessories",
        rating: 4.6,
        reviews: 4521,
        images: ["https://m.media-amazon.com/images/I/71VpZ3UkssL._SL1500_.jpg"],
        stock: 120,
        inStock: true
    },
    {
        title: "Levi's 501 Original Jeans",
        description: "Classic straight-fit jeans, premium denim, iconic design.",
        price: 3999,
        originalPrice: 5999,
        discount: 33,
        category: "fashion",
        subcategory: "clothing",
        rating: 4.5,
        reviews: 12453,
        images: ["https://lsco.scene7.com/is/image/lsco/005010101-front-pdp?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=1840"],
        stock: 300,
        inStock: true
    },
    {
        title: "Fitbit Charge 6",
        description: "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, 7-day battery.",
        price: 14999,
        originalPrice: 17999,
        discount: 17,
        category: "electronics",
        subcategory: "accessories",
        rating: 4.4,
        reviews: 2876,
        images: ["https://m.media-amazon.com/images/I/61y7IpG8EGL._SL1500_.jpg"],
        stock: 90,
        inStock: true
    },
    {
        title: "IKEA MALM Bed Frame",
        description: "Modern queen-size bed frame with storage, sturdy wood construction, easy assembly.",
        price: 24999,
        originalPrice: 29999,
        discount: 17,
        category: "home",
        subcategory: "furniture",
        rating: 4.3,
        reviews: 1234,
        images: ["https://www.ikea.com/in/en/images/products/malm-bed-frame-high-black-brown__0749130_pe745500_s5.jpg"],
        stock: 20,
        inStock: true
    },
    {
        title: "Adidas Ultraboost 23",
        description: "Premium running shoes with Boost cushioning, Primeknit upper, Continental rubber outsole.",
        price: 16995,
        originalPrice: 18995,
        discount: 11,
        category: "fashion",
        subcategory: "shoes",
        rating: 4.7,
        reviews: 6543,
        images: ["https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/example.jpg"],
        stock: 180,
        inStock: true
    },
    {
        title: "PlayStation 5",
        description: "Next-gen gaming console with 4K gaming, ultra-fast SSD, DualSense controller.",
        price: 49990,
        originalPrice: 54990,
        discount: 9,
        category: "electronics",
        subcategory: "gaming",
        rating: 4.8,
        reviews: 9876,
        images: ["https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"],
        stock: 30,
        inStock: true
    },
    {
        title: "Kindle Paperwhite",
        description: "6.8-inch glare-free display, adjustable warm light, waterproof, 8GB storage.",
        price: 12999,
        originalPrice: 14999,
        discount: 13,
        category: "electronics",
        subcategory: "accessories",
        rating: 4.6,
        reviews: 15432,
        images: ["https://m.media-amazon.com/images/I/61V8yMZSp6L._SL1500_.jpg"],
        stock: 100,
        inStock: true
    }
];

// Seed function
async function seedProducts() {
    try {
        // Connect to database
        await connectDB();

        // Clear existing products (optional - comment out if you want to keep existing)
        console.log('🗑️  Clearing existing products...');
        await Product.deleteMany({});

        // Insert sample products
        console.log('📦 Inserting sample products...');
        const products = await Product.insertMany(sampleProducts);

        console.log(`✅ Successfully added ${products.length} products to database!`);
        console.log('\nSample products:');
        products.slice(0, 5).forEach(p => {
            console.log(`  - ${p.title} (₹${p.price})`);
        });
        console.log(`  ... and ${products.length - 5} more`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

// Run seeder
seedProducts();
