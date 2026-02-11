# UI Test Automation Framework

This is a **WebDriverIO (WDIO) + TypeScript + Cucumber** automation framework for end-to-end testing of web applications. It follows the **Page Object Model (POM)** and **BDD (Behavior Driven Development)** best practices.

---

## Table of Contents

1. [Overview](#overview)  
2. [Technologies Used](#technologies-used)  
3. [Project Structure](#project-structure)  
4. [Installation](#installation)  
5. [Configuration](#configuration)  
6. [Running Tests](#running-tests)  
7. [Reporting](#reporting)  
8. [Environment Variables](#environment-variables)  
9. [Contributing](#contributing)  
10. [License](#license)  

---

## Overview

This framework is designed for maintainable, scalable, and robust UI automation testing using:

- **WDIO** for browser automation  
- **TypeScript** for type safety and maintainability  
- **Cucumber** for BDD-style test scenarios  
- **Page Object Model (POM)** for clean separation of page elements and actions  
- **Allure Reporter** for visual test reports  

---

## Technologies Used

- Node.js  
- WebDriverIO (v9)  
- TypeScript (v5)  
- Cucumber (v10)  
- Chromedriver  
- Allure Reporter  

---

## Project Structure

ui-test/
│
├── features/ # Cucumber feature files
│ └── login.feature
│
├── steps/ # Step definitions
│ └── login.step.ts
│
├── actions/ # Reusable action classes
│ └── login.actions.ts
│
├── objects/ # Page Objects
│ └── login.page.ts
│
├── reports/ # Allure reports
│
├── wdio.conf.ts # WDIO configuration
├── tsconfig.json # TypeScript configuration
├── package.json # Node dependencies and scripts
└── .env # Environment variables (not committed)

