Feature: Movies
  Scenario: Load movies page with mock data and pre-render movies-count with number
    Given All movie endpoints mocked
    When I visit '/movies'
    Then element '[data-testid="movies-count"]' contains number
