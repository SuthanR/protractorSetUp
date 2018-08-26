Feature: Holiday planning
  As a user, I would like to book the holiday packages on virgin holidays

 Background:
  Given user on the virgin holiday Inn
   Then user accept the cookies

@Check
    Scenario Outline: Search different options available in fly drive package
   When user select the Fly drive
    And user select the Barbados as destination
    And user select the deparature <from> on <when> for how many days <nights> forty <count> adults
   Then user click Find Flydrive

Examples:
|  from  |   when   |nights|count|
|Glasglow|12-01-2018|   5  |  2  |

Scenario: Check the multi-destination options
   When user select the multi-destination
    And user select the Las Vegas as destination
   Then user click Fly holidays

   