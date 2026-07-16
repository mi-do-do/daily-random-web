@echo off
setlocal
set "PY=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

if exist "%PY%" (
  "%PY%" -m http.server 4173 --directory "%~dp0"
) else (
  py -m http.server 4173 --directory "%~dp0"
)
