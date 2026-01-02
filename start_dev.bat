@echo off
set "NODE_BIN=%~dp0node_fast\node-v22.12.0-win-x64"
set "PATH=%NODE_BIN%;%PATH%"

echo Starting Vertical Limit System Website...
echo Node Version:
node -v
echo.
echo Launching development server...
call npm run dev
