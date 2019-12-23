/// <reference types="Cypress" />
/// <reference types="@types/testing-library__cypress" />

context('Library', () => {
  beforeEach(function() {
    cy.visit(`${Cypress.env('localAppURL')}/`);
    cy.findByTestId('page-title').should('have.text', 'Library');
  });

  it('navigates to correct sub-routes', () => {
    cy.wait(750)
      .get("a[href='/library/playlists']")
      .click()
      .location('pathname')
      .should('eq', '/library/playlists')
      .findByTestId('page-subtitle')
      .should('have.text', 'Playlists')
      .wait(1000)
      .findByTestId('page-title')
      .click()
      .location('pathname')
      .should('eq', '/')
      .wait(1000)
      .get("a[href='/library/artists']")
      .click()
      .location('pathname')
      .should('eq', '/library/artists')
      .findByTestId('page-subtitle')
      .should('have.text', 'Artists')
      .wait(1000)
      .findByTestId('page-title')
      .click()
      .location('pathname')
      .should('eq', '/')
      .wait(1000)
      .get("a[href='/library/albums']")
      .click()
      .location('pathname')
      .should('eq', '/library/albums')
      .findByTestId('page-subtitle')
      .should('have.text', 'Albums')
      .wait(1000)
      .findByTestId('page-title')
      .click()
      .location('pathname')
      .should('eq', '/')
      .wait(1000)
      .get("a[href='/library/songs']")
      .click()
      .location('pathname')
      .should('eq', '/library/songs')
      .findByTestId('page-subtitle')
      .should('have.text', 'Songs')
      .wait(1000)
      .findByTestId('page-title')
      .click()
      .location('pathname')
      .should('eq', '/')
      .wait(1000);
  });
});
