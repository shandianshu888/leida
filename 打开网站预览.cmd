@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo 正在启动“机场雷达”本地预览……
echo 浏览器地址：http://localhost:8765
echo.
node build.mjs
start "" "http://localhost:8765"
node preview-server.mjs
pause
