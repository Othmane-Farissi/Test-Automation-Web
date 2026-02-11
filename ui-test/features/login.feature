Feature: Login

  Scenario: Login with different credentials
    Given user is on the homepage
    When user clicks on the login/signup icon
    And user is redirected to the login/signup page
    And user enters <email> and <password>
    And user clicks on the login button
    Then user should see "<result>"
  

  Examples:
    | email                         | password     | result                     |
    | otmanefarissi66@gmail.com     | othmanE!123 | homepage                   |
    | wrong@mail.com                | Valid123!    | error message              |
    | otmanefarissi66@gmail.com     | wrongpass    | error message              |
    | empty                         | empty        | validation message         |