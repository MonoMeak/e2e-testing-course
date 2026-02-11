import { expect, test } from "@playwright/test";

// test("Basic navigation", async ({ page }) => {
//   await page.goto("https://gitlab.com");
//   await page.waitForTimeout(3000);
//   await page.reload();
// });

// test("Interacting with web Element on GitLab", async ({ page }) => {
//   await page.goto("https://gitlab.com");
//   await page.getByRole("link", { name: "Get free trial" }).click();
// });

// let play around with Registration form of GitLab
test.skip("GitLab trial registration form", async ({ page }) => {
  // go to registrations page
  await page.goto("https://gitlab.com/-/trial_registrations/new");

  // a. make sure the page loaded
  await expect(
    page.getByRole("heading", { name: /get started with gitlab/i }),
  ).toBeVisible();

  // b. Fill some fields by label
  await page.getByLabel(/first name/i).fill("MK");
  await page.getByLabel(/last name/i).fill("Test");
  await page.getByLabel(/username/i).fill("MR_TEST124");
  await page.getByLabel(/company email/i).fill("mk.test@gamil.com");
  await page.getByLabel(/^password$/i).fill("MyStrongPassword123@");

  const marketingCheckBox = page.getByRole("checkbox", { name: /agreet/i });
  if (await marketingCheckBox.isVisible()) {
    await marketingCheckBox.check();
  }

  // d. submit the form

  await page.getByRole("button", { name: /continue/i }).click();

  // e. Assert next step

  await expect(page).toHaveURL(/trial|registr|verify|welcome/i);

  await new Promise((resolve) => setTimeout(resolve, 10000));
});



// test.only("Using Various Locator Button",  async({page}) => {

//   await page.goto("https://gitlab.com/");

//   await page.click(':has-text("Sign in")');
//   await page.waitForTimeout(3000)
// })


