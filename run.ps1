# ReForge Launch Script
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host "   ReForge: Codebase Intelligence & Migration Platform" -ForegroundColor Green
Write-Host "======================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting ReForge Full-Stack Server on http://localhost:8000..." -ForegroundColor Yellow

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location "$ScriptDir\backend"

& .\.venv\Scripts\python.exe -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
