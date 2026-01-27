Feature: Login

  Scenario: Login with valid credentials
    Given user is on the homepage
    When user clicks on the login/signup icon
    And user is redirected to the login page
    And user enters a valid email address
    And user enters a valid password
    And user clicks on the login button
    Then user should be logged in successfully
    And user should be redirected to the homepage

