class LoginPage {
    get loginSignupBtn(){
        return $('a[href="/login"]');
    }

    get emailInput(){
        return $('input[data-qa="login-email"]');
    }

    get passwordInput(){
        return $('input[data-qa="login-password"]');
    }

    get loginBtn(){
        return $('input[data-qa="login-button"]');
    }

    get logoutBtn(){
        return $('a[href="/logout"]');
    }
}

export default new LoginPage();