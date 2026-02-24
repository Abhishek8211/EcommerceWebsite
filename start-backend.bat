@echo off
color 0A
echo.
echo ========================================
echo   STARTING E-COMMERCE FULLSTACK APP
echo ========================================
echo.

echo [1/3] Checking Node.js installation...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found! Please install from https://nodejs.org
    pause
    exit /b 1
)
echo [OK] Node.js found!

echo.
echo [2/3] Starting Backend Server...
echo.
cd backend

if not exist "node_modules" (
    echo [INFO] Installing dependencies...
    call npm install
)

echo.
echo ========================================
echo   BACKEND STARTING ON PORT 5000
echo ========================================
echo.
echo Backend will run at: http://localhost:5000
echo.
echo KEEP THIS WINDOW OPEN!
echo.
echo Next steps:
echo 1. Open another terminal
echo 2. Run: start-frontend.bat
echo 3. Or use Live Server in VS Code
echo.
echo ========================================
echo.

start "E-Commerce Backend" cmd /k "npm run dev"

echo.
echo [3/3] Backend started in new window!
echo.
echo To view logs, check the "E-Commerce Backend" window.
echo.
echo Press any key to exit this window...
pause >nul
