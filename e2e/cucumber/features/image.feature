Feature: Image comparision for BVA application
  As a user, I would like to compare the transferwise multilingual page

  Scenario: Compare the transferwise receive money page for Netherlands & Germany
  Given I log in the netherlands transferwise home page
  When I am on the transferwise page
 And I click receive money
    Then I compare the receive money page