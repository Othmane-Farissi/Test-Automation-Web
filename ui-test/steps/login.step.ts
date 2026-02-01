import { Given, When, Then } from '@wdio/cucumber-framework'
import LoginActions from '../actions/login.actions'
import LoginPage from '../objects/login.page'

Given('user is on the homepage', async () => {
  await browser.url(process.env.BASE_URL!)
})

When('user clicks on the login/signup icon', async () => {
  await LoginActions.openLoginPage()
})

When('user enters valid credentials', async () => {
  await LoginActions.login(
    process.env.TEST_EMAIL!,
    process.env.TEST_PWD!
  )
})

Then('user should be logged in successfully', async () => {
  await expect(LoginPage.logoutBtn).toBeDisplayed()
})
