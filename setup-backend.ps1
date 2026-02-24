# E-Commerce Backend - Quick Start Script
# This script automates the setup process

Write-Host "`n🚀 E-COMMERCE BACKEND - QUICK START`n" -ForegroundColor Cyan

# Step 1: Check Node.js installation
Write-Host "Step 1: Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install from https://nodejs.org" -ForegroundColor Red
    exit
}

# Step 2: Check npm installation
Write-Host "`nStep 2: Checking npm installation..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✅ npm installed: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm not found." -ForegroundColor Red
    exit
}

# Step 3: Navigate to backend directory
Write-Host "`nStep 3: Setting up backend..." -ForegroundColor Yellow
$backendPath = Join-Path $PSScriptRoot "backend"

if (Test-Path $backendPath) {
    Set-Location $backendPath
    Write-Host "✅ Backend directory found" -ForegroundColor Green
} else {
    Write-Host "❌ Backend directory not found" -ForegroundColor Red
    exit
}

# Step 4: Install dependencies
Write-Host "`nStep 4: Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray

try {
    npm install
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit
}

# Step 5: Check .env file
Write-Host "`nStep 5: Checking configuration..." -ForegroundColor Yellow
$envFile = ".env"

if (Test-Path $envFile) {
    Write-Host "✅ .env file found" -ForegroundColor Green
    
    # Ask if user wants to edit .env
    $edit = Read-Host "`nDo you want to edit .env file? (y/n)"
    if ($edit -eq "y") {
        notepad .env
        Write-Host "💡 Please configure MongoDB URI and JWT Secret, then press Enter to continue..."
        Read-Host
    }
} else {
    Write-Host "❌ .env file not found" -ForegroundColor Red
    exit
}

# Step 6: Check MongoDB connection
Write-Host "`nStep 6: Checking MongoDB..." -ForegroundColor Yellow

$mongoCheck = Read-Host "Is MongoDB installed and running? (y/n)"

if ($mongoCheck -eq "n") {
    Write-Host "`n⚠️  MongoDB Options:" -ForegroundColor Yellow
    Write-Host "1. Install MongoDB Community Server: https://www.mongodb.com/try/download/community"
    Write-Host "2. Use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas"
    Write-Host "`nAfter setup, update MONGODB_URI in .env file`n"
    
    $continue = Read-Host "Continue anyway? (y/n)"
    if ($continue -ne "y") {
        exit
    }
}

# Step 7: Ask if user wants to seed database
Write-Host "`nStep 7: Database seeding..." -ForegroundColor Yellow
$seed = Read-Host "Do you want to populate database with sample products? (y/n)"

if ($seed -eq "y") {
    Write-Host "Seeding database..." -ForegroundColor Gray
    try {
        node utils/seedProducts.js
        Write-Host "✅ Database seeded successfully" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  Seeding failed. You can run it later: node utils/seedProducts.js" -ForegroundColor Yellow
    }
}

# Step 8: Summary
Write-Host "`n`n═══════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "✅ SETUP COMPLETE!" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════" -ForegroundColor Cyan

Write-Host "`n📋 NEXT STEPS:`n"
Write-Host "1. Start backend server:" -ForegroundColor Yellow
Write-Host "   cd backend" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor White

Write-Host "`n2. Server will run on:" -ForegroundColor Yellow
Write-Host "   http://localhost:5000" -ForegroundColor White

Write-Host "`n3. Test API:" -ForegroundColor Yellow
Write-Host "   Open browser: http://localhost:5000" -ForegroundColor White

Write-Host "`n4. Frontend Integration:" -ForegroundColor Yellow
Write-Host "   See: FRONTEND_INTEGRATION.html" -ForegroundColor White

Write-Host "`n5. Documentation:" -ForegroundColor Yellow
Write-Host "   - README.md - Project overview" -ForegroundColor White
Write-Host "   - INSTALLATION_GUIDE.md - Detailed setup" -ForegroundColor White
Write-Host "   - COMPLETE_GUIDE.md - Full documentation" -ForegroundColor White

Write-Host "`n═══════════════════════════════════════════`n" -ForegroundColor Cyan

# Ask if user wants to start server now
$startNow = Read-Host "Start backend server now? (y/n)"

if ($startNow -eq "y") {
    Write-Host "`n🚀 Starting backend server...`n" -ForegroundColor Cyan
    npm run dev
} else {
    Write-Host "`n💡 To start server later, run:" -ForegroundColor Yellow
    Write-Host "   cd backend" -ForegroundColor White
    Write-Host "   npm run dev`n" -ForegroundColor White
}
