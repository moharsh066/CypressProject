

export class CartPage {
    checkout_button = '[data-test="checkout"]'

    clickCheckout() {
        cy.get(this.checkout_button).should('contain', 'Checkout').and('be.visible')
        cy.get(this.checkout_button).click()
        cy.wait(2000)
    }
}
export default CartPage;