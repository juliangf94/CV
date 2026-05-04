#!/bin/bash
CHROME="/mnt/c/Program Files/Google/Chrome/Application/chrome.exe"
DIR="$(cd "$(dirname "$0")" && pwd)"
HTML_WIN=$(wslpath -w "$DIR/index.html")
PDF_WIN=$(wslpath -w "$DIR/cv-julian.pdf")

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --print-to-pdf="$PDF_WIN" \
  --print-to-pdf-no-header \
  --no-margins \
  "file://$HTML_WIN" 2>&1

echo "PDF guardado en: $DIR/cv-julian.pdf"
