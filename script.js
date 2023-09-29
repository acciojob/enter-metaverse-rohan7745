// cypress/integration/tests/test.spec.js

describe('Test Metaverse Entry', () => {
  it('Should change status text on button click', () => {
    // Visit your web page
    cy.visit('http://localhost:3000'); // Replace with your page's URL

    // Click the "Enter" button
    cy.get('#enterBtn').click();

    // Wait for the text to change to "Entered Metaverse"
    cy.get('#status').should('have.text', 'Entered Metaverse');
  });
});
