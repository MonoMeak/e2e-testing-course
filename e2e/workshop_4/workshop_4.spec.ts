import { test, expect } from "@playwright/test";

test.skip("Handling Alerts", async ({ page }) => {
  page.goto(
    "file:///Users/macbook/Documents/Work/TSC/Lean-E2E-Testing/E2E%20with%20PW/PlayWright/e2e/workshop_4/index.html",
  );

  let alertMessage = "";
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    alertMessage = await dialog.message();
    await page.waitForTimeout(3000);
    await dialog.accept();
  });

  await page.click("#show-alert");

  expect(alertMessage).toBe("This is a simple alert.");
});

test.skip("Comfirm Alert", async ({ page }) => {
  page.goto(
    "file:///Users/macbook/Documents/Work/TSC/Lean-E2E-Testing/E2E%20with%20PW/PlayWright/e2e/workshop_4/index.html",
  );

  let alertMessage = "";
  page.on("dialog", async (dialog) => {
    alertMessage = dialog.message();
    await page.waitForTimeout(3000);
    await dialog.dismiss(); // we cancel the confirmation
  });

  await page.click("#show-confirm");
  expect(alertMessage).toBe("You clicked Cancel.");
  await page.waitForTimeout(3000);
});

test.skip("Handling POP-UPs", async ({ page }) => {
  page.goto(
    "file:///Users/macbook/Documents/Work/TSC/Lean-E2E-Testing/E2E%20with%20PW/PlayWright/e2e/workshop_4/index.html",
  );

  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#open-popup"),
  ]);

  await popup.waitForLoadState();
  // add more logic as needed
  //   if(popup.url() === 'example url'){

  //   }
  await page.waitForTimeout(3000);

  await popup.close();
});
