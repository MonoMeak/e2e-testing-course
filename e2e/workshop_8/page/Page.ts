import { Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";
import { Input } from "./Input";
import { Button } from "./Button";
import { Selector } from "../../workshop_7/Selector";
import { Displayer } from "../../workshop_7/Displayer";

export class PageObject extends AbstractPage {
  private button: Button = new Button(this.page);
  private input: Input = new Input(this.page);
  readonly firstNameInputSelector = Selector.firstName;
  readonly ageInputSelector = Selector.age;
  readonly isStudentCheckboxSelector = Selector.isStudent;
  readonly applyDataButtonSelector = Selector.applyData;

  readonly displayFirstName = Displayer.firstName;
  readonly displayAge = Displayer.age;
  readonly displayIsStudent = Displayer.isStudent;

  constructor(page: Page) {
    super(page);
    // this.button = new Button(page);
    // this.input = new Input(page);
  }
  // override the page parent method
  async open(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async applyData(): Promise<void> {
    await this.button.clickButton(this.applyDataButtonSelector);
  }
  async fillFirstName(value: string): Promise<void> {
    await this.input.setInputValue(this.firstNameInputSelector, value);
  }

  async fillAge(value: string): Promise<void> {
    await this.input.setInputValue(this.ageInputSelector, value);
  }

  async checkIsStudent(): Promise<void> {
    await this.page.check(this.isStudentCheckboxSelector);
  }
  async text(selector: string): Promise<string | null> {
    return await this.page.textContent(selector);
  }
}
