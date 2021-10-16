Feature: Movies
  Scenario: Load movies page with mock data and pre-render movies-count with number
    Given All movie endpoints mocked
    When I visit '/movies'
    Then element '[data-testid="movies-count"]' contains number

# to try ...
  # Scenario: Select genre from dropdown
  #   When I select dropdown '[name="genre"]' option 'Action'
  #   Then element '[name="genre"] > ui label[value="28"]' exists
