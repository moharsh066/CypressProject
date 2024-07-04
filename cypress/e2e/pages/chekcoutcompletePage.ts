

export class CheckoutcompletePage{
 purchaseconfirmation_text=  '[data-test="complete-header"]'


 validateConfirmation(){
    cy.get(this.purchaseconfirmation_text).should('contain', 'Thank you for your order!')
 }
}

export default CheckoutcompletePage;