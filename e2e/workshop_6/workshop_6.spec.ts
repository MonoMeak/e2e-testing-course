import { test, expect } from "@playwright/test";

const testData = {
  firstName: "John",
  lastName: "Smith",
  address: "123 Main Street ",
  number: "123456789",
};

const url =
  "file:///Users/macbook/Documents/Work/TSC/Lean-E2E-Testing/E2E%20with%20PW/PlayWright/e2e/workshop_6/index.html";

test.describe("Use Registation Tests", () => {
  test.beforeEach(async ({ page }) => {
    page.goto(url);
  });

  test.skip("Regration with valid data", async ({ page }) => {
    // await page.goto(url);
    await page.fill("#firstName", testData.firstName);
    await page.fill("#lastName", testData.lastName);
    await page.fill("#address", testData.address);
    await page.fill("#number", testData.number);

    // After fill of those data => click on the button submit form

    await page.click("#register");

    const firstNameText = await page.locator("#displayFirstName").textContent();
    const lastNameText = await page.locator("#displayLastName").textContent();
    const addressText = await page.locator("#displayAddress").textContent();
    const numberText = await page.locator("#displayNumber").textContent();

    /// make assertion

    expect(firstNameText).toEqual(testData.firstName);
    expect(lastNameText).toEqual(testData.lastName);
    expect(addressText).toEqual(testData.address);
    expect(numberText).toEqual(testData.number);

    await page.waitForTimeout(3000);
  });

  test.skip("Regration with Some Empty Fields", async ({ page }) => {
    // await page.goto(url);
    await page.fill("#firstName", testData.firstName);
    await page.fill("#lastName", testData.lastName);

    // After fill of those data => click on the button submit form

    await page.click("#register");

    const error = await page.locator("#error p").textContent();

    /// make assertion

    expect(error).toBe("Please fill in all fields.");

    await page.waitForTimeout(3000);
  });

  test.skip("Register with empty all fields", async ({ page }) => {
    // just click register directly

    await page.click("#register");
    const error = await page.locator("#error p").textContent();
    // make assertion

    expect(error).toBe("Please fill in all fields.");
    await page.waitForTimeout(3000);
  });
});
