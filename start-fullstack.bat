@echo off
color 0E
cls
echo.
echo ========================================
echo   E-COMMERCE FULLSTACK - QUICK START
echo ========================================
echo.
echo This will start both backend and frontend
echo.
echo Make sure you have:
echo   [x] Node.js installed
echo   [x] MongoDB running (or using MongoDB Atlas)
echo   [x] Run 'npm install' in backend folder
echo.
echo Press any key to start...
pause >nul

echo.
echo [1/2] Starting Backend Server...
cd backend
start "E-Commerce Backend" cmd /k "npm run dev"

timeout /t 3 >nul

echo.
echo [2/2] Opening Frontend...
cd ..
start http://127.0.0.1:5500/index.html

echo.
echo ========================================
echo   QUICK START COMPLETE!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://127.0.0.1:5500
echo.
echo IMPORTANT:
echo 1. Backend is running in separate window (keep it open!)
echo 2. Use Live Server in VS Code for frontend
echo    OR run: python -m http.server 5500
echo.
echo Next Steps:
echo 1. Seed database: cd backend then node utils/seedProducts.js
echo 2. Create account on login page
echo 3. Start shopping!
echo.
echo Press any key to exit...
pause >nul
