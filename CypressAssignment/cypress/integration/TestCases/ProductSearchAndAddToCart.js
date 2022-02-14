/// <reference types="Cypress" />

import ProductSearch from '../../support/pageObjects/ProductSearch';

describe('ProductSearch&AddToCart', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it('ProductSearch&AddToCart', function () {

        cy.visit(Cypress.env('url'))

        const productSearchObj = new ProductSearch()

        productSearchObj.getSearchBox().type(this.data.productName)
        productSearchObj.getButton().click()
        productSearchObj.addToCartButton().click()
        cy.wait(4000)
        productSearchObj.addToCartButton().click()
        productSearchObj.cartLink().click()

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
})
