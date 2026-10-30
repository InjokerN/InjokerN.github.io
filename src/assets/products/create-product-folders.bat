@echo off
setlocal

REM ==========================================
REM Create product asset folders for MetalCrafts
REM Put this .bat file inside:
REM src\assets\products\
REM Then double-click it.
REM ==========================================

set "BASE=%~dp0"

for %%D in (
    medals
    challenge-coins
    keychains
    enamel-pins
    fridge-magnets
    bottle-openers
    button-badges
    cufflinks
) do (
    if not exist "%BASE%%%D" (
        mkdir "%BASE%%%D"
        echo Created: %BASE%%%D
    ) else (
        echo Already exists: %BASE%%%D
    )
)

echo.
echo ==========================================
echo Done. 8 product folders are ready.
echo Location:
echo %BASE%
echo ==========================================
pause
