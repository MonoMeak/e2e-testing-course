import { test, expect } from "@playwright/test";

// test.only("Open new window and navigate back", async ({ context, page }) => {
//   await page.goto(
//     "file:///Users/macbook/Documents/Work/TSC/Lean-E2E-Testing/E2E%20with%20PW/PlayWright/e2e/workshop_5/index.html",
//   );

//   const pagePromise = context.waitForEvent("page");
//   await page.click("#openNewWindow");
//   const newPage = await pagePromise;
//   await newPage.waitForLoadState();

//   console.log(await newPage.title());

//   await expect(
//     newPage.getByRole("heading", { name: "Welcome to the New Page" }),
//   ).toBeVisible();
// });

const url =
  "file:///Users/macbook/Documents/Work/TSC/Lean-E2E-Testing/E2E%20with%20PW/PlayWright/e2e/workshop_5/index.html";

// test.only("Adding Cookie", async ({ context, page }) => {
//   await page.goto(url);
//   await page.click("#setCookie");

//   const cookies = await page.context().cookies(url);

//   const sessionCookie = cookies.find((cookie) => cookie.name === "session");

//   console.log("Session Cookie", sessionCookie);

//   expect(sessionCookie).toBeDefined();

//   await page.waitForTimeout(3000);
// });

test.skip("Delete Cookie", async ({ context, page }) => {
  await page.goto(url);
  console.log("Start setting Cookie");

  await page.click("#setCookie");

  await page.waitForTimeout(3000);

  const cookies = await page.context().cookies(url);

  const sessionCookie = cookies.find((cookie) => cookie.name === "session");

  console.log("Session Cookie", sessionCookie);
  console.log("Start removing Cookie");

  await page.click("#deleteCookie");
  const deleteCookie = await page.context().cookies(url);
  const deleleteSessionCookie = deleteCookie.find(
    (cookie) => cookie.name == "session",
  );

  await expect(deleleteSessionCookie).toBeUndefined();

  await page.waitForTimeout(3000);
});
