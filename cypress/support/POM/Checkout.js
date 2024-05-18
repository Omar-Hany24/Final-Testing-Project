class Checkout {
    visit() {
        cy.visit('https://www.automationexercise.com');
    }

    viewfirstProduct() {
        cy.contains('View Product').first().click();
    }

    addToCart() {
        cy.get('.btn.btn-default.cart').should('be.visible').click(); // Click the 'Add to cart' button
    }

    viewCartFromModal() {
        cy.get('.modal-content').contains('View Cart').click(); // Click 'View Cart' in the modal
    }

    proceedToCheckout() {
        cy.contains('Proceed To Checkout').click(); // Click 'Proceed To Checkout'
    }

    placeOrder() {
        cy.contains('Place Order').click(); // Click 'Place Order'
    }

    fillPaymentDetails(name, cardNumber, cvc, expiryMonth, expiryYear) {
        cy.get('input[name="name_on_card"]').type(name);
        cy.get('input[name="card_number"]').type(cardNumber);
        cy.get('input[name="cvc"]').type(cvc);
        cy.get('input[name="expiry_month"]').type(expiryMonth);
        cy.get('input[name="expiry_year"]').type(expiryYear);
        cy.get('#submit').click(); // Click 'Pay and Confirm Order'
    }
}


module.exports = Checkout;
