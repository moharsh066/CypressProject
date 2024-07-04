

export class LoginPage {

    //pageObjects

    username_textbox = "//input[@id = 'user-name']"
    password_textbox = "//input[@name='password']"
    login_button = "//input[@type='submit']"
    title = "[data-test='title']"


    //pageActions

    enterUsername(username: string) {
        cy.xpath(this.username_textbox).should('have.value', '').and('be.visible')
        cy.xpath(this.username_textbox).type(username)
        cy.xpath(this.username_textbox).should('have.value', username).and('be.visible')
        cy.wait(2000)
    }

    enterPassword(password: string) {
        cy.xpath(this.password_textbox).should('have.value', '').and('be.visible')
        cy.xpath(this.password_textbox).type(password)
        cy.wait(2000)
    }

    clickLogin() {
        cy.xpath(this.login_button).should('contain', 'Login').and('be.visible')
        cy.xpath(this.login_button).click()
        cy.wait(2000)
    }
    validatetitle(){
        cy.contains('.title', 'Products').should('be.visible')
    }

}
export default LoginPage;