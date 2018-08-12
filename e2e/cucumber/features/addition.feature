Feature: Arithmetic Operations for addition
  As a user of the calculator
  I would like access to basic arithmetic operations
  So that I can perform simple calculations

  Scenario: Add the numbers
    Given The calculator is open
     When I calculate 1 + 2
     Then the result should equal 3

  Scenario: Should use add operator by default for addition
    Given The calculator is open
     When I enter first value of 10
      And I enter second value of 7
      And I click Go
     Then the result should equal 17