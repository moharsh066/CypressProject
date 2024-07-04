

export class CheckoutoverviewPage{

saucelabsbackpack_product = "//div[text()='Sauce Labs Backpack']"
finish_button =  '[data-test="finish"]'


    product_validate(){
        cy.get(this.saucelabsbackpack_product).should('be.visible')

    }

    clickfinish(){
        cy.get(this.finish_button).should('contain', 'Finish').and('be.visible')
        cy.get(this.finish_button).click()
        cy.wait(2000)

    }
}
export default CheckoutoverviewPage;