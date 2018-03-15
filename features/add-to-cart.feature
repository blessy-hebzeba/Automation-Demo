Feature: Home Page
  Scenario: Automation of the Home Page

    Given User goes to the Home Page
    When User goes to Login Page
    When User decides to sign up
    When User registers as a new user
    Then User goes to the Home Page
    When User searches for a product
    Then User validates the search results
    Then User adds product to the cart
    Then User triggers checkout
