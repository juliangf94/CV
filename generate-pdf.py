#!/usr/bin/env python3
"""Generate cv-julian.pdf from index.html using Playwright + Chromium."""

from pathlib import Path
from playwright.sync_api import sync_playwright

# Adjust this value (0.1–1.0) if the content overflows or looks too small.
SCALE = 0.79

HTML = Path(__file__).parent / "index.html"
PDF  = Path(__file__).parent / "cv-julian.pdf"


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        # Viewport >= 992 px forces Bootstrap to render in lg (2-column) mode.
        page.set_viewport_size({"width": 1200, "height": 900})
        page.goto(f"file://{HTML.resolve()}")
        page.wait_for_load_state("networkidle")

        # Measure content height in print media context, then size the PDF
        # to exactly that height (no blank space at the bottom).
        page.emulate_media(media="print")
        height_px = page.evaluate("document.querySelector('.cv-page').scrollHeight")
        # 96 dpi → mm, then apply scale so the printed content fills the page.
        height_mm = height_px * 25.4 / 96 * SCALE

        page.pdf(
            path=str(PDF),
            width="210mm",
            height=f"{height_mm:.1f}mm",
            print_background=True,
            scale=SCALE,
        )
        browser.close()
    print(f"PDF saved: {PDF}  ({height_mm:.1f} mm tall)")


if __name__ == "__main__":
    main()
