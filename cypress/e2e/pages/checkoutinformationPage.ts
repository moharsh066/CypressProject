

export class CheckoutinformationPage{
    firstName_textbox = '[data-test="firstName"]'
    lastName_textbox = '[data-test="lastName"]'
    postalcode_textbox = '[data-test="postalCode"]'
    continue_button = '[data-test="continue"]'


    enterFirstname(firstname: string){
        cy.get(this.firstName_textbox).should('have.value', '').and('be.visible')
        cy.get(this.firstName_textbox).type(firstname)
        cy.get(this.firstName_textbox).should('have.value', firstname)
        cy.wait(1000)
    }

    enterLastname(lastname: string){
        cy.get(this.lastName_textbox).should('have.value', '').and('be.visible')
        cy.get(this.lastName_textbox).type(lastname)
        cy.get(this.lastName_textbox).should('have.value', lastname)
        cy.wait(1000)
    }

    enterPostalcode(postalcode: string){
        cy.get(this.postalcode_textbox).should('have.value', '').and('be.visible')
        cy.get(this.postalcode_textbox).type(postalcode)
        cy.get(this.postalcode_textbox).should('have.value', postalcode).and('be.visible')
        cy.wait(1000)
    }

    clickonContinue(){
        cy.get(this.continue_button).should('contain', 'Continue').and('be.visible')
        cy.get(this.continue_button).click()
        cy.wait(1000)
    }

}
export default CheckoutinformationPage;

