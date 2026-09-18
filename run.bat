@echo off
setlocal enabledelayedexpansion

echo ======================================================
echo    ReForge: Codebase Intelligence ^& Migration Platform
echo ======================================================
echo.

set "ROOT_DIR=%~dp0"
set "BACKEND_DIR=%ROOT_DIR%backend"
set "VENV_DIR=%BACKEND_DIR%\.venv"
set "VENV_PYTHON=%VENV_DIR%\Scripts\python.exe"

:: 1. Check or create virtualenv
if not exist "%VENV_PYTHON%" (
    echo [1/3] Setting up Python virtual environment...
    cd /d "%BACKEND_DIR%"
    
    where py >nul 2>&1
    if %errorlevel% equ 0 (
        py -3 -m venv .venv
    ) else (
        where python >nul 2>&1
        if %errorlevel% equ 0 (
            python -m venv .venv
        ) else (
            echo ERROR: Python 3.10+ is required but not found in PATH.
            echo Please install Python from https://www.python.org/downloads/
            pause
            exit /b 1
        )
    )

    if not exist "%VENV_PYTHON%" (
        echo ERROR: Failed to create virtual environment.
        pause
        exit /b 1
    )

    echo Installing backend dependencies...
    "%VENV_PYTHON%" -m pip install --quiet --upgrade pip
    "%VENV_PYTHON%" -m pip install --quiet -r requirements.txt
    echo Backend dependencies installed successfully.
) else (
    echo [1/3] Python virtual environment detected.
)

:: 2. Check frontend
set "DIST_INDEX=%ROOT_DIR%frontend\dist\index.html"
if not exist "%DIST_INDEX%" (
    echo [2/3] Building frontend assets...
    where npm >nul 2>&1
    if %errorlevel% equ 0 (
        cd /d "%ROOT_DIR%frontend"
        call npm install --silent
        call npm run build
    ) else (
        echo WARNING: Pre-compiled frontend not found and npm is not installed.
    )
) else (
    echo [2/3] Pre-compiled frontend UI ready.
)

:: 3. Launch
echo [3/3] Starting ReForge server on http://localhost:8000...
echo.
echo ^>^> Web UI: http://127.0.0.1:8000
echo ^>^> Press Ctrl+C to stop the server.
echo.

start http://localhost:8000
cd /d "%BACKEND_DIR%"
"%VENV_PYTHON%" -m uvicorn app.main:app --host 127.0.0.1 --port 8000
pause
