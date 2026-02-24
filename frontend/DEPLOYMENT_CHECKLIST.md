# 🚀 ShopSphere Deployment Checklist

## Part 1: Frontend Deployment (Vercel)

### Pre-deployment
- [x] All HTML files moved to `frontend/` folder
- [x] CSS and JS folders moved to `frontend/`
- [x] `vercel.json` configuration created
- [x] `package.json` created
- [x] `.gitignore` configured
- [ ] Backend URL updated in `js/api.js` (replace YOUR-BACKEND-URL)
- [ ] Test locally with `npx serve .` or Live Server

### Deployment Steps
- [ ] Create GitHub repository for frontend (optional)
- [ ] Push code to GitHub (optional)
- [ ] Deploy to Vercel via:
  - [ ] Vercel CLI: `vercel --prod`, OR
  - [ ] Vercel Dashboard: Import GitHub repo
- [ ] Note your frontend URL: `https://__________________.vercel.app`

---

## Part 2: Backend Deployment (Render/Railway)

### Pre-deployment
- [ ] MongoDB Atlas account created
- [ ] MongoDB cluster created (M0 Free Tier)
- [ ] Database user created
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string copied

### Backend Deployment Steps
- [ ] Create GitHub repository for backend
- [ ] Push backend code to GitHub
- [ ] Deploy to Render/Railway:
  - [ ] Create new web service
  - [ ] Connect GitHub repository
  - [ ] Set root directory to `backend/` (if monorepo)
  - [ ] Build command: `npm install`
  - [ ] Start command: `npm start`

### Environment Variables (Set in Render/Railway)
- [ ] `MONGODB_URI` = Your MongoDB Atlas connection string
- [ ] `JWT_SECRET` = Your secure secret key
- [ ] `PORT` = 5000
- [ ] `NODE_ENV` = production

- [ ] Note your backend URL: `https://__________________.onrender.com`

---

## Part 3: Connect Frontend & Backend

### Update Frontend
- [ ] Copy your backend URL from Render/Railway
- [ ] Update `frontend/js/api.js`:
  ```javascript
  BASE_URL: isLocalhost 
      ? 'http://localhost:5000/api' 
      : 'https://YOUR-BACKEND-URL.onrender.com/api'
  ```
- [ ] Redeploy frontend (`vercel --prod` or push to GitHub)

### Update Backend CORS
- [ ] Copy your frontend URL from Vercel
- [ ] Update `backend/server.js` CORS configuration:
  ```javascript
  const corsOptions = {
    origin: [
      'http://localhost:3000',
      'https://your-frontend-url.vercel.app' // Add this
    ],
    credentials: true
  };
  ```
- [ ] Push changes to GitHub (auto-redeploys on Render/Railway)

---

## Part 4: Testing

### Test Backend
- [ ] Visit: `https://your-backend-url.onrender.com/api/health`
- [ ] Should return: `{"status":"OK","message":"Server is running"}`

### Test Frontend
- [ ] Visit your Vercel URL
- [ ] Open browser DevTools → Console
- [ ] Check for API connection errors
- [ ] Test user registration
- [ ] Test user login
- [ ] Test adding products to cart
- [ ] Test checkout process

---

## Part 5: Final Steps

### Performance
- [ ] Enable Vercel Analytics (optional)
- [ ] Enable caching headers
- [ ] Optimize images (if any)

### Security
- [ ] Verify HTTPS on both frontend and backend
- [ ] Check security headers in `vercel.json`
- [ ] Verify JWT token handling
- [ ] Test logout functionality

### Documentation
- [ ] Update main README.md with deployment URLs
- [ ] Document any environment-specific changes
- [ ] Save deployment credentials securely

---

## 🎉 Deployment Complete!

### Your Live URLs:
- **Frontend:** `https://__________________.vercel.app`
- **Backend:** `https://__________________.onrender.com`
- **MongoDB:** MongoDB Atlas

### Share Your Project:
- [ ] Add deployment URLs to GitHub README
- [ ] Test on mobile devices
- [ ] Share with friends/portfolio

---

## 🐛 Common Issues & Solutions

### Issue: API calls return CORS error
**Solution:** Add frontend URL to backend CORS configuration

### Issue: 404 on page refresh
**Solution:** Check `vercel.json` routing configuration

### Issue: Backend sleeping (Render free tier)
**Solution:** First request may take 30-60 seconds to wake up the service

### Issue: MongoDB connection failed
**Solution:** 
- Check connection string in environment variables
- Verify network access (0.0.0.0/0) in MongoDB Atlas
- Ensure database user credentials are correct

### Issue: JWT token issues
**Solution:** Verify JWT_SECRET is set in backend environment variables

---

## 📱 Optional: Custom Domain

### Vercel (Frontend)
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS as instructed
4. Wait for SSL certificate

### Custom Backend Domain
1. Use Render custom domain feature (paid plan)
2. Or use Cloudflare Workers/Proxy

---

**Keep this checklist until deployment is complete and tested!** ✅
