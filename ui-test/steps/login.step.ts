import { Given, When, Then } from '@cucumber/cucumber'
import { browser, expect } from '@wdio/globals'
import LoginActions from '../actions/login.actions'
import LoginPage from '../objects/login.page'

Given('user is on the homepage', async function() {
  const baseUrl = process.env.BASE_URL
  if (!baseUrl) {
    throw new Error('BASE_URL is not set. Define it in your environment or .env file.')
  }
  await browser.url('/')
})

When(/^user clicks on the login\/signup icon$/, async function() {
  await LoginActions.openLoginPage()
})

When('user enters valid credentials', async function() {
  const email = process.env.TEST_EMAIL
  const password = process.env.TEST_PWD
  if (!email || !password) {
    throw new Error('TEST_EMAIL or TEST_PWD is not set. Define them in your environment or .env file.')
  }
  await LoginActions.login(email, password)
})

When('user is redirected to the login page', async function() {
  await expect(LoginPage.emailInput).toBeDisplayed()
})

When('user enters a valid email address', async function() {
  const email = process.env.TEST_EMAIL
  if (!email) {
    throw new Error('TEST_EMAIL is not set. Define it in your environment or .env file.')
  }
  await LoginPage.emailInput.setValue(email)
})

When('user enters a valid password', async function() {
  const password = process.env.TEST_PWD
  if (!password) {
    throw new Error('TEST_PWD is not set. Define it in your environment or .env file.')
  }
  await LoginPage.passwordInput.setValue(password)
})

When('user clicks on the login button', async function() {
  await LoginPage.loginBtn.waitForDisplayed()
  await LoginPage.loginBtn.click()
})

Then('user should be logged in successfully', async function() {
  await expect(LoginPage.logoutBtn).toBeDisplayed()
})

Then('user should be redirected to the homepage', async function() {
  const baseUrl = process.env.BASE_URL
  if (!baseUrl) {
    throw new Error('BASE_URL is not set. Define it in your environment or .env file.')
  }
  await expect(browser).toHaveUrl(new RegExp(baseUrl))
})
