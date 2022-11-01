Feature: The Google chrome search page

  Scenario Outline: Search from the search bar produces correct links

    Given I am on the google search page
    When I enter with <input> into the search bar
    Then I get the links related to the search

    Examples:
      | input      |                                   
      | flat       |              
      | cucumber   |  