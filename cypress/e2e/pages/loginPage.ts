

export class LoginPage {

    //pageObjects

  //  username_textbox = "//input[@id = 'user-name']"
  //  password_textbox = "//input[@name='password']"
 //   login_button = "//input[@type='submit']"
  //  title = "[data-test='title']"


    //pageActions

    enterUsername() {
        cy.fixture('login_locators').then((loginloc) => {
            cy.xpath(loginloc.username_textbox).should('have.value', '').and('be.visible')
            cy.xpath(loginloc.username_textbox).should('exist').type(loginloc.username_standard)
            cy.xpath(loginloc.username_textbox).should('have.value', loginloc.username_standard).and('be.visible')
            cy.wait(2000)

        })
        //cy.xpath(this.username_textbox).should('have.value', '').and('be.visible')
        //cy.xpath(this.username_textbox).type(username)
        //cy.xpath(this.username_textbox).should('have.value', username).and('be.visible')
        //cy.wait(2000)
    }

    enterPassword() {

        cy.fixture('login_locators').then((loginloc) => {
            cy.xpath(loginloc.password_textbox).should('have.value', '').and('be.visible')
            cy.xpath(loginloc.password_textbox).type(loginloc.password)
            cy.wait(2000)
        })
        //  cy.xpath(this.password_textbox).should('have.value', '').and('be.visible')
        //  cy.xpath(this.password_textbox).type(password)
        //  cy.wait(2000)
    }

    clickLogin() {
        cy.fixture('login_locators').then((loginloc) => {
            cy.xpath(loginloc.login_button).should('contain', 'Login').and('be.visible')
            cy.xpath(loginloc.login_button).click()
            cy.wait(2000)
        })
        //    cy.xpath(this.login_button).should('contain', 'Login').and('be.visible')
        //    cy.xpath(this.login_button).click()
        //    cy.wait(2000)
    }
    validatetitle() {
        cy.fixture('login_locators').then((loginloc) => {
            cy.contains(loginloc.title, 'Products').should('be.visible')
        })

        // cy.contains('.title', 'Products').should('be.visible')
    }

}
export default LoginPage;