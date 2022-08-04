describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/', {
            onBeforeLoad(window) {
                cy.stub(window.console, 'log').as('consoleLog')
              },
        });
    });

    it('logs to the console that TypeScript can be used', () => {
        cy.get('@consoleLog').should('be.calledWith', 'TypeScript can be used')
    });

    it('displays error if phone number field has letters', () => {
        cy.get('#phone-number')
            .type('d');
        cy.get('#phone-number-error');
    });

    it('displays no error if phone number field has no letters', () => {
        cy.get('#phone-number')
            .type('5555555555');
        cy.get('#phone-number-error').should('not.exist');
    });

  });
  