class ProductSearch
{
    getSearchBox(){
        return cy.get('form input[type="text"]')
    }
    getButton(){
        return cy.get('form button[type="submit"]')
    }
    addToCartButton(){
        return cy.get('button[class="button-2 product-box-add-to-cart-button"]')
    }
    cartLink(){
        return cy.get('.content > a')
    }
    price(){
        return cy.get('span[class="product-unit-price"]')
    }
    quantity(){
    //    return cy.get('td[class="quantity"]')
    //    return cy.get('input[type="text"]:nth-child(2)')
        // return cy.get('input[id="itemquantity11227"]')
        return cy.get('input[aria-label="Qty."]')
    }
    total(){
        return cy.get('span[class="product-subtotal"]')
    }
}

export default ProductSearch