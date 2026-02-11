class LoginPage {
    get loginSignupBtn(){
        return $('a[href="/login"]');
    }

    get nameInput(){
        return $('input[data-qa="signup-name"]')
    }

    get signupEmailInput(){
        return $('input[data-qa="signup-email"]')
    }

    get emailInput(){
        return $('input[data-qa="login-email"]');
    }

    get passwordInput(){
        return $('input[data-qa="login-password"]');
    }

    get loginBtn(){
        return $('[data-qa="login-button"]');
    }


    get signupBtn(){
        return $('[data-qa="signup-button"]');
    }

    get logoutBtn(){
        return $('a[href="/logout"]');
    }

    get loginErrorMessage(){
        return $('form[action="/login"] p');
    }

    async getValidationMessage(){
        return await this.emailInput.getProperty('validationMessage');
    }
}

export default new LoginPage();
