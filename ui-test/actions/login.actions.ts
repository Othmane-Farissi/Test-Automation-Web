import LoginPage from "../objects/login.page"

class LoginActions {

    async openLoginPage() {
        await LoginPage.loginSignupBtn.click();
    }
}