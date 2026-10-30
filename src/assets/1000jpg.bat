@echo off
setlocal enabledelayedexpansion

:: ============================================
::  拖拽图片到本脚本上 -> 转 JPG 并居中裁切 1000x1000
::  需要已安装 ImageMagick 并把 magick(或 convert) 加入 PATH
:: ============================================

if "%~1"=="" (
    echo 请把一张或多张图片拖到本脚本图标上运行。
    pause
    exit /b
)

:: 检测 ImageMagick 命令（优先 magick，其次 convert）
set "IM="
where magick >nul 2>nul && set "IM=magick"
if not defined IM (
    where convert >nul 2>nul && set "IM=convert"
)
if not defined IM (
    echo [错误] 未找到 ImageMagick，请安装后把 magick.exe 所在目录加入 PATH。
    pause
    exit /b
)

:loop
if "%~1"=="" goto done

set "src=%~1"
set "dir=%~dp1"
set "name=%~n1"
set "out=%dir%%name%_1000.jpg"

%IM% "%src%" ^
    -auto-orient ^
    -background white -alpha remove -alpha off ^
    -resize "1000x1000^" ^
    -gravity center ^
    -extent 1000x1000 ^
    -strip ^
    -quality 92 ^
    "%out%"

if errorlevel 1 (
    echo [失败] %~nx1
) else (
    echo [完成] %~nx1  -^>  %name%_1000.jpg
)

shift
goto loop

:done
echo.
echo 全部处理完毕。
pause