class LogoutPage {
    loggedInMessage(){
        return cy.get('.post-title');
    }
    logoutButton(){
        return cy.contains('a', 'Log out');
    }
    congratulationsMessage(){
        return cy.contains('Congratulations student. You successfully logged in!');
    }
}export default LogoutPage;