# End-to-End Testing with Playwright

This course repository contains practical workshops for learning **End-to-End (E2E) testing** with **Playwright**.

## Course goal

Learn how to build reliable UI tests and run them both locally and in CI using GitHub Actions.

## Workshops

- `workshop_1`: Basic navigation, locators, and registration form interaction
- `workshop_2`: Form handling and todo flow automation
- `workshop_3`: Advanced interactions (hover, right click, double click), drag and drop, iframe handling
- `workshop_4`: Browser dialogs (alert/confirm) and popup handling
- `workshop_5`: Multi-page flow and cookie handling
- `workshop_6`: Registration validation scenarios (valid, partial, empty inputs)
- `workshop_7`: TypeScript declarations, types, and interface-driven test data
- `workshop_8`: Test structure best practices (Page Object Model, data-driven testing)
- `workshop_9`: CI-ready tagged tests with `@gitHubAction`
- `workshop_10`: CI integration with GitHub Actions, including flaky test demonstration and troubleshooting

## Project structure

- `e2e/workshop_*`: Workshop test files
- `playwright.config.ts`: Playwright test configuration
- `.github/workflows/playwright.yml`: GitHub Actions CI pipeline

## Prerequisites

- Node.js (LTS)
- npm

## Setup

```bash
npm install
npx playwright install
```

## Run tests locally

Run all tests:

```bash
npx playwright test
```

Run Workshop 10 only:

```bash
npx playwright test e2e/workshop_10/workshop_10.spec.ts
```

Show HTML report:

```bash
npx playwright show-report
```

## CI integration (GitHub Actions)

CI is configured in `.github/workflows/playwright.yml`.

Pipeline behavior:

- Triggers on `push` and `pull_request` to `main` and `master`
- Installs dependencies with `npm ci`
- Installs Playwright browsers with dependencies
- Runs only Firefox project tests tagged with `@gitHubAction`
- Uploads `playwright-report` as a build artifact

CI test command used:

```bash
npx playwright test --project firefox --grep '@gitHubAction'
```

## Important notes

- In CI, `forbidOnly` is enabled via `playwright.config.ts`, so committed `test.only(...)` will fail the pipeline.
- Add `@gitHubAction` in test titles for tests you want to run in GitHub Actions.
