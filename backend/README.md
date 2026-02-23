# E-Commerce Backend API

Complete backend system for e-commerce platform built with Node.js, Express, and MongoDB.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment
Edit `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-secret-key-here
FRONTEND_URL=http://127.0.0.1:5500
```

### 3. Install MongoDB
- **Windows**: Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- **Mac**: `brew install mongodb-community`
- **Linux**: `sudo apt-get install mongodb`

### 4. Start MongoDB
```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongod
```

### 5. Start Backend Server
```bash
# Development mode (auto-restart)
npm run dev

# Production mode
npm start
```

Server will run on: `http://localhost:5000`

---

## 📁 Project Structure

```
backend/
├── server.js              # Main entry point
├── .env                   # Environment variables
├── package.json           # Dependencies
├── config/
│   └── db.js             # MongoDB connection
├── models/
│   ├── User.js           # User schema
│   ├── Product.js        # Product schema
│   ├── Cart.js           # Cart schema
│   ├── Order.js          # Order schema
│   └── Notification.js   # Notification schema
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   ├── orderController.js
│   └── notificationController.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│   └── notificationRoutes.js
└── middleware/
    ├── auth.js           # JWT authentication
    └── errorHandler.js   # Error handling
```

---

## 🔐 API Endpoints

### Authentication
```
POST   /api/auth/register       - Register new user
POST   /api/auth/login          - Login with email/mobile
POST   /api/auth/send-otp       - Send OTP to mobile
POST   /api/auth/verify-otp     - Verify OTP and login
GET    /api/auth/profile        - Get user profile (Protected)
```

### Products
```
GET    /api/products            - Get all products (filters: category, search, price)
GET    /api/products/:id        - Get single product
POST   /api/products            - Create product (Admin only)
PUT    /api/products/:id        - Update product (Admin only)
DELETE /api/products/:id        - Delete product (Admin only)
```

### Cart
```
GET    /api/cart                - Get user cart (Protected)
POST   /api/cart/add            - Add item to cart (Protected)
PUT    /api/cart/update         - Update cart item (Protected)
DELETE /api/cart/remove/:id     - Remove item from cart (Protected)
DELETE /api/cart/clear          - Clear cart (Protected)
```

### Orders
```
POST   /api/orders              - Create order (Protected)
GET    /api/orders/my-orders    - Get user orders (Protected)
GET    /api/orders/:id          - Get single order (Protected)
PUT    /api/orders/:id/status   - Update order status (Admin only)
```

### Notifications
```
GET    /api/notifications       - Get user notifications (Protected)
POST   /api/notifications/add   - Create notification (Admin only)
PUT    /api/notifications/read/:id      - Mark as read (Protected)
PUT    /api/notifications/read-all      - Mark all as read (Protected)
DELETE /api/notifications/:id           - Delete notification (Protected)
```

---

## 🔗 Frontend Integration

### 1. Store Token in localStorage
```javascript
// After login/register
localStorage.setItem('token', response.token);
localStorage.setItem('user', JSON.stringify(response.user));
```

### 2. API Helper Function
```javascript
const API_URL = 'http://localhost:5000/api';

async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    
    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
            ...options.headers
        }
    };

    const response = await fetch(`${API_URL}${endpoint}`, config);
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.message || 'Request failed');
    }
    
    return data;
}
```

### 3. Example: Register User
```javascript
async function register(name, email, mobile, password) {
    try {
        const data = await apiCall('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, mobile, password })
        });
        
        // Save token
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        return data;
    } catch (error) {
        console.error('Registration failed:', error.message);
        throw error;
    }
}
```

### 4. Example: Get Products
```javascript
async function getProducts(filters = {}) {
    try {
        const queryParams = new URLSearchParams(filters).toString();
        const data = await apiCall(`/products?${queryParams}`);
        return data.products;
    } catch (error) {
        console.error('Failed to fetch products:', error.message);
        throw error;
    }
}

// Usage
const products = await getProducts({ category: 'electronics', sort: 'price-low' });
```

### 5. Example: Add to Cart
```javascript
async function addToCart(productId, quantity = 1) {
    try {
        const data = await apiCall('/cart/add', {
            method: 'POST',
            body: JSON.stringify({ productId, quantity })
        });
        
        return data.cart;
    } catch (error) {
        console.error('Failed to add to cart:', error.message);
        throw error;
    }
}
```

### 6. Example: Create Order
```javascript
async function createOrder(orderData) {
    try {
        const data = await apiCall('/orders', {
            method: 'POST',
            body: JSON.stringify(orderData)
        });
        
        return data.order;
    } catch (error) {
        console.error('Order failed:', error.message);
        throw error;
    }
}

// Usage
const order = await createOrder({
    items: [
        { productId: '123', quantity: 2 },
        { productId: '456', quantity: 1 }
    ],
    shippingAddress: {
        fullName: 'John Doe',
        mobile: '9876543210',
        address: '123 Main St',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
    },
    paymentMethod: 'cod'
});
```

### 7. Check Authentication
```javascript
function isLoggedIn() {
    return !!localStorage.getItem('token');
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login.html';
}

function getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}
```

---

## 🛠 Testing the API

### Using Postman or Thunder Client

1. **Register User**
```
POST http://localhost:5000/api/auth/register
Body (JSON):
{
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "9876543210",
    "password": "password123"
}
```

2. **Login**
```
POST http://localhost:5000/api/auth/login
Body (JSON):
{
    "emailOrMobile": "john@example.com",
    "password": "password123"
}
```

3. **Get Products** (Copy token from login response)
```
GET http://localhost:5000/api/products
Headers:
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## 🔒 Security Features

✅ Password hashing with bcrypt  
✅ JWT token authentication  
✅ Protected routes middleware  
✅ Role-based access control (admin/user)  
✅ Input validation  
✅ CORS configuration  
✅ Error handling  

---

## 📝 Notes

- Change `JWT_SECRET` in `.env` to a secure random string in production
- OTP system is simulated - integrate real SMS service for production
- MongoDB must be running before starting the server
- Default admin user needs to be created manually in database

---

## 🐛 Troubleshooting

**MongoDB connection error:**
- Make sure MongoDB is installed and running
- Check `MONGODB_URI` in `.env`

**Port already in use:**
- Change `PORT` in `.env`
- Or kill process: `npx kill-port 5000`

**CORS errors:**
- Update `FRONTEND_URL` in `.env` to match your frontend URL
