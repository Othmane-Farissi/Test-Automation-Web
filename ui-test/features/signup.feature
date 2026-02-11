Feature: Signup

  Scenario Outline: Signup for first time
    Given signup user is on the homepage
    When signup user clicks on the login/signup icon
    And signup user is redirected to the login/signup page
    And signup user enters "<name>" and "<email>"
    And signup user clicks on the signup button
    Then signup user should see "<result>"
 
  Examples:
    | name        | email                    | result   |
    | test user 1 | otmanefarissi66@gmail.com | homepage |
  
