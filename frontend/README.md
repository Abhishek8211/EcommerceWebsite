# ShopSphere Frontend Deployment Guide

This folder contains the frontend (client-side) code for the ShopSphere e-commerce website.

## 🚀 Quick Deploy to Vercel

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Navigate to frontend folder:**
```bash
cd frontend
```

3. **Deploy:**
```bash
vercel login
vercel
```

4. **For production:**
```bash
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard

1. **Create a GitHub repository for frontend:**
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
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - **Framework Preset:** Other
     - **Root Directory:** `./` (if repository root is frontend)
     - **Build Command:** Leave empty (static site)
     - **Output Directory:** Leave empty
   - Click "Deploy"

## 📝 Configuration

### Update Backend URL

Before deploying, update the backend URL in [`js/api.js`](js/api.js):

```javascript
const API_CONFIG = {
    BASE_URL: isLocalhost 
        ? 'http://localhost:5000/api' 
        : 'https://YOUR-BACKEND-URL.onrender.com/api', // Replace this!
    TIMEOUT: 10000
};
```

Replace `YOUR-BACKEND-URL.onrender.com` with your actual deployed backend URL from Render, Railway, or other hosting service.

## 🌐 Alternative Deployment Options

### Netlify

1. **Drag & Drop:**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `frontend` folder to the deploy area

2. **CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy
netlify deploy --prod
```

### GitHub Pages

```bash
cd frontend
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/YOUR_USERNAME/shopsphere-frontend.git
git push -u origin gh-pages
```

Then enable GitHub Pages in repository settings.

## 📂 Folder Structure

```
frontend/
├── index.html              # Home page
├── cart.html               # Shopping cart
├── checkout.html           # Checkout page
├── login.html              # Login/Register
├── product.html            # Product details
├── css/
│   └── style.css          # Styles
├── js/
│   ├── api.js             # API integration
│   ├── script.js          # Main scripts
│   └── login-integration.js
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── README.md              # This file
```

## 🔧 Local Development

1. **Simple HTTP Server:**
```bash
npx serve .
```

2. **Python:**
```bash
python -m http.server 8000
```

3. **VS Code Live Server:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

## ✅ Pre-deployment Checklist

- [ ] Backend is deployed and running
- [ ] MongoDB Atlas is configured
- [ ] Backend URL is updated in `js/api.js`
- [ ] CORS is configured in backend with frontend URL
- [ ] All files are in `frontend/` folder
- [ ] Test locally with backend connection
- [ ] `.gitignore` is configured

## 🔗 After Deployment

1. **Get your frontend URL** (e.g., `https://shopsphere.vercel.app`)

2. **Update backend CORS** to allow your frontend URL:
   ```javascript
   // In backend/server.js
   const corsOptions = {
     origin: [
       'http://localhost:3000',
       'https://shopsphere.vercel.app' // Add your Vercel URL
     ],
     credentials: true
   };
   ```

3. **Redeploy backend** with updated CORS settings

## 📱 Custom Domain (Optional)

### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## 🐛 Troubleshooting

**API calls failing:**
- Check backend URL in `js/api.js`
- Verify backend is running
- Check browser console for CORS errors
- Ensure backend CORS includes your frontend URL

**404 errors on page refresh:**
- Check `vercel.json` routing configuration
- Ensure all HTML files are in root of frontend folder

**Assets not loading:**
- Verify CSS/JS paths are correct
- Check `vercel.json` routes for static assets

## 📊 Monitoring

- **Vercel Analytics:** Enable in project settings
- **Console Logs:** Check browser console for errors
- **Network Tab:** Monitor API calls

## 🔒 Security Headers

Security headers are configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection

## 📞 Support

For issues:
1. Check browser console
2. Verify backend connectivity
3. Review deployment logs
4. Check Vercel deployment status

---

**Ready to deploy!** 🚀
