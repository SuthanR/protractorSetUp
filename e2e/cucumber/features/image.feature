Feature: Image comparision for MEGA bus.com
  As a user, I would like to compare the mega bus multilingual page

  Scenario: Compare the mega bus Login&Signup page for united states & canada
  Given I log in the megabus home page
  When I am on the megabus page
  And I click Login&Signup
  Then I compare the Login&Signup bus page