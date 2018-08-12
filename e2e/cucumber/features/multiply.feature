Feature: Arithmetic multiply Operations
  As a user of the calculator
  I would like access to basic arithmetic operations
  So that I can perform simple calculations

  Scenario: Should use add operator by default for addition
    Given The calculator is open
     When I enter first value of 10
      And I enter second value of 7
      And I click Go
     Then the result should equal 17

  Scenario: Should use multiply operator by default for multiplication
    Given The calculator is open
     When I calculate 10 * 9
     Then the result should equal 90
