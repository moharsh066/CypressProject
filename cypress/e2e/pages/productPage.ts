

export class ProductPage{

    saucelabbackpack_text= '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    addtocart_button= '[data-test="add-to-cart"]'
    gotocart_button = '[data-test="shopping-cart-link"]'

    clicksaucelabbackpack(){
        cy.get(this.saucelabbackpack_text).should('have.text', 'Sauce Labs Backpack').and('be.visible')
        cy.get(this.saucelabbackpack_text).click()
        cy.wait(2000)
    }

    clickaddtocart(){
        cy.get(this.addtocart_button).should('contain', 'Add to cart').and('be.visible')
        cy.get(this.addtocart_button).click()
        cy.wait(2000)
    }

    clickgotocart(){
        cy.get(this.gotocart_button).should('be.visible')
        cy.get(this.gotocart_button).click()
        cy.wait(3000)
    }
}

export default ProductPage;