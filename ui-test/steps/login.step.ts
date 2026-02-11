import { Given, When, Then } from '@cucumber/cucumber'
import { browser, expect } from '@wdio/globals'
import LoginActions from '../actions/login.actions'
import LoginPage from '../objects/login.page'

Given('user is on the homepage', async function () {
  await browser.url('/')
  await browser.refresh()

  if (await LoginPage.logoutBtn.isExisting()) {
    await LoginPage.logoutBtn.click()
    await browser.url('/')
  }
})

When(/^user clicks on the login\/signup icon$/, async function () {
  await LoginActions.openLoginPage()
})

When(/^user is redirected to the login\/signup page$/, async function () {
  await expect(LoginPage.emailInput).toBeDisplayed()
})


When(/^user enters (.+) and (.+)$/, async function (email: string, password: string) {
  const normalizedEmail = email === 'empty' ? '' : email
  const normalizedPassword = password === 'empty' ? '' : password

  if (normalizedEmail) {
    await LoginPage.emailInput.setValue(normalizedEmail)
  }

  if (normalizedPassword) {
    await LoginPage.passwordInput.setValue(normalizedPassword)
  }
})

When('user clicks on the login button', async function () {
  await LoginPage.loginBtn.waitForDisplayed()
  await LoginPage.loginBtn.click()
})


Then(
  /^user should see "([^"]*)"$/,
  async function (result: string) {
    switch (result) {
      case 'homepage':
        await expect(LoginPage.logoutBtn).toBeDisplayed()
        break

      case 'error message':
        await expect(LoginPage.loginErrorMessage).toBeDisplayed()
        break

      case 'validation message':
        await expect(await LoginPage.getValidationMessage()).not.toBe('')
        break

      default:
        throw new Error(`Unknown result type: ${result}`)
    }
  }
)
