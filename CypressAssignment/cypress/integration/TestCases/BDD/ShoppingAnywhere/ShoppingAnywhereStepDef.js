import Register from '../../../../support/pageObjects/Register'
// import LoginPaths from '../../../../support/pageObjects/LoginPaths'
import ProductSearch from '../../../../support/pageObjects/ProductSearch'

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const registerObj = new Register()
// const loginObj = new LoginPaths()
const productSearchObj = new ProductSearch()

Given('I login to the Registration page', () => {
    cy.visit(Cypress.env('url') + "/register")
})

When('I insert data in the text boxes', function(dataTable) {
    registerObj.getFirstName().type(dataTable.rawTable[1][0])
    registerObj.getLastName().type(dataTable.rawTable[1][1])
    registerObj.getEmail().type(dataTable.rawTable[1][2])
})

And('I select the radio buttons and checkboxes', () => {
    registerObj.getGender().check()

    registerObj.checkBox().check().should('be.checked')
    registerObj.checkBox().uncheck().should('not.be.checked')
})
Then('I select the values from dropdowns', () => {
    registerObj.selectDateDropdown().select('1').should('have.value', '1')
    registerObj.selectMonthDropdown().select('1').should('have.value', '1')
    registerObj.selectYearDropdown().select('2001').should('have.value', '2001')
})
Given('I login to the login page', () => {
    cy.visit(Cypress.env('url') + "/login")
})
And('I am logging in using custom commands', function () {
    cy.loginCommand({ email: 'fake@email.com', pass: 'Sectre1' })
})

Given('I login to the ShopAnywhere application', () => {
    cy.visit(Cypress.env('url'))
})

And('I enter the text in searchbox and click on search button', function(dataTable) {
    productSearchObj.getSearchBox().type(dataTable.rawTable[1][0])
    productSearchObj.getButton().click()
})
When('I click on add to cart and enter two number of quantity', () => {
    productSearchObj.addToCartButton().click()
    cy.wait(4000)
    productSearchObj.addToCartButton().click()

})
Then('I click on add to cart link at the top of the page', () => {
    productSearchObj.cartLink().click()
})
And('I verify the total amount', () => {
    var a1 = 0
    productSearchObj.price().then(function (element) {
        const price = element.text()
        var res = price.split("$")
        var price1 = res[1].trim()
        a1 = Number(a1) + Number(price1)
        cy.log(price1)
    })
        .then(function () { })


    var a2 = 0
    var multiply
    productSearchObj.quantity().invoke('val').then(function (element) {
        var quant = element
        a2 = Number(a2) + Number(quant)
        cy.log(quant)
    }).then(function () {
        multiply = (a1) * (a2)
        cy.log("Printing mul---->" + multiply)
    })

    var totalAmt1 = 1
    productSearchObj.total().then(function (element) {
        const totalAmt = element.text()
        var res = totalAmt.split("$")
        totalAmt1 = res[1].trim()
        cy.log(totalAmt1)
    }).then(function () {
        expect(Number(totalAmt1)).to.equal(multiply)
    })
})
