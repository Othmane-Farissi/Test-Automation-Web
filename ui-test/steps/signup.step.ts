import { Given, When, Then } from '@cucumber/cucumber'
import { browser, expect } from '@wdio/globals'
import SignupActions from '../actions/signup.actions'
import SignupPage from '../objects/signup.page'

Given('signup user is on the homepage', async function () {
  await browser.url('/')
  await browser.refresh()

  if (await SignupPage.logoutBtn.isExisting()) {
    await SignupPage.logoutBtn.click()
    await browser.url('/')
  }
})

When(/^signup user clicks on the login\/signup icon$/, async function () {
  await SignupActions.openSignupPage()
})

When(/^signup user is redirected to the login\/signup page$/, async function () {
  await expect(SignupPage.nameInput).toBeDisplayed()
})

When(/^signup user enters "([^"]*)" and "([^"]*)"$/, async function (name: string, email: string) {
  const normalizedName = name === 'empty' ? '' : name
  const normalizedEmail = email === 'empty' ? '' : email

  if (normalizedName) {
    await SignupPage.nameInput.setValue(normalizedName)
  }

  if (normalizedEmail) {
    await SignupPage.signupEmailInput.setValue(normalizedEmail)
  }
})

When('signup user clicks on the signup button', async function () {
  await SignupPage.signupBtn.waitForDisplayed()
  await SignupPage.signupBtn.click()
})

Then(
  /^signup user should see "([^"]*)"$/,
  async function (result: string) {
    switch (result) {
      case 'homepage':
        await expect(SignupPage.logoutBtn).toBeDisplayed()
        break

      case 'validation message':
        await expect(await SignupPage.getValidationMessage()).not.toBe('')
        break

      default:
        throw new Error(`Unknown result type: ${result}`)
    }
  }
)
