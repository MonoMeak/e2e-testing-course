import { test, expect } from "@playwright/test";
import { PageObject } from "./page/Page";
import { DemoUser } from "./DemoUser";
const url =
  "file:///Users/macbook/Documents/Work/TSC/Lean-E2E-Testing/E2E%20with%20PW/PlayWright/e2e/workshop_8/index.html";

test.describe("Simple Best Practice Test", () => {
  let pageObj: PageObject;

  test.beforeEach(async ({ browser }) => {
    const page = await browser.newPage();
    pageObj = new PageObject(page);
    await pageObj.open(url);
  });

  test.skip("Test 1: Fill all inputs", async ({ page }) => {
    let demoUser = new DemoUser("John", "30");

    await pageObj.fillFirstName(demoUser.getFirstName());
    await pageObj.fillAge(demoUser.getAget());
    await pageObj.checkIsStudent();

    await pageObj.applyData(); // click on the button apply data

    expect(await pageObj.text(pageObj.displayFirstName)).toBe(demoUser.getFirstName);
    expect(await pageObj.text(pageObj.displayAge)).toBe(demoUser.getAget);
    expect(await pageObj.text(pageObj.displayIsStudent)).toBe('Yes')
  });
});
