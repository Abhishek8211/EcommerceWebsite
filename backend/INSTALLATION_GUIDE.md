# 🚀 BACKEND SETUP & INSTALLATION GUIDE

## 📋 Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Code editor (VS Code recommended)

---

## ⚡ QUICK START (5 Steps)

### Step 1: Install Node.js
**Windows:**
1. Download from https://nodejs.org (LTS version)
2. Run installer
3. Verify: Open PowerShell and run:
```powershell
node --version
npm --version
```

---

### Step 2: Install MongoDB

**Option A: MongoDB Community Server (Local)**
1. Download from https://www.mongodb.com/try/download/community
2. Run installer (choose "Complete" installation)
3. Install as Windows Service
4. MongoDB will start automatically

**Option B: MongoDB Atlas (Cloud - Recommended for beginners)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a free cluster
4. Get connection string:
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Update `MONGODB_URI` in `.env` file

---

### Step 3: Install Backend Dependencies

Open PowerShell/Terminal in your project folder:

```powershell
# Navigate to backend folder
cd backend

# Install all dependencies
npm install
```

This will install:
- express (web framework)
- mongoose (MongoDB driver)
- bcryptjs (password hashing)
- jsonwebtoken (authentication)
- dotenv (environment variables)
- cors (cross-origin requests)

---

### Step 4: Configure Environment

Open `backend/.env` and update:

```env
# For local MongoDB:
MONGODB_URI=mongodb://localhost:27017/ecommerce

# For MongoDB Atlas (cloud):
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# Change this to a random secure string:
JWT_SECRET=my-super-secret-key-12345

# Your frontend URL:
FRONTEND_URL=http://127.0.0.1:5500
```

---

### Step 5: Start Backend Server

```powershell
# Development mode (auto-restart on changes)
npm run dev

# OR Production mode
npm start
```

You should see:
```
✅ MongoDB Connected: localhost
📊 Database: ecommerce
🚀 Server running in development mode on port 5000
```

Backend is now running at: `http://localhost:5000`

---

## 🧪 TEST THE BACKEND

### Method 1: Using Browser
Open: `http://localhost:5000`

You should see:
```json
{
  "success": true,
  "message": "E-commerce API Server",
  "version": "1.0.0"
}
```

### Method 2: Using PowerShell

```powershell
# Test health endpoint
Invoke-RestMethod -Uri "http://localhost:5000/api/health"

# Register a user
$body = @{
    name = "Test User"
    email = "test@example.com"
    mobile = "9876543210"
    password = "password123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/auth/register" -Method POST -Body $body -ContentType "application/json"
```

### Method 3: Install Thunder Client (VS Code Extension)

1. Install "Thunder Client" extension in VS Code
2. Create new request:
   - Method: POST
   - URL: `http://localhost:5000/api/auth/register`
   - Body (JSON):
   ```json
   {
     "name": "John Doe",
     "email": "john@example.com",
     "mobile": "9876543210",
     "password": "password123"
   }
   ```
3. Send request
4. You should get a token in response

---

## 🔗 CONNECT FRONTEND

### Step 1: Add API file to frontend

In your `index.html`, add BEFORE your `script.js`:

```html
<script src="js/api.js"></script>
<script src="js/script.js"></script>
```

### Step 2: Update login.html

Replace your login form handler with:

```javascript
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailOrMobile = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        const response = await loginUser(emailOrMobile, password);
        alert('Login successful!');
        window.location.href = '/index.html';
    } catch (error) {
        alert(error.message);
    }
});
```

### Step 3: Load products from backend

In your `script.js`, add:

```javascript
// On page load
document.addEventListener('DOMContentLoaded', async () => {
    if (isLoggedIn()) {
        const products = await getProducts();
        renderProducts(products);
    }
});
```

### Step 4: Update "Add to Cart" buttons

```javascript
async function handleAddToCart(productId) {
    try {
        await addToCart(productId, 1);
        alert('Added to cart!');
    } catch (error) {
        alert(error.message);
    }
}
```

---

## 📊 CREATE ADMIN USER

To add products, you need an admin account.

**Option 1: Using MongoDB Compass**
1. Download MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Connect to: `mongodb://localhost:27017`
3. Select `ecommerce` database
4. Select `users` collection
5. Find your user and change `role: "user"` to `role: "admin"`

**Option 2: Using MongoDB Shell**
```javascript
// Connect to MongoDB
mongosh

// Use database
use ecommerce

// Update user role
db.users.updateOne(
    { email: "your-email@example.com" },
    { $set: { role: "admin" } }
)
```

---

## 🛠 TROUBLESHOOTING

### Error: "Cannot connect to MongoDB"
**Solution:**
- Check if MongoDB is running
- Windows: Open Services, look for "MongoDB Server", start it
- Or use MongoDB Atlas (cloud) instead

### Error: "Port 5000 already in use"
**Solution:**
```powershell
# Kill process on port 5000
npx kill-port 5000

# Or change port in .env
PORT=5001
```

### Error: "CORS policy blocked"
**Solution:**
- Update `FRONTEND_URL` in `.env` to match your frontend URL
- If using Live Server in VS Code, it's usually `http://127.0.0.1:5500`

### Error: "npm not found"
**Solution:**
- Restart your computer after installing Node.js
- Or add Node.js to PATH manually

### Error: "Module not found"
**Solution:**
```powershell
# Delete node_modules and reinstall
rm -r node_modules
npm install
```

---

## 📱 API ENDPOINTS REFERENCE

### Authentication
```
POST /api/auth/register      - Register new user
POST /api/auth/login         - Login
GET  /api/auth/profile       - Get user profile (requires token)
```

### Products
```
GET  /api/products           - Get all products
GET  /api/products/:id       - Get single product
POST /api/products           - Create product (admin only)
```

### Cart
```
GET    /api/cart             - Get cart (requires login)
POST   /api/cart/add         - Add to cart
DELETE /api/cart/remove/:id  - Remove from cart
```

### Orders
```
POST /api/orders             - Create order
GET  /api/orders/my-orders   - Get user orders
```

---

## ✅ VERIFICATION CHECKLIST

- [ ] Node.js installed (check: `node --version`)
- [ ] MongoDB installed and running
- [ ] Backend dependencies installed (`npm install`)
- [ ] `.env` file configured
- [ ] Backend server starts without errors
- [ ] Can access `http://localhost:5000` in browser
- [ ] Can register a user via API
- [ ] Can login and get token
- [ ] Frontend can call backend APIs

---

## 🎯 NEXT STEPS

1. ✅ Backend is running
2. ✅ Test all APIs using Thunder Client
3. ✅ Create admin user
4. ✅ Add some products via API
5. ✅ Connect frontend
6. ✅ Test login/register from frontend
7. ✅ Test add to cart
8. ✅ Test checkout

---

## 💡 TIPS

- Keep backend server running while testing frontend
- Use `console.log()` to debug API responses
- Check browser Console for errors
- Check backend terminal for API logs
- Use MongoDB Compass to view database data

---

## 📞 COMMON COMMANDS

```powershell
# Start backend
cd backend
npm run dev

# Stop backend
Ctrl + C

# View all dependencies
npm list

# Update dependencies
npm update

# Clear npm cache (if issues)
npm cache clean --force
```

---

Your backend is ready! 🎉
