import LoginPage from "../objects/login.page"

class LoginActions {

  async openLoginPage() {
    await LoginPage.loginSignupBtn.waitForDisplayed()
    await LoginPage.loginSignupBtn.waitForClickable()
    await LoginPage.loginSignupBtn.click();
  }

  async login(email: string, password: string) {
    await LoginPage.emailInput.setValue(email);
    await LoginPage.passwordInput.setValue(password);
    await LoginPage.loginBtn.click();
  }

  async signup(name: string, email: string) {
    await LoginPage.nameInput.setValue(name);
    await LoginPage.signupEmailInput.setValue(email);
    await LoginPage.signupBtn.click();
  }

  async isLoggedIn() {
    return await LoginPage.logoutBtn.isDisplayed();
  }
}

export default new LoginActions();
