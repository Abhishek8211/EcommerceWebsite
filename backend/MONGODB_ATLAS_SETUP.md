# 🚀 MONGODB ATLAS SETUP (5 Minutes)

## MongoDB is not running locally. Use MongoDB Atlas (FREE cloud database):

### Step 1: Create Free Account

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up with Google/GitHub or email
3. Choose **FREE M0 tier** (No credit card needed!)

### Step 2: Create Cluster

1. Click "Build a Database"
2. Choose **M0 FREE** tier
3. Select region closest to you (e.g., AWS / Mumbai for India)
4. Click "Create"
5. Wait 3-5 minutes for cluster to deploy

### Step 3: Create Database User

1. Click "Database Access" (left sidebar)
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `admin`
5. Password: `admin123` (or your own - remember it!)
6. User Privileges: "Atlas Admin"
7. Click "Add User"

### Step 4: Whitelist Your IP

1. Click "Network Access" (left sidebar)
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

### Step 5: Get Connection String

1. Click "Database" (left sidebar)
2. Click "Connect" button on your cluster
3. Choose "Connect your application"
4. Copy the connection string (looks like):
   ```
   mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password (e.g., `admin123`)

### Step 6: Update Your .env File

Open `backend/.env` and replace the MONGODB_URI line:

```env
MONGODB_URI=mongodb+srv://admin:admin123@cluster0.xxxxx.mongodb.net/ecommerce?retryWrites=true&w=majority
```

**Important:**

- Replace `admin123` with your actual password
- Replace `cluster0.xxxxx` with your actual cluster address
- Add `/ecommerce` before the `?` to specify database name

### Step 7: Test Connection

```powershell
cd backend
node utils/seedProducts.js
```

You should see:

```
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
✅ Successfully added 18 products to database!
```

---

## ✅ DONE! Your backend will now use cloud database!

Benefits:

- ✅ No local installation needed
- ✅ Free forever (M0 tier)
- ✅ 512MB storage
- ✅ Accessible from anywhere
- ✅ Automatic backups

---

## Example Complete Connection String:

```
mongodb+srv://admin:admin123@cluster0.abc123.mongodb.net/ecommerce?retryWrites=true&w=majority
```

Just paste this in your `.env` file and you're done!
