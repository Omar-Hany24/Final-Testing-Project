class SignupPage {
    visit() {
        cy.visit('https://www.automationexercise.com');
        cy.contains('Signup').should('be.visible').click();
    }

    signup(name, email) {
        cy.get('input[data-qa="signup-name"]').should('be.visible').type(name);
        cy.get('input[data-qa="signup-email"]').should('be.visible').type(email);
        cy.get('button[data-qa="signup-button"]').should('be.visible').click();
    }

    fillAccountInformation(password, day, month, year, address) {
        cy.get('input[name="password"]').type(password);
        cy.get('select[name="days"]').select(day);
        cy.get('select[name="months"]').select(month);
        cy.get('select[name="years"]').select(year);
        cy.get('input[name="newsletter"]').check();
        cy.get('input[name="optin"]').check();
        cy.get('input[name="first_name"]').type(address.firstName);
        cy.get('input[name="last_name"]').type(address.lastName);
        cy.get('input[name="company"]').type(address.company);
        cy.get('input[name="address1"]').type(address.address1);
        cy.get('input[name="address2"]').type(address.address2);
        cy.get('select[name="country"]').select('Canada'); // Select Canada from the dropdown
        cy.get('input[name="state"]').type(address.state);
        cy.get('input[name="city"]').type(address.city);
        cy.get('input[name="zipcode"]').type(address.zipcode);
        cy.get('input[name="mobile_number"]').type(address.mobileNumber);
        cy.get('button[data-qa="create-account"]').click();
    }
}

module.exports = SignupPage;
