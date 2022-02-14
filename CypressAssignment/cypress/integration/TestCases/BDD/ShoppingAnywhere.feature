Feature: Shpping Anywhere - E2E

    application Regression

    Scenario: Regestration for ShoppingAnwhere application
        Given I login to the Registration page
        When I insert data in the text boxes
            | firstname | lastname | email              |
            | Robin     | Joy      | robinjoy@gmail.com |
        And I select the radio buttons and checkboxes
        Then I select the values from dropdowns

    Scenario: Login for ShoppingAnywhere application using custom commands
        Given I login to the login page
        And I am logging in using custom commands

    Scenario: Product search and add to cart functunality for ShopAnywhere application
        Given I login to the ShopAnywhere application
        And I enter the text in searchbox and click on search button
            | product              |
            | Flower Girl Bracelet |
        When I click on add to cart and enter two number of quantity
        Then I click on add to cart link at the top of the page
        And I verify the total amount

