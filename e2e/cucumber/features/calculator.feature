Feature: Arithmetic Operations for addition
  As a user of the calculator
  I would like access to basic arithmetic operations to perform simple calculations

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

        Scenario: Should use substract operator by default for substraction
    Given The calculator is open
     When I calculate 15 - 7
     Then the result should equal 8

     Scenario: Should use multiply operator by default for multiplication
    Given The calculator is open
     When I calculate 10 * 9
     Then the result should equal 90

       Scenario: Should use divide operator by default for division
    Given The calculator is open
     When I calculate 10 / 2
     Then the result should equal 5

  Scenario: Should use modulo operator by default for modulo
    Given The calculator is open
     When I calculate 26 % 11
     Then the result should equal 4