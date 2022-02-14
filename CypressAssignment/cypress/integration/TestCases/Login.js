/// <reference types="Cypress" />

import LoginPaths from '../../support/pageObjects/LoginPaths'

describe('Logn Functunality',function()
{
    before(function(){
        cy.fixture('example').then(function(data2){
            this.data2 = data2
        })
    })
    it('Login',function(){
        cy.visit(Cypress.env('url') + "/login")

       const loginPathsObj = new LoginPaths()

       cy.loginCommand({email:'fake@email.com',pass: 'Sectre1'})
    })
})