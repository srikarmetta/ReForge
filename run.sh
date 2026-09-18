#!/usr/bin/env bash
set -e

echo "======================================================"
echo "   ReForge: Codebase Intelligence & Migration Platform"
echo "======================================================"
echo ""

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$SCRIPT_DIR/backend"
FRONTEND_DIR="$SCRIPT_DIR/frontend"
VENV_DIR="$BACKEND_DIR/.venv"
VENV_PYTHON="$VENV_DIR/bin/python"

# 1. Setup Virtual Environment
if [ ! -f "$VENV_PYTHON" ]; then
    echo "[1/3] Setting up Python virtual environment..."
    cd "$BACKEND_DIR"
    
    if command -v python3 &>/dev/null; then
        python3 -m venv .venv
    elif command -v python &>/dev/null; then
        python -m venv .venv
    else
        echo "ERROR: Python 3.10+ is required but not found."
        exit 1
    fi

    echo "Installing backend dependencies..."
    "$VENV_PYTHON" -m pip install --quiet --upgrade pip
    "$VENV_PYTHON" -m pip install --quiet -r requirements.txt
    echo "Backend dependencies installed successfully."
else
    echo "[1/3] Python virtual environment detected."
fi

# 2. Check frontend build
if [ ! -f "$FRONTEND_DIR/dist/index.html" ]; then
    echo "[2/3] Building frontend assets..."
    if command -v npm &>/dev/null; then
        cd "$FRONTEND_DIR"
        npm install --silent
        npm run build
    else
        echo "WARNING: Pre-compiled frontend not found and npm is not installed."
    fi
else
    echo "[2/3] Pre-compiled frontend UI ready."
fi

# 3. Launch
echo "[3/3] Starting ReForge server on http://localhost:8000..."
echo ""
echo ">> Web UI: http://127.0.0.1:8000"
echo ">> Press Ctrl+C to stop the server."
echo ""

# Attempt to open browser across platforms
if command -v xdg-open &>/dev/null; then
    xdg-open "http://localhost:8000" &
elif command -v open &>/dev/null; then
    open "http://localhost:8000" &
fi

cd "$BACKEND_DIR"
"$VENV_PYTHON" -m uvicorn app.main:app --host 127.0.0.1 --port 8000
