class ProductsPage {
    visit() {
        cy.visit('https://www.automationexercise.com');
        cy.contains('Products').should('be.visible').click();
    }

    searchProduct(productName) {
        cy.get('#search_product').type(productName);
        cy.get('#submit_search').click();
    }
    addProductToCart() {
        cy.contains('View Product').first().click(); // Click the first 'View Product' link
        cy.get('.btn.btn-default.cart').should('be.visible').click(); // Click the 'Add to cart' button
        cy.get('.modal-footer .btn-success').should('be.visible').click(); // Click 'Continue Shopping'
    }

    removeProductFromCart() {
        cy.get('a[href="/view_cart"]').should('be.visible').click();
        cy.get('a.cart_quantity_delete').should('be.visible').click();
    }

    leaveProductReview(name, email, review) {
        cy.contains('View Product').first().click(); // Click the first 'View Product' link
        cy.get('#name').should('be.visible').type(name);
        cy.get('#email').should('be.visible').type(email);
        cy.get('#review').should('be.visible').type(review);
        cy.get('#button-review').should('be.visible').click(); // Click the "Submit" button
    }
    navigateToTShirts() {
        cy.contains('Men').click();
        cy.contains('Tshirts').click();
    }
}

module.exports = ProductsPage;
