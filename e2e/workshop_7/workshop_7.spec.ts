import { test, expect, selectors } from "@playwright/test";
import { User } from "./User";
import { Selector } from "./Selector";
const url =
  "file:///Users/macbook/Documents/Work/TSC/Lean-E2E-Testing/E2E%20with%20PW/PlayWright/e2e/workshop_7/index.html";

test.describe("Variables Declarations and Types", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  const selectors = {
    firstName: "#firstName",
    age: "#age",
    student: "#isStudent",
  };
  //     const displaySelectors = {
  //     firstName: "#fdisplayFirstNamee",
  //     age: "#displayAge",
  //     student: "#isStudent",
  //   };

  test.skip("Declarations adn Types", async ({ page }) => {
    // declare some vars
    let firstName: string = "John";
    let age: number = 30;
    let isStudent: boolean = true;

    await page.fill(selectors.firstName, firstName);
    await page.fill(selectors.age, age.toString());
    await page.check(selectors.student);

    await page.click("#applyData");

    // make some assertion

    expect(await page.textContent("#displayFirstName")).toBe(firstName);
    expect(await page.textContent("#displayAge")).toBe(age.toString());
    expect(await page.isChecked("#isStudent")).toBe(true);
  });
});

test.describe("Type Definition and Interfaces", () => {
  // ensure all test have the target page
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  // check type safty in the real time

  let user: User = {
    firstName: "Jane",
    age: 19,
    isStudent: true,
  };

  test.skip("Impletement test with useful types", async ({ page }) => {
    await page.fill(Selector.firstName, user.firstName);
    await page.fill(Selector.age, user.age.toString());
    await page.check(Selector.isStudent);

    await page.click("#applyData");

    // let make some Assertion

    expect(await page.textContent("#displayFirstName")).toBe(user.firstName);
    expect(await page.textContent("#displayAge")).toBe(user.age.toString());
    expect(await page.isChecked("#isStudent")).toBe(user.isStudent);
  });
});
