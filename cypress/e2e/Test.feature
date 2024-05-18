Feature: Automation Exercise Test Cases

  Scenario: Registration with invalid details
    Given I open the website
    When I login with invalid details
      | email                | password |
      | invalid@example.com  | invalid  |
    Then I should see an error message

  Scenario: Registration with valid details
    Given I open the website
    When I signup with valid details
      | name    | email                | password | day | month | year | firstName | lastName | company  | address1 | address2 | country | state | city | zipcode | mobileNumber |
      | John Doe | AnaOmarHany@yahoo.com | pass123  | 10  | May   | 1990 | John      | Doe      | CompanyX | Address1 | Address2 | Canada  | State | City | 12345   | 1234567890   |
    Then I should see account created message and continue to homepage

  Scenario: Logout functionality
    Given I open the website
    When I signup with valid details
      | name    | email                | password | day | month | year | firstName | lastName | company  | address1 | address2 | country | state | city | zipcode | mobileNumber |
      | John Doe | AnaOmarHany@yahoo.com | pass123  | 10  | May   | 1990 | John      | Doe      | CompanyX | Address1 | Address2 | Canada  | State | City | 12345   | 1234567890   |
    Then I should see account created message and continue to homepage
    When I logout
    Then I should be redirected to the login page

  Scenario: Search for a product
    Given I open the website
    When I search for a product "Shirt"
    Then I should see the product in search results

  Scenario: Search for a non-existent product
    Given I open the website
    When I search for a product "NonExistentProduct"
    Then I should see no products found message

  Scenario: Add product to cart, remove product from cart, and leave a product review
    Given I open the website
    When I login with existing details
    And I add a product to the cart
    Then I should see the product in the cart
    When I remove the product from the cart
    Then I should see the cart is empty
    When I leave a product review
    Then I should see the review submission confirmation

  Scenario: TShirts in male Category
    Given I open the website
    When I navigate to TShirts in male category
    Then I should see the TShirts list

  Scenario: Add product to cart using valid credentials for login and continue to checkout then download invoices
    Given I open the website
    When I login with valid credentials
    And I navigate to the products page
    And I view the first product
    And I add the product to the cart
    And I view the cart from the modal
    And I proceed to checkout
    And I place the order
    And I fill the payment details