Cypress.Commands.add('visitHomePage', () => {
  cy.visit('https://www.automationexercise.com/');
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add('signup', (name, email) => {
  cy.get('input[data-qa="signup-name"]').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();
});

Cypress.Commands.add('searchProduct', (productName) => {
  cy.get('input[data-qa="search-product"]').type(productName);
  cy.get('button[data-qa="submit-search"]').click();
});
Cypress.Commands.add('addProductToCart', () => {
  cy.contains('Products').should('be.visible').click();
  cy.contains('View Product').first().click(); // Click the first 'View Product' link
  cy.get('.btn.btn-default.cart').should('be.visible').click(); // Click the 'Add to cart' button
});

Cypress.Commands.add('removeProductFromCart', () => {
  cy.get('a[href="/view_cart"]').should('be.visible').click();
  cy.get('a.cart_quantity_delete').should('be.visible').click();
});

Cypress.Commands.add('leaveProductReview', (name, email, review) => {
  cy.contains('Products').should('be.visible').click();
  cy.contains('View Product').first().click();
  cy.get('#name').type(name);
  cy.get('#email').type(email);
  cy.get('#review').type(review);
  cy.get('#button-review').click();
});
