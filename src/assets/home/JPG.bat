@echo off
setlocal

if "%~1"=="" (
    echo Drag image files onto this .bat file.
    pause
    exit /b
)

:loop
if "%~1"=="" goto :end

magick "%~f1" -background white -alpha remove -alpha off -quality 92 "%~dpn1.jpg"

shift
goto :loop

:end
echo All done.
pause