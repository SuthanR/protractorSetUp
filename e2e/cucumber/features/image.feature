Feature: Image comparision for MEGA bus.com
  As a user, I would like to compare the mega bus multilingual page

  Scenario: Compare the mega bus help page for united kingdom & canada
  Given I log in the megabus home page
  When I am on the megabus page
  And I click help
  Then I compare the mega bus page