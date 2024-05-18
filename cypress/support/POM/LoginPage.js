class LoginPage {
    visit() {
        cy.visit('https://www.automationexercise.com');
        cy.contains('Login').should('be.visible').click();
    }

    login(email, password) {
        cy.get('input[data-qa="login-email"]').should('be.visible').type(email);
        cy.get('input[data-qa="login-password"]').should('be.visible').type(password);
        cy.get('button[data-qa="login-button"]').should('be.visible').click();
    }
}

module.exports = LoginPage;
