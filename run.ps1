# ReForge Self-Bootstrapping Launch Script (Windows PowerShell)
$ErrorActionPreference = "Stop"

Write-Host "======================================================" -ForegroundColor Cyan
Write-Host "   ReForge: Codebase Intelligence & Migration Platform" -ForegroundColor Green
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host ""

$RootDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$BackendDir = Join-Path $RootDir "backend"
$FrontendDir = Join-Path $RootDir "frontend"
$VenvDir = Join-Path $BackendDir ".venv"
$VenvPython = Join-Path $VenvDir "Scripts\python.exe"

# 1. Detect or create Python virtual environment
if (-not (Test-Path $VenvPython)) {
    Write-Host "[1/3] Setting up Python virtual environment..." -ForegroundColor Yellow
    
    # Find system Python
    $SysPython = $null
    if (Get-Command py -ErrorAction SilentlyContinue) {
        $SysPython = "py -3"
    } elseif (Get-Command python -ErrorAction SilentlyContinue) {
        $SysPython = "python"
    } elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
        $SysPython = "python3"
    } else {
        Write-Host "ERROR: Python 3.10+ is required but not found in PATH." -ForegroundColor Red
        Write-Host "Please install Python from https://www.python.org/downloads/ and ensure 'Add Python to PATH' is checked." -ForegroundColor Red
        Read-Host "Press Enter to exit..."
        exit 1
    }

    Write-Host "Using system Python: $SysPython" -ForegroundColor Gray
    Set-Location $BackendDir
    Invoke-Expression "$SysPython -m venv .venv"
    
    if (-not (Test-Path $VenvPython)) {
        Write-Host "ERROR: Failed to create virtual environment in $VenvDir." -ForegroundColor Red
        Read-Host "Press Enter to exit..."
        exit 1
    }
    
    Write-Host "Installing backend dependencies from requirements.txt..." -ForegroundColor Yellow
    & $VenvPython -m pip install --quiet --upgrade pip
    & $VenvPython -m pip install --quiet -r requirements.txt
    Write-Host "Backend dependencies installed successfully." -ForegroundColor Green
} else {
    Write-Host "[1/3] Python virtual environment detected." -ForegroundColor Green
}

# 2. Check frontend build
$DistHtml = Join-Path $FrontendDir "dist\index.html"
if (-not (Test-Path $DistHtml)) {
    Write-Host "[2/3] Frontend build not found, checking Node.js to build it..." -ForegroundColor Yellow
    if (Get-Command npm -ErrorAction SilentlyContinue) {
        Write-Host "Building frontend assets with npm..." -ForegroundColor Gray
        Push-Location $FrontendDir
        npm install --silent
        npm run build
        Pop-Location
    } else {
        Write-Host "WARNING: Frontend dist not found and npm is not installed." -ForegroundColor Yellow
        Write-Host "FastAPI will serve the API at http://127.0.0.1:8000/api" -ForegroundColor Yellow
    }
} else {
    Write-Host "[2/3] Pre-compiled frontend UI ready." -ForegroundColor Green
}

# 3. Launch server and open browser
Write-Host "[3/3] Starting ReForge full-stack server on http://localhost:8000..." -ForegroundColor Cyan
Write-Host ""
Write-Host ">> Server URL:  http://127.0.0.1:8000" -ForegroundColor Green
Write-Host ">> Press Ctrl+C in this terminal to stop the server." -ForegroundColor Gray
Write-Host ""

Start-Process "http://localhost:8000"

Set-Location $BackendDir
& $VenvPython -m uvicorn app.main:app --host 127.0.0.1 --port 8000
