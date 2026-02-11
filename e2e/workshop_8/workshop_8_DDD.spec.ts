import { test, expect } from "@playwright/test";
import { PageObject } from "./page/Page";
import { workshop8TestCases } from "./testData";

const url =
  "file:///Users/macbook/Documents/Work/TSC/Lean-E2E-Testing/E2E%20with%20PW/PlayWright/e2e/workshop_8/index.html";

test.describe("Simple Best Practice Test", () => {
  let pageObj: PageObject;

  test.beforeEach(async ({ browser }) => {
    const page = await browser.newPage();
    pageObj = new PageObject(page);
    await pageObj.open(url);
  });

  for (const testCase of workshop8TestCases) {
    test.skip(testCase.testName, async () => {
      await pageObj.fillFirstName(testCase.input.firstName);
      await pageObj.fillAge(testCase.input.age);
      if (testCase.input.isStudent) {
        await pageObj.checkIsStudent();
      }
      await pageObj.applyData();
      

      expect(await pageObj.text(pageObj.displayFirstName)).toBe(
        testCase.expected.firstName,
      );
      expect(await pageObj.text(pageObj.displayAge)).toBe(
        testCase.expected.age,
      );
      expect(await pageObj.text(pageObj.displayIsStudent)).toBe(
        testCase.expected.isStudent,
      );

      console.log(testCase.expected.isStudent);
    });
  }
});
