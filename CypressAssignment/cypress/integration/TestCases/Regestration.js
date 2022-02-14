/// <reference types="Cypress" />
import Register from '../../support/pageObjects/Register'

describe('Regestration',function(){

    it('Regestration',function(){
        cy.visit(Cypress.env('url') + "/register")

        const registerObj = new Register()

        registerObj.getFirstName().type('Dummy')
        registerObj.getLastName().type('Name')
        registerObj.getEmail().type('dummy@gmail.com')

        // registerObj.selectDate().select()
        registerObj.selectDateDropdown().select('1').should('have.value','1')
        registerObj.selectMonthDropdown().select('1').should('have.value','1')
        registerObj.selectYearDropdown().select('2001').should('have.value','2001')
        // registerObj.selectMonthDropdown().click()
        // registerObj.selectMonth().click()
        // registerObj.selectYearDropdown().click()
        // registerObj.selectYear().click()


        registerObj.getGender().check()

        registerObj.checkBox().check().should('be.checked')
        registerObj.checkBox().uncheck().should('not.be.checked')

        
        



    })
})