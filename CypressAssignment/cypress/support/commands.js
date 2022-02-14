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
// Cypress.Commands.add('selectProduct', (product) => { 
//     cy.get('h4[class="card-title"]').each(($el, index, $list) =>
//     {
//        const text = $el.text()
//        if(text.includes(product))
//        {
//            cy.get('button[class="btn btn-info"]').eq(index).click()
//        }
//     })
//     })

    // Cypress.Commands.add('loginCommand',('RohanJoshi') =>{
    //     cy.get('button[type="submit"]:nth-child(1)').click()
    // })

    Cypress.Commands.add('loginCommand', (user) => {
        cy.get('input[id="Email"]').type(user.email)
        cy.get('input[id="Password"]').type(user.pass)
    })

