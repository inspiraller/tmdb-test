# Steps to startup
## git clone project locally
```
git clone https://github.com/inspiraller/tmdb-test.git
```

## cd to directory
```
cd tmdb-test
```

# Sign up with TMDB - https://www.themoviedb.org/
# to create api_key and put into .env file locally - see .env.example for reference
**.env**
```
# CREATE THIS FILE AS .env local to your project.
api_key = YOUR API KEY HERE...
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

# What is happening on page load?
- On page load will display all movies in show latest and load into redux
- localstorage will populate and persist until cache is deleted
- A default search on all the loaded movies will display with pagination

# How to search and filter
- (click) the genre dropdown to select genres  you want to search
- (type - vote avg) any number
- (click) - search
Will reset pagination to 1, and display results

# How to sort
- (click) title - to sort and toggle between ascending or descending
- (click) popularity - to sort and toggle between ascending or descending
- (click) vote average - to sort and toggle between ascending or descending

# how to paginate
- (click) any number at the bottom to paginate

# To run cypress tests - currently broken due to next.js webpack 5 implementation not working with cypress-webpack-preprocessor.
1. After install just check this file out again - because cypress on first install resets the index file.
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

# How to run sonar
- Follow instructions in sonar/ folder

