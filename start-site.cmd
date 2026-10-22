@echo off
setlocal
cd /d "%~dp0"
set "FK_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%FK_NODE%" goto runtime_ready
where node.exe >nul 2>&1
if errorlevel 1 goto runtime_missing
set "FK_NODE=node.exe"
:runtime_ready
if not exist "node_modules\astro\bin\astro.mjs" goto dependencies_missing
echo PhotoKontur - local website
echo Open the Local URL printed below in your browser.
echo Keep this window open. Press Ctrl+C to stop the website.
echo.
"%FK_NODE%" "node_modules\astro\bin\astro.mjs" dev --host 127.0.0.1 --port 4323
if errorlevel 1 pause
exit /b
:runtime_missing
echo Node.js was not found. Node.js 22.12 or newer is required.
pause
exit /b 1
:dependencies_missing
echo Project dependencies are missing. Run pnpm install in this folder first.
pause
exit /b 1
