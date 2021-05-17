// import Cypress from 'cypress'; <- this line was braking cypress - unable to get environment variables. Should be declared in cypress/tsconfig.js

import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import getScreen, { intHeight } from './util/getScreen';
import getSelectorProps from './util/getSelectorProps';
import replaceVariables from './util/replaceVariables';

type WaitXHR = Cypress.WaitXHR;
type ObjectLike = Cypress.ObjectLike;

interface WaitXHRCustom {
  request: ObjectLike;
  response: ObjectLike;
}

const root = '/';

Before({ tags: '@NotDesktop' }, () => {
  // Default is Desktop set in cypress.json
  const intWidth = getScreen('NotDesktop');
  // cy.task('log', `Before - screen intWidth = "${intWidth}"`);
  cy.viewport(intWidth, intHeight);
});

Given(/I'm at homepage/, () => {
  cy.visit(root);
});
Given(/I visit \'([^\']+)\'/, (url) => {
  cy.visit(url);
});
Given(/I am logged out tmdb/, (url) => {
  cy.visit('https://www.themoviedb.org/logout');
});
Given(/I login to TMDB/, (url) => {
  const email = Cypress.env('email');
  const password = Cypress.env('password');
  cy.visit('https://www.themoviedb.org/login');

  // should use this process.
  // https://developers.themoviedb.org/3/authentication/validate-request-token
  // to return
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
