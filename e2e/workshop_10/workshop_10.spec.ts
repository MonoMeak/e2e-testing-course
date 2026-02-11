import { test, expect } from "@playwright/test";

// throubleshooting the issue for this workshiop

test.skip("Interact with the elements", async ({ page }) => {
  // we can use record feature in the debug mode with playwright inspector!
  await page.goto("https://demo.playwright.dev/todomvc/");
});

// some selector in the browswer
// .view > label:nth-child(2)
// .new-todo

test.skip("Screenshot", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/");
  await page.screenshot({ path: "fail.png" });
});

test.only("Flaky Test scenario", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc/");

//   page.on("response", (response) => {
//     console.log(`Received from ${response.url()}`);
//   });

  const flaky = Math.random() < 0.5;

  console.log("Is Random number is smalle than 0.5?", flaky);

  if (flaky) {
    await page.waitForTimeout(2000);
    await page.click(".non-existing-selector");
  }
});
