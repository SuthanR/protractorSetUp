Feature: Arithmetic Operations for division
  As a user of the calculator
  I would like access to basic arithmetic operations
  So that I can perform simple calculations

  Scenario: Should use divide operator by default for division
    Given The calculator is open
     When I calculate 10 / 2
     Then the result should equal 5

  Scenario: Should use modulo operator by default for modulo
    Given The calculator is open
     When I calculate 26 % 11
     Then the result should equal 4
