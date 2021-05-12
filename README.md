# Steps to startup
## git clone project locally
```
git clone thisrepo
```

## cd to directory
```
cd tmdb-test
```

# login to tmdb to create api_key and put into .env file locally - see .env.example for reference
**.env**
```
# CREATE THIS FILE AS .env local to your project.
api_key = YOUR API KEY CREATED FROM TMDB - https://www.themoviedb.org/
api_read_access_token = OPTIONAL
```

## npm install and start
```
npm install
npm run dev
```

## visit url
```
http://localhost:3000
```

# Steps to navigate site

- (click) - login
- (click) - dropdown - and select options
- (type - vote avg) - 4
- (click) - search button
- (view) - table of movies
- (click - title) to sort
- (click - vote average to sort
- (click) - popularity to sort

# Notes to self
- This does not meet the brief as it does a search on all movies, not just latest showing.
- This could be further extended to reduce those movies  based upon release date
- Logic to load all the latest movies then filter on them from the client is not a good practice, since the logic to filter should be in one place - the backend to save duplication from other interfacing.


# To run cypress tests - currently broken due to next.js webpack 5 implementation not working with cypress-webpack-preprocessor.
1. After install just check this file out again
```
git checkout cypress/plugins/index.js
```

2. To run cypress tests - first run application, and this will also provide instrumentation via babel.config.js
```
npm run dev
```

3. Next run cypress tests
```
npm run cypress
```

done !

########################################################################################
# todo....
# storybook and jest/enzyme -
All tests will be utilising components declared in storybook to make it clearer what has been tested and what hasn't

# run storybook to look at components that have been tested
```
npm run storybook
```

# run jest enzyme tests to see tests run
```
npm test
```

# run test with coverage - combining coverage from jest and cypress into 1
```
npm run coverage
```
# npm run sonar - to see collated coverage
- first follow instructs to run local sonar server - sonar/
- Then run sonar
```
npm run sonar
```

view coverage report and code quality 

done!!
