Feature: Movies
  Scenario: Homepage redirects to /login
    Given I'm at homepage
    Then I redirect to url '/login/'

  Scenario: Click login - redirect to tmdb website, then click login - redirect to create-session then movies
    When I click button '[data-testid="btn-login"]'
    Then I redirect to url matching regex /www.themoviedb.org\/authenticate\/[^\?]+\?redirect_to\=http\:\/\/localhost\:3000\/create-session$/

  Scenario: Login to tmdb with test user email
    Given I login to TMDB
    # Note - if user is logged out it will instead ask to login, providing username and password. a:contains("Login")
    # When I click link 'button:contains("Approve")'
    # Then I redirect to url '/create-session'
    # Then I redirect to url '/movies'