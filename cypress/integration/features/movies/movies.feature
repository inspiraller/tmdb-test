Feature: Movies
  Scenario: Homepage redirects to /movies
    Given I'm at homepage
    Then I redirect to url '/movies/'
