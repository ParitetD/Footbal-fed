import os
import time
from playwright.sync_api import sync_playwright

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # Wait for dev server to be ready
        max_retries = 15
        for i in range(max_retries):
            try:
                response = page.goto("http://localhost:3000")
                if response and response.status < 400:
                    break
            except Exception:
                pass
            print(f"Waiting for server... attempt {i+1}")
            time.sleep(3)
        else:
            print("Server not reachable")
            browser.close()
            return

        # Create screenshots directory
        os.makedirs("verification_screenshots", exist_ok=True)

        pages = [
            ("/", "home.png"),
            ("/about", "about.png"),
            ("/news", "news.png"),
            ("/matches", "matches.png"),
            ("/national-team", "national_team.png"),
            ("/contacts", "contacts.png"),
            ("/gallery", "gallery.png")
        ]

        for url, filename in pages:
            print(f"Capturing {url}...")
            try:
                page.goto(f"http://localhost:3000{url}")
                # Wait for content to load
                page.wait_for_timeout(3000)
                page.screenshot(path=f"verification_screenshots/{filename}", full_page=True)
            except Exception as e:
                print(f"Failed to capture {url}: {e}")

        # Toggle to Kyrgyz and take one screenshot
        try:
            page.goto("http://localhost:3000/")
            page.wait_for_timeout(2000)
            ky_btn = page.get_by_role("button", name="ky")
            if ky_btn.is_visible():
                ky_btn.click()
                page.wait_for_timeout(1000)
                page.screenshot(path="verification_screenshots/home_ky.png", full_page=True)
        except Exception as e:
            print(f"Failed to capture KY version: {e}")

        browser.close()

if __name__ == "__main__":
    run_verification()
