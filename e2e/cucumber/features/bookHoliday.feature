Feature: Holiday planning
  As a user I would like to book the reservation packages in virgin holidays
 Background:
        Given I am on the virgin holiday Inn
@Check
    Scenario Outline: Analytics on tasks  
    When I select the Fly drive package
    And I select the deparature as <where>
    And I select the destination <to> on <when> for <night> nightof <count> adults
    And I click Fly drive

        Examples:
            | where     | to           | when         | night      | count  |
            | Barbados  | Glasglow     | 12-01-2018   | 5          | 2      |
            | Toronto   | London       | 14-01-2018   | 4          | 3      |

 Scenario: Analytics on tasks  
    When I select the Holiday package
    And I select the destination <Edinburgh> on <16-01-2018> for <2> nightof <1> adults
    And I click Find holidays