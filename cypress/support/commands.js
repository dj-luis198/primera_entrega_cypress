// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//---------------Commands get----------------//

Cypress.Commands.add('gtype', (locator, text) => {
    cy.get(locator).type(text);
}
)

Cypress.Commands.add('gclick', (locator) => {
    cy.get(locator).click();
}
)

Cypress.Commands.add('gdblclick', (locator) => {
    cy.get(locator).dblclick();
}
)

Cypress.Commands.add('cclick', (locator) => {
    cy.contains(locator).click();
}
)