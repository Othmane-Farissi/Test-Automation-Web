import signupPage from "../objects/signup.page"

class SignupActions {

  async openSignupPage() {
    await signupPage.loginSignupBtn.waitForDisplayed()
    await signupPage.loginSignupBtn.waitForClickable()
    await signupPage.loginSignupBtn.click();
  }


  async signup(name: string, email: string) {
    await signupPage.nameInput.setValue(name);
    await signupPage.signupEmailInput.setValue(email);
    await signupPage.signupBtn.click();
  }

  async isSignup() {
    return await signupPage.logoutBtn.isDisplayed();
  }
}

export default new SignupActions();
