// import Cypress from 'cypress'; <- this line was braking cypress - unable to get environment variables. Should be declared in cypress/tsconfig.js

import { After, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { setupWorker, SetupWorkerApi } from 'msw';
import { mswAllHandlers } from '../../../msw_mock_ajax/index';

// import { interceptGenres, interceptLoadImgConfig, interceptLoadMovies } from './intercept/movies';
// import getScreen, { intHeight } from './util/getScreen';
import getSelectorProps from './util/getSelectorProps';
import replaceVariables from './util/replaceVariables';

// mock ajax data...
let worker: SetupWorkerApi;

After(() => {
  if (worker) {
    worker.stop();
  }
});

type WaitXHR = Cypress.WaitXHR;
type ObjectLike = Cypress.ObjectLike;

interface WaitXHRCustom {
  request: ObjectLike;
  response: ObjectLike;
}

const root = '/';

// cy.task does not work here...
// instead going to use Given, because logging is useful
// Before({ tags: '@mock-movies' }, () => {
//   cy.task('log', 'Mock movie data');
//   const genres = interceptGenres();
//   const imgConfig = interceptLoadImgConfig();
//   const movies1 = interceptLoadMovies('1');
//   const movies2 = interceptLoadMovies('2');
//   cy.wait([genres, imgConfig, movies1, movies2]);
// });

Given('All movie endpoints mocked', () => {
  cy.task('log', 'Mock movie data');
  worker = setupWorker(...mswAllHandlers());
  worker.start();
  // TODO - handle as msw...
  // const genres = interceptGenres();
  // const imgConfig = interceptLoadImgConfig();
  // const movies1 = interceptLoadMovies('1');
  // const movies2 = interceptLoadMovies('2');
  // cy.wait([genres, imgConfig, movies1, movies2]);
});

When(/I visit \'([^\']+)\'/, (url) => {
  cy.visit(url);
});

When(/I input \'([^\']+)\' with \'([^\']+)\'/, (strInputName, value) => {
  const valueUpdated = replaceVariables(value);
  const strSelector = `input[name="${strInputName}"]`;
  cy.get(strSelector).type(valueUpdated);
});

When(/I click( (element|link|button|submit))? \'([^\']+)\'/, (_, strElem) => {
  // cy.task('log', `element _ = "${_}"`);
  // cy.task('log', `element strElem="${strElem}"`);
  const { strSelector, strPseudoKey, strPseudoValue } = getSelectorProps(strElem);
  // cy.task('log', `strSelector="${strSelector}"`);
  if (strPseudoKey === 'contains') {
    cy.get(strSelector).contains(strPseudoValue).click();
  } else {
    cy.get(strSelector).click();
  }
});
Then(/element \'([^\']+)\' exists/, (strElem) => {
  const { strSelector, strPseudoKey, strPseudoValue } = getSelectorProps(strElem);
  // cy.task('log', 'element exists() ');
  // cy.task('log', `strSelector = "${strSelector}"`);
  // cy.task('log', `strPseudoKey = "${strPseudoKey}"`);
  if (strPseudoKey === 'contains') {
    cy.get(strSelector)
      .contains(strPseudoValue)
      .then(($elem) => {
        // cy.task('log', `$elem.text()=${$elem.text()}`);
        // cy.task('log', `$elem.width()=${$elem.width()}`);
        // cy.task('log', `$elem.height()=${$elem.height()}`);
      });
  } else {
    cy.get(strSelector).should('be.visible');
  }
});
Then(/element \'([^\']+)\' contains number/, (strElem) => {
  cy.task('log', `element hello.... ${strElem}`);
  const { strSelector } = getSelectorProps(strElem);
  cy.get(strSelector).should(($elem) => {
    expect($elem.get(0).innerText).to.match(/[0-9]/);
  });
});
Then(/input \'([^\']+)\' is disabled/, (strInputName) => {
  const strSelector = `input[name="${strInputName}"]`;
  cy.get(strSelector).should('be.disabled');
});
Then(/I redirect to url \'([^\']+)\'/, (strUrl) => {
  cy.task('log', `example log`);
  // cy.location().should(loc => {
  //   cy.task('log', `location href="${loc.href}"`);
  // });
  if (strUrl.indexOf('/') === 0) {
    // cy.task('log', `location pathname should be="${strUrl}"`);
    cy.location('pathname').should('eq', strUrl);
  } else {
    // cy.task('log', `location should be="${strUrl}"`);
    cy.location().should('contain', strUrl); // to test - use contain so exclude querystring
  }
});
Then(/I redirect to url matching regex \/([^\$]+\$)\//, (strRegex) => {
  // cy.task('log', `strRegex ="${strRegex}"`);
  cy.location().should('match', new RegExp(strRegex)); // to test - use contain so exclude querystring
  // cy.location().should('match', new RegExp('www.themoviedb.org\/'));
});
