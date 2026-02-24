# PowerShell deployment script for ShopSphere Frontend to Vercel

Write-Host "🚀 ShopSphere Frontend Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if vercel is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Red
    npm install -g vercel
    Write-Host "✅ Vercel CLI installed" -ForegroundColor Green
} else {
    Write-Host "✅ Vercel CLI found" -ForegroundColor Green
}

Write-Host ""
Write-Host "📋 Pre-deployment checklist:" -ForegroundColor Yellow
Write-Host "1. Have you updated the backend URL in js/api.js? [IMPORTANT]"
Write-Host "2. Is your backend deployed and running?"
Write-Host "3. Do you have a Vercel account?"
Write-Host ""

$response = Read-Host "Continue with deployment? (y/n)"

if ($response -eq 'y' -or $response -eq 'Y') {
    Write-Host ""
    Write-Host "🔐 Logging into Vercel..." -ForegroundColor Cyan
    vercel login
    
    Write-Host ""
    Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Cyan
    vercel --prod
    
    Write-Host ""
    Write-Host "✅ Deployment complete!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Next steps:" -ForegroundColor Yellow
    Write-Host "1. Copy your frontend URL"
    Write-Host "2. Add it to backend CORS configuration"
    Write-Host "3. Redeploy backend"
    Write-Host "4. Test your application"
} else {
    Write-Host "❌ Deployment cancelled" -ForegroundColor Red
}
