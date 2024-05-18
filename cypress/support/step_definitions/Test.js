const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const LoginPage = require('../POM/LoginPage');
const SignupPage = require('../POM/SignupPage');
const HomePage = require('../POM/HomePage');
const ProductsPage = require('../POM/ProductsPage');
const Checkout = require('../POM/Checkout');

const loginPage = new LoginPage();
const signupPage = new SignupPage();
const homePage = new HomePage();
const productsPage = new ProductsPage();
const checkout = new Checkout();
 

Given('I open the website', () => {
    cy.visit('https://www.automationexercise.com');
});

When('I login with invalid details', (dataTable) => {
    dataTable.hashes().forEach((row) => {
        loginPage.visit();
        loginPage.login(row.email, row.password);
    });
});

Then('I should see an error message', () => {
    cy.contains('Your email or password is incorrect!').should('be.visible');
});

When('I signup with valid details', (dataTable) => {
    dataTable.hashes().forEach((row) => {
        signupPage.visit();
        signupPage.signup(row.name, row.email);
        signupPage.fillAccountInformation(row.password, row.day, row.month, row.year, {
            firstName: row.firstName,
            lastName: row.lastName,
            company: row.company,
            address1: row.address1,
            address2: row.address2,
            country: 'Canada',
            state: row.state,
            city: row.city,
            zipcode: row.zipcode,
            mobileNumber: row.mobileNumber
        });
    });
});

Then('I should see account created message and continue to homepage', () => {
    cy.get('div.col-sm-9.col-sm-offset-1').within(() => {
        cy.get('h2.title.text-center[data-qa="account-created"]').should('be.visible');
        cy.contains('Congratulations! Your new account has been successfully created!').should('be.visible');
        cy.contains('You can now take advantage of member privileges to enhance your online shopping experience with us.').should('be.visible');
        cy.get('a[data-qa="continue-button"]').should('be.visible').click();
    });
});

When('I logout', () => {
    homePage.logout();
});

Then('I should be redirected to the login page', () => {
    cy.url().should('include', '/login');
});

When('I search for a product {string}', (productName) => {
    productsPage.visit();
    productsPage.searchProduct(productName);
});

Then('I should see the product in search results', () => {
    cy.get('.features_items').should('contain', 'Product');
});

Then('I should see no products found message', () => {
    cy.get('.features_items').should('not.have.descendants', '.product-item');
});

When('I login with existing details', () => {
    loginPage.visit();
    loginPage.login('john.dosse2@example.com', 'pass123');
});

When('I add a product to the cart', () => {
    productsPage.visit();
    productsPage.addProductToCart();
});

Then('I should see the product in the cart', () => {
    cy.get('a[href="/view_cart"]').first().should('be.visible').click();
    cy.get('.cart_description').should('be.visible'); // Verify the cart description is visible
});

When('I remove the product from the cart', () => {
    productsPage.removeProductFromCart();
});

Then('I should see the cart is empty', () => {
    cy.get('.cart_info').should('not.contain', '.product-item'); // Ensure the cart is empty
});

When('I leave a product review', () => {
    productsPage.visit();
    productsPage.leaveProductReview('Khaled', 'john.dosse2@example.com', 'This is a great product!');
});

Then('I should see the review submission confirmation', () => {
    cy.contains('Thank you for your review.').should('be.visible'); // Verify the review confirmation message
});

When('I navigate to TShirts in male category', () => {
    productsPage.navigateToTShirts();
});

Then('I should see the TShirts list', () => {
    cy.get('.features_items').should('contain', 'Tshirt');
});

When('I login with valid credentials', () => {
    loginPage.visit();
    loginPage.login('john.dosse2@example.com', 'pass123');
});

When('I navigate to the products page', () => {
    productsPage.visit();
});

When('I view the first product', () => {
    checkout.viewfirstProduct();   // Use the instantiated checkout object
});

When('I add the product to the cart', () => {
    checkout.addToCart();
});

When('I view the cart from the modal', () => {
    checkout.viewCartFromModal();
});

When('I proceed to checkout', () => {
    checkout.proceedToCheckout();
});

When('I place the order', () => {
    checkout.placeOrder();
});

When('I fill the payment details', () => {
    checkout.fillPaymentDetails('John Doe', '1234567890123456', '123', '12', '2025');
});