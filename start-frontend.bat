@echo off
color 0B
echo.
echo ========================================
echo   STARTING FRONTEND (Live Server)
echo ========================================
echo.

echo [INFO] Make sure backend is running first!
echo        If not, run: start-backend.bat
echo.

echo Opening browser...
timeout /t 2 >nul

start http://127.0.0.1:5500/index.html

echo.
echo ========================================
echo   PLEASE USE ONE OF THESE METHODS:
echo ========================================
echo.
echo METHOD 1 (Recommended):
echo   - Open VS Code
echo   - Right-click index.html
echo   - Click "Open with Live Server"
echo.
echo METHOD 2 (Python):
echo   - Run: python -m http.server 5500
echo.
echo METHOD 3 (Node.js http-server):
echo   - Run: npx http-server -p 5500
echo.
echo ========================================
echo.

pause
