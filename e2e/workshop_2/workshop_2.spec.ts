import { expect, test } from "@playwright/test";

test.skip("Automation Form submission", async ({ page }) => {
  // first go to the target page
  page.goto("https://demo.playwright.dev/todomvc");

  // get newtodo element by using placeholder

  const newTodo = page.getByPlaceholder("What needs to be done?");

  await newTodo.fill("Go Shoping...");
  await newTodo.press("Enter");
  await newTodo.fill("Go out with my friends...");
  await newTodo.press("Enter");

  await newTodo.fill("Do Homework...");
  await newTodo.press("Enter");

  await page.waitForTimeout(3000);

  const firstTodoItem = page.getByTestId("todo-item").nth(0);
  await firstTodoItem.getByRole("checkbox").check();

  const secondTodoItem = page.getByTestId("todo-item").nth(1);
  await expect(secondTodoItem).not.toHaveClass("completed");

  await expect(firstTodoItem).toHaveClass("completed");

  await page.waitForTimeout(3000);
});

test.skip("Handling the form", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  const placeholder = '[placeholder="What needs to be done?"]';

  await page.fill(placeholder, "Go Movie...");
  await page.locator(placeholder).press("Enter");


  const checkBox = page.locator('.toggle');
  await checkBox.check();
  await page.waitForTimeout(3000);


});
