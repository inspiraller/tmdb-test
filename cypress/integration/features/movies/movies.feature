Feature: Movies
  Scenario: Homepage redirects to /login
    Given I'm at homepage
    Then I redirect to url '/login'
