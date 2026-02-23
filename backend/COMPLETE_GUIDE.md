# 🎯 COMPLETE BACKEND SETUP GUIDE

# From Zero to Production-Ready E-Commerce Platform

---

## 📚 TABLE OF CONTENTS

1. [Installation & Setup](#installation-setup)
2. [Running the Backend](#running-backend)
3. [Testing APIs](#testing-apis)
4. [Frontend Integration](#frontend-integration)
5. [Database Management](#database-management)
6. [Deployment](#deployment)

---

## 🚀 INSTALLATION & SETUP

### Prerequisites Check

```powershell
# Check Node.js installation
node --version
# Should show: v14.x.x or higher

# Check npm installation
npm --version
# Should show: 6.x.x or higher
```

### Step-by-Step Installation

#### 1. Install Dependencies

```powershell
cd backend
npm install
```

This installs:

- ✅ **express** - Web framework
- ✅ **mongoose** - MongoDB ODM
- ✅ **bcryptjs** - Password hashing
- ✅ **jsonwebtoken** - JWT authentication
- ✅ **dotenv** - Environment variables
- ✅ **cors** - Cross-origin requests
- ✅ **express-validator** - Input validation

#### 2. Setup MongoDB

**Option A: Local MongoDB**

```powershell
# Download from: https://www.mongodb.com/try/download/community
# After installation, MongoDB runs as Windows Service

# Test connection
mongosh
```

**Option B: MongoDB Atlas (Cloud - Recommended)**

1. Sign up: https://www.mongodb.com/cloud/atlas
2. Create FREE cluster
3. Create database user
4. Get connection string
5. Whitelist your IP (0.0.0.0/0 for all IPs)

#### 3. Configure Environment Variables

Edit `backend/.env`:

```env
# Server
PORT=5000
NODE_ENV=development

# Database (choose one)
# Local MongoDB:
MONGODB_URI=mongodb://localhost:27017/ecommerce

# MongoDB Atlas:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# Security (CHANGE THIS!)
JWT_SECRET=your-random-secret-key-change-in-production

# JWT expiry
JWT_EXPIRE=7d

# Frontend URL
FRONTEND_URL=http://127.0.0.1:5500
```

---

## 🎬 RUNNING THE BACKEND

### Start Server

```powershell
# Navigate to backend folder
cd backend

# Development mode (auto-restart on changes)
npm run dev

# OR Production mode
npm start
```

### Expected Output

```
✅ MongoDB Connected: localhost
📊 Database: ecommerce
🚀 Server running in development mode on port 5000
📍 API URL: http://localhost:5000
🔗 Frontend URL: http://127.0.0.1:5500
```

### Verify Server is Running

Open browser: `http://localhost:5000`

Should see:

```json
{
  "success": true,
  "message": "E-commerce API Server",
  "version": "1.0.0",
  "endpoints": {
    "auth": "/api/auth",
    "products": "/api/products",
    "cart": "/api/cart",
    "orders": "/api/orders",
    "notifications": "/api/notifications"
  }
}
```

---

## 🧪 TESTING APIS

### Method 1: Thunder Client (VS Code Extension)

1. **Install Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search "Thunder Client"
   - Install

2. **Test Register API**
   - Click Thunder Client icon
   - Click "New Request"
   - Set Method: `POST`
   - Set URL: `http://localhost:5000/api/auth/register`
   - Go to Body tab
   - Select JSON
   - Paste:

   ```json
   {
     "name": "John Doe",
     "email": "john@example.com",
     "mobile": "9876543210",
     "password": "password123"
   }
   ```

   - Click Send

3. **Expected Response**

   ```json
   {
     "success": true,
     "message": "Registration successful",
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "user": {
       "id": "65abc123...",
       "name": "John Doe",
       "email": "john@example.com",
       "mobile": "9876543210",
       "role": "user"
     }
   }
   ```

4. **Copy the token** - You'll need it for protected routes

### Method 2: PowerShell Commands

**Register User:**

```powershell
$headers = @{
    "Content-Type" = "application/json"
}
$body = @{
    name = "Test User"
    email = "test@example.com"
    mobile = "9876543210"
    password = "password123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" -Method POST -Headers $headers -Body $body
```

**Login:**

```powershell
$body = @{
    emailOrMobile = "test@example.com"
    password = "password123"
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri "http://localhost:5000/api/auth/login" -Method POST -Headers $headers -Body $body

# Save token
$token = $response.token
```

**Get Products (Public):**

```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/products"
```

**Get Profile (Protected):**

```powershell
$authHeaders = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/profile" -Headers $authHeaders
```

---

## 📦 POPULATE DATABASE WITH PRODUCTS

```powershell
# Run seed script to add sample products
cd backend
node utils/seedProducts.js
```

This adds 18 sample products including:

- 6 Smartphones (iPhone, Samsung, Pixel, etc.)
- Electronics (Laptops, Cameras, Headphones)
- Fashion items
- Home furniture
- Gaming consoles

---

## 🔗 FRONTEND INTEGRATION

### Step 1: Add API Helper to HTML

In ALL your HTML files (`index.html`, `login.html`, `checkout.html`, etc.), add:

```html
<!-- Before closing </body> tag -->
<script src="js/api.js"></script>
<script src="js/script.js"></script>
```

### Step 2: Update Login Page

Replace your login form handler in `login.html`:

```javascript
// LOGIN WITH EMAIL/MOBILE
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailOrMobile = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const response = await loginUser(emailOrMobile, password);
    alert("✅ Login successful!");
    window.location.href = "/index.html";
  } catch (error) {
    alert("❌ " + error.message);
  }
});

// REGISTER NEW USER
document
  .getElementById("register-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const mobile = document.getElementById("register-mobile").value;
    const password = document.getElementById("register-password").value;

    try {
      const response = await registerUser(name, email, mobile, password);
      alert("✅ Account created successfully!");
      window.location.href = "/index.html";
    } catch (error) {
      alert("❌ " + error.message);
    }
  });
```

### Step 3: Load Products from Backend

In your `script.js` or `index.html`:

```javascript
// Load products on page load
async function loadProductsFromBackend() {
  try {
    const products = await getProducts();

    // Replace your hardcoded products array
    window.products = products;

    // Render products
    renderProducts(products);
  } catch (error) {
    console.error("Failed to load products:", error);
  }
}

// Call on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  loadProductsFromBackend();

  // If user is logged in, load their data
  if (isLoggedIn()) {
    loadUserCart();
    loadUserNotifications();
  }
});
```

### Step 4: Update Add to Cart

```javascript
async function handleAddToCart(productId) {
  // Check if logged in
  if (!isLoggedIn()) {
    alert("Please login to add items to cart");
    window.location.href = "/login.html";
    return;
  }

  try {
    const cart = await addToCart(productId, 1);
    alert("✅ Added to cart!");

    // Update cart count in UI
    updateCartCount(cart.totalItems);
  } catch (error) {
    alert("❌ " + error.message);
  }
}
```

### Step 5: Update Checkout

```javascript
// PLACE ORDER
async function placeOrder() {
  const shippingAddress = {
    fullName: document.getElementById("full-name").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    pincode: document.getElementById("pincode").value,
    landmark: document.getElementById("landmark").value,
  };

  const paymentMethod = document.querySelector(
    'input[name="payment"]:checked',
  ).value;

  // Get cart items from backend
  const cart = await getCart();
  const items = cart.items.map((item) => ({
    productId: item.product._id,
    quantity: item.quantity,
  }));

  try {
    const order = await createOrder({
      items,
      shippingAddress,
      paymentMethod,
    });

    alert("✅ Order placed successfully!");

    // Redirect to order confirmation
    window.location.href = `/order-success.html?orderId=${order._id}`;
  } catch (error) {
    alert("❌ Order failed: " + error.message);
  }
}
```

### Step 6: Protect Routes

Add this to pages that require login (`checkout.html`, `cart.html`):

```javascript
// At top of script
if (!isLoggedIn()) {
  alert("Please login to continue");
  window.location.href = "/login.html";
}
```

---

## 🛠 DATABASE MANAGEMENT

### Using MongoDB Compass (GUI)

1. **Download**: https://www.mongodb.com/try/download/compass
2. **Connect**: `mongodb://localhost:27017`
3. **View Data**:
   - Database: `ecommerce`
   - Collections: `users`, `products`, `carts`, `orders`, `notifications`

### Create Admin User

**Method 1: MongoDB Compass**

1. Connect to database
2. Select `ecommerce` → `users`
3. Find your user
4. Edit document
5. Change `"role": "user"` to `"role": "admin"`
6. Save

**Method 2: MongoDB Shell**

```javascript
mongosh

use ecommerce

db.users.updateOne(
    { email: "your-email@example.com" },
    { $set: { role: "admin" } }
)
```

### View All Collections

```javascript
// Show all databases
show dbs

// Use ecommerce database
use ecommerce

// Show all collections
show collections

// Count documents
db.users.countDocuments()
db.products.countDocuments()
db.orders.countDocuments()

// Find all users
db.users.find().pretty()

// Find all products
db.products.find().pretty()
```

---

## 🔐 SECURITY BEST PRACTICES

### 1. Change JWT Secret

```env
# Generate random string
JWT_SECRET=a8f5f167f44f4964e6c998dee827110c
```

### 2. Enable CORS for Specific Domain

```javascript
// In server.js
app.use(
  cors({
    origin: "http://yourfrontend.com",
    credentials: true,
  }),
);
```

### 3. Add Rate Limiting

```powershell
npm install express-rate-limit
```

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use("/api/", limiter);
```

---

## 🐛 TROUBLESHOOTING

### Issue: MongoDB Connection Failed

**Solution 1: Check if MongoDB is running**

```powershell
# Windows - Check service
Get-Service MongoDB

# Start if stopped
Start-Service MongoDB
```

**Solution 2: Use MongoDB Atlas**

- Easier for beginners
- No local installation needed
- Free tier available

### Issue: Port 5000 Already in Use

```powershell
# Find what's using port 5000
netstat -ano | findstr :5000

# Kill the process
taskkill /PID <PID> /F

# Or change port in .env
PORT=5001
```

### Issue: JWT Token Invalid

- Check if token is being sent in Authorization header
- Format: `Bearer <token>`
- Check token expiry
- Verify JWT_SECRET matches

### Issue: CORS Error

```env
# Update in .env
FRONTEND_URL=http://127.0.0.1:5500
```

Or allow all origins (development only):

```javascript
app.use(cors({ origin: "*" }));
```

---

## 📊 API TESTING CHECKLIST

- [ ] Server starts without errors
- [ ] Can access http://localhost:5000
- [ ] Register new user returns token
- [ ] Login with email works
- [ ] Login with mobile works
- [ ] Get products returns array
- [ ] Add to cart requires authentication
- [ ] Create order works
- [ ] Notifications are created

---

## 🎯 DEPLOYMENT (Optional)

### Deploy to Heroku

1. **Install Heroku CLI**
2. **Login**
   ```powershell
   heroku login
   ```
3. **Create App**
   ```powershell
   heroku create your-ecommerce-backend
   ```
4. **Set Environment Variables**
   ```powershell
   heroku config:set MONGODB_URI=your-atlas-connection-string
   heroku config:set JWT_SECRET=your-secret
   ```
5. **Deploy**
   ```powershell
   git push heroku main
   ```

### Deploy to Render

1. Connect GitHub repo
2. Set environment variables
3. Deploy automatically

---

## 📚 API REFERENCE QUICK GUIDE

### Authentication

```
POST /api/auth/register      ← Register user
POST /api/auth/login         ← Login
POST /api/auth/send-otp      ← Send OTP
POST /api/auth/verify-otp    ← Verify OTP
GET  /api/auth/profile       ← Get profile [Protected]
```

### Products

```
GET    /api/products         ← Get all products
GET    /api/products/:id     ← Get single product
POST   /api/products         ← Create [Admin]
PUT    /api/products/:id     ← Update [Admin]
DELETE /api/products/:id     ← Delete [Admin]
```

### Cart

```
GET    /api/cart             ← Get cart [Protected]
POST   /api/cart/add         ← Add item [Protected]
PUT    /api/cart/update      ← Update quantity [Protected]
DELETE /api/cart/remove/:id  ← Remove item [Protected]
```

### Orders

```
POST /api/orders             ← Create order [Protected]
GET  /api/orders/my-orders   ← Get user orders [Protected]
GET  /api/orders/:id         ← Get order details [Protected]
```

### Notifications

```
GET    /api/notifications           ← Get all [Protected]
PUT    /api/notifications/read/:id  ← Mark as read [Protected]
DELETE /api/notifications/:id       ← Delete [Protected]
```

---

## ✅ SUCCESS CRITERIA

Your backend is fully functional when:

- ✅ Server starts without errors
- ✅ Can register new users
- ✅ Can login and receive JWT token
- ✅ Products are stored in MongoDB
- ✅ Cart operations work
- ✅ Orders can be created
- ✅ Notifications are created automatically
- ✅ Frontend can call all APIs successfully

---

## 🎓 LEARNING RESOURCES

- **Node.js Docs**: https://nodejs.org/docs
- **Express.js Guide**: https://expressjs.com/guide
- **MongoDB Tutorial**: https://docs.mongodb.com/manual
- **JWT.io**: https://jwt.io (test tokens)
- **Postman**: https://postman.com (API testing)

---

## 🚀 NEXT STEPS

1. ✅ Test all APIs with Thunder Client
2. ✅ Create admin user
3. ✅ Seed products database
4. ✅ Connect frontend
5. ✅ Test complete user journey
6. ✅ Add more features (reviews, wishlist sync, etc.)

---

**Your e-commerce backend is production-ready! 🎉**

Need help? Check:

- README.md - Project overview
- INSTALLATION_GUIDE.md - Detailed setup
- FRONTEND_INTEGRATION.html - Frontend examples
