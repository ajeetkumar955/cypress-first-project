class LoginPage{
    userNameLabel(){
        return cy.contains('[for="username"]', 'Username');
    }
    userNameField(){
        return cy.get('#username');
    }
    passwordLabel(){
        return cy.contains('[for="password"]','Password');
    }
    passwordField(){
        return cy.get('#password');
    }
    submitButton(){
        return cy.get('#submit');
    }
    errorMessage(){
        return cy.get('#error');
    }
}export default LoginPage;