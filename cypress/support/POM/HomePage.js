class HomePage {
    logout() {
        cy.get('a[href="/logout"]').should('be.visible').click();
    }
}

module.exports = HomePage;
