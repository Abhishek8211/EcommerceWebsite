# 🚀 Complete Deployment Guide - ShopSphere E-commerce

This guide will walk you through deploying both frontend and backend of your ShopSphere application to free hosting platforms.

## 📁 Project Structure

```
Ecommerce-Website/
├── frontend/              ← Deploy to Vercel/Netlify
│   ├── index.html
│   ├── cart.html
│   ├── checkout.html
│   ├── login.html
│   ├── product.html
│   ├── css/
│   ├── js/
│   ├── vercel.json
│   ├── package.json
│   └── README.md
│
└── backend/              ← Deploy to Render/Railway
    ├── server.js
    ├── package.json
    ├── config/
    ├── controllers/
    ├── models/
    └── routes/
```

---

## 🎯 Deployment Order

1. **MongoDB Atlas** (Database)
2. **Backend** (API Server)
3. **Frontend** (Website)
4. **Connect** (Link them together)

---

## Step 1: MongoDB Atlas Setup (5 minutes)

### 1.1 Create Account
- Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Sign up for free account
- Verify email

### 1.2 Create Cluster
- Click "Create" under "Create a deployment"
- Select **M0 FREE** tier
- Choose a cloud provider and region (closest to you)
- Name: `shopsphere-cluster`
- Click "Create Deployment"

### 1.3 Configure Access
1. **Database User:**
   - Create username and password
   - Save these credentials securely!
   
2. **Network Access:**
   - Click "Network Access" in left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Confirm

### 1.4 Get Connection String
- Click "Database" in left menu
- Click "Connect" on your cluster
- Select "Connect your application"
- Copy the connection string:
  ```
  mongodb+srv://username:<password>@cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
  ```
- Replace `<password>` with your actual password
- Save this connection string!

---

## Step 2: Backend Deployment to Render (10 minutes)

### 2.1 Prepare Backend for GitHub

```bash
cd backend
git init
git add .
git commit -m "Initial backend commit"
```

### 2.2 Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `shopsphere-backend`
4. Public or Private (your choice)
5. Click "Create repository"

### 2.3 Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shopsphere-backend.git
git push -u origin main
```

### 2.4 Deploy on Render

1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your `shopsphere-backend` repository
5. Configure:
   - **Name:** `shopsphere-backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** `Free`

### 2.5 Add Environment Variables

Click "Advanced" → "Add Environment Variable":

| Key | Value |
|-----|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | Any random string (e.g., `mySecretKey123!@#`) |
| `PORT` | `5000` |
| `NODE_ENV` | `production` |

### 2.6 Deploy

- Click "Create Web Service"
- Wait 3-5 minutes for deployment
- **Save your backend URL:** `https://shopsphere-backend-xxxx.onrender.com`

### 2.7 Test Backend

Visit in browser:
```
https://your-backend-url.onrender.com/api/health
```

Should return: `{"status":"OK"}`

---

## Step 3: Frontend Deployment to Vercel (5 minutes)

### 3.1 Update Backend URL

Open `frontend/js/api.js` and update:

```javascript
const API_CONFIG = {
    BASE_URL: isLocalhost 
        ? 'http://localhost:5000/api' 
        : 'https://shopsphere-backend-xxxx.onrender.com/api', // Replace with your URL
    TIMEOUT: 10000
};
```

### 3.2 Method A: Vercel CLI (Fastest)

```bash
cd frontend
npm install -g vercel
vercel login
vercel --prod
```

Your site will be live at: `https://your-project.vercel.app`

### 3.3 Method B: GitHub + Vercel Dashboard

1. **Push frontend to GitHub:**
```bash
cd frontend
git init
git add .
git commit -m "Initial frontend commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shopsphere-frontend.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import `shopsphere-frontend` repository
   - Click "Deploy"

3. **Save your frontend URL:** `https://your-project.vercel.app`

---

## Step 4: Connect Frontend & Backend (CRITICAL!)

### 4.1 Update Backend CORS

Edit `backend/server.js`:

```javascript
const cors = require('cors');

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://your-project.vercel.app'  // Add your Vercel URL here
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

### 4.2 Redeploy Backend

```bash
cd backend
git add .
git commit -m "Update CORS for production"
git push origin main
```

Render will automatically redeploy (wait 2-3 minutes).

---

## Step 5: Test Everything (5 minutes)

### 5.1 Visit Your Frontend
Go to: `https://your-project.vercel.app`

