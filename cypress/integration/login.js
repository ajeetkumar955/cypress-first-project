import LoginPage from "../page_object/loginPageObject";
import LogoutPage from "../page_object/logoutPageObject";
const loginPage = new LoginPage();
const logoutPage = new LogoutPage();



describe('Check web elements', ()=> {
    beforeEach('Visit site', ()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/');
    })

    it('Check web elements',()=>{
        loginPage.userNameLabel().should('have.text', 'Username');
        loginPage.userNameField().should('exist');
        loginPage.passwordLabel().should('have.text', 'Password');
        loginPage.passwordField().should('exist');
        loginPage.submitButton().should('be.enabled');
        loginPage.errorMessage().should('be.hidden')
    })
    it('Positive LogIn test', ()=>{
        loginPage.userNameField().type('student');
        loginPage.passwordField().type('Password123');
        loginPage.submitButton().click();
        logoutPage.loggedInMessage().should('have.text', 'Logged In Successfully');
        logoutPage.congratulationsMessage().should('have.text', 'Congratulations student. You successfully logged in!');
        logoutPage.logoutButton().should('exist');
        logoutPage.logoutButton().click();
        
    })
    it('Negative username test',()=>{
        loginPage.userNameField().type('hello');
        loginPage.passwordField().type('Password123');
        loginPage.submitButton().click();
        loginPage.errorMessage().should('be.visible');
        loginPage.errorMessage().should('have.text', 'Your username is invalid!');
    })
    it('Negative Password test', ()=>{
        loginPage.userNameField().type('student');
        loginPage.passwordField().type('Password');
        loginPage.submitButton().click();
        loginPage.errorMessage().should('be.visible');
        loginPage.errorMessage().should('have.text', 'Your password is invalid!');
    })
})