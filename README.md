# End-to-End Testing with Playwright

This repository contains practice workshops for learning **End-to-End (E2E) testing** using **Playwright**.

## What you will learn

- How to write basic Playwright tests
- How to interact with web elements (click, fill, select, etc.)
- How to handle pages, iframes, and multiple browser contexts
- How to organize tests with reusable structures

## Project structure

- `PlayWright/e2e/workshop_1` to `PlayWright/e2e/workshop_9`: Workshop exercises and test files
- `PlayWright/playwright.config.ts`: Playwright configuration
- `PlayWright/.github/workflows/playwright.yml`: CI workflow for automated test execution

## Prerequisites

- Node.js (LTS recommended)
- npm

## Setup

```bash
cd PlayWright
npm install
npx playwright install
```

## Run tests

Run all tests:

```bash
cd PlayWright
npx playwright test
```

Run a specific workshop test:

```bash
cd PlayWright
npx playwright test e2e/workshop_9/workshop_9.spec.ts
```

Open the HTML report:

```bash
cd PlayWright
npx playwright show-report
```

## Notes

This course is designed for hands-on learning. Start from workshop 1 and continue in order to build your Playwright skills step by step.