### 5.2 Test Features
- [ ] Open browser DevTools (F12) → Console tab
- [ ] Check for errors (should be none)
- [ ] Test user registration
- [ ] Test login
- [ ] Browse products
- [ ] Add items to cart
- [ ] Test checkout

### 5.3 Check API Connection
In browser console, you should see:
```
✅ Backend connected successfully
```

---

## 🎉 Deployment Complete!

### Your Live URLs:

**Frontend (Website):**
```
https://your-project.vercel.app
```

**Backend (API):**
```
https://shopsphere-backend-xxxx.onrender.com
```

**Database:**
```
MongoDB Atlas (Managed)
```

---

## 🔧 Alternative Hosting Options

### Frontend Alternatives:
- **Netlify:** Similar to Vercel, drag-and-drop deployment
- **GitHub Pages:** Free for static sites
- **Cloudflare Pages:** Fast CDN-based hosting

### Backend Alternatives:
- **Railway:** [railway.app](https://railway.app) - Easy deployment
- **Cyclic:** [cyclic.sh](https://cyclic.sh) - Free Node.js hosting
- **Fly.io:** [fly.io](https://fly.io) - Global deployment

---

## 🐛 Troubleshooting

### Issue: "CORS Error" in browser console
**Solution:** 
1. Add your Vercel URL to backend CORS configuration
2. Redeploy backend
3. Wait 2-3 minutes
4. Hard refresh frontend (Ctrl+Shift+R)

### Issue: "Cannot connect to backend"
**Solution:**
1. Verify backend URL in `frontend/js/api.js`
2. Check backend is running: visit `/api/health` endpoint
3. Check for typos in URL

### Issue: "MongoDB connection error"
**Solution:**
1. Verify MongoDB connection string in Render environment variables
2. Check MongoDB Atlas network access (should be 0.0.0.0/0)
3. Verify database user credentials

### Issue: Backend sleeps after inactivity (Render free tier)
**Note:** First request after inactivity may take 30-60 seconds to wake up the service. This is normal for free tier.

### Issue: 404 on page refresh (Vercel)
**Solution:** The `vercel.json` file handles this. Make sure it's present in frontend folder.

---

## 📱 Custom Domain (Optional)

### Add Custom Domain to Vercel:
1. Go to Vercel Project Settings → Domains
2. Add your domain (e.g., `shopsphere.com`)
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

### Add Custom Domain to Render (Backend):
1. Requires paid plan, or
2. Use Cloudflare Workers as proxy

---

## 💰 Cost Breakdown

| Service | Free Tier |
|---------|-----------|
| MongoDB Atlas | 512MB storage |
| Vercel (Frontend) | Unlimited sites, 100GB bandwidth/month |
| Render (Backend) | 750 hours/month, sleeps after inactivity |
| **Total** | **$0/month** |

---

## 🔐 Security Checklist

- [ ] Never commit `.env` files
- [ ] Use strong JWT_SECRET
- [ ] Database password is secure
- [ ] GitHub repositories are private (or sensitive data removed)
- [ ] CORS is configured (not allowing all origins in production)
- [ ] HTTPS is enabled (automatic on Vercel/Render)

---

## 📊 Monitoring

### Vercel Analytics:
- Enable in project settings
- Track page views and performance

### Render Logs:
- View in Render dashboard → Logs
- Monitor API requests and errors

### MongoDB Atlas:
- Monitor database usage
- View query performance

---

## 🚀 Next Steps

1. **Share your project:**
   - Add deployment URLs to GitHub README
   - Share with friends/portfolio

2. **Improve performance:**
   - Add caching
   - Optimize images
   - Enable compression

3. **Add features:**
   - Payment integration (Stripe)
   - Email notifications
   - Admin dashboard

4. **Scale up (when needed):**
   - Upgrade to paid tier for no sleep time
   - Add custom domain
   - Enable more analytics

---

## 📞 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Render Docs:** [render.com/docs](https://render.com/docs)
- **MongoDB Docs:** [mongodb.com/docs/atlas](https://mongodb.com/docs/atlas)

---

**Congratulations! Your e-commerce site is now live! 🎊**

Keep these URLs safe and update this document with your actual deployment URLs.
