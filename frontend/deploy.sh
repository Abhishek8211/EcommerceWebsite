#!/bin/bash
# Quick deployment script for ShopSphere Frontend to Vercel

echo "🚀 ShopSphere Frontend Deployment Script"
echo "========================================"
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
else
    echo "✅ Vercel CLI found"
fi

echo ""
echo "📋 Pre-deployment checklist:"
echo "1. Have you updated the backend URL in js/api.js? [IMPORTANT]"
echo "2. Is your backend deployed and running?"
echo "3. Do you have a Vercel account?"
echo ""

read -p "Continue with deployment? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo ""
    echo "🔐 Logging into Vercel..."
    vercel login
    
    echo ""
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    echo ""
    echo "✅ Deployment complete!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Copy your frontend URL"
    echo "2. Add it to backend CORS configuration"
    echo "3. Redeploy backend"
    echo "4. Test your application"
else
    echo "❌ Deployment cancelled"
fi
