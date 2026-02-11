class SignupPage {
    get loginSignupBtn(){
        return $('a[href="/login"]');
    }

    get nameInput(){
        return $('input[data-qa="signup-name"]')
    }

    get signupEmailInput(){
        return $('input[data-qa="signup-email"]')
    }


    get signupBtn(){
        return $('[data-qa="signup-button"]');
    }

    get logoutBtn(){
        return $('a[href="/logout"]');
    }

    async getValidationMessage(){
        return await this.nameInput.getProperty('validationMessage');
    }

}

export default new SignupPage();
