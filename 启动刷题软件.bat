@echo off
chcp 65001 >nul
title 信息技术基础刷题软件 - 本地服务
cd /d "%~dp0"
echo ============================================================
echo   信息技术基础刷题软件
echo ============================================================
echo.
echo [1] 电脑端浏览器自动打开: http://localhost:8080
echo [2] 手机端访问（同一 Wi-Fi 下用浏览器打开以下地址）:
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    echo     http://%%a:8080
)
echo.
echo ============================================================
start "" "http://localhost:8080"
python -m http.server 8080
pause
