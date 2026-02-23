# 💻 INSTALL MONGODB LOCALLY (Windows)

## If you prefer running MongoDB on your computer:

### Step 1: Download MongoDB
1. Go to: https://www.mongodb.com/try/download/community
2. Select:
   - **Version:** Latest (7.0 or higher)
   - **Platform:** Windows
   - **Package:** MSI
3. Click "Download"

### Step 2: Install MongoDB
1. Run the downloaded `.msi` file
2. Choose "Complete" installation
3. **IMPORTANT:** Check "Install MongoDB as a Service"
4. Leave "Run service as Network Service user" selected
5. **IMPORTANT:** Check "Install MongoDB Compass" (optional GUI tool)
6. Click "Install"
7. Wait for installation (takes 5-10 minutes)

### Step 3: Verify Installation
Open PowerShell and run:

```powershell
mongod --version
```

Should show MongoDB version info.

### Step 4: Start MongoDB Service

MongoDB should auto-start as a Windows Service. If not:

**Method 1: Using Services**
1. Press `Win + R`
2. Type: `services.msc`
3. Find "MongoDB Server"
4. Right-click → "Start"

**Method 2: Using PowerShell (Run as Administrator)**
```powershell
net start MongoDB
```

### Step 5: Verify MongoDB is Running

```powershell
# Connect to MongoDB shell
mongosh

# You should see:
# Current Mongosh Log ID: ...
# Connecting to: mongodb://127.0.0.1:27017/...
```

Type `exit` to exit mongosh.

### Step 6: Your .env Should Have

```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

This should already be in your `.env` file!

### Step 7: Test Connection

```powershell
cd backend
node utils/seedProducts.js
```

Should see:
```
✅ MongoDB Connected: localhost
✅ Successfully added 18 products to database!
```

---

## ✅ MongoDB is now running locally!

---

## Troubleshooting:

### Error: "mongod is not recognized"
- MongoDB not added to PATH
- Restart your computer
- Or manually add: `C:\Program Files\MongoDB\Server\7.0\bin` to PATH

### Error: "MongoDB service failed to start"
- Run PowerShell as Administrator
- Run: `net start MongoDB`

### Still not working?
**Use MongoDB Atlas instead!** See: MONGODB_ATLAS_SETUP.md
