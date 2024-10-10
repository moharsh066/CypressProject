import { LoginPage } from "./pages/loginPage"
import { ProductPage } from "./pages/productPage"
import { CartPage } from "./pages/cartPage"
import { CheckoutinformationPage } from "./pages/checkoutinformationPage"
import { CheckoutoverviewPage } from "./pages/checkoutoverviewPage"
import { CheckoutcompletePage } from "./pages/chekcoutcompletePage"


const loginpage = new LoginPage()
const productpage = new ProductPage()
const cartpage = new CartPage()
const checkoutpage = new CheckoutinformationPage()
const checkoutoverviewPage = new CheckoutoverviewPage()
const chekcoutcompletePage = new CheckoutcompletePage()


beforeEach(function () {
  cy.clearAllCookies()
  cy.clearLocalStorage()
  cy.clearAllSessionStorage()
  cy.visit('/')
})

describe('e2e test for purchase on saucedemo site', () => {


  it('Add a product to the cart and finalize the purchase', () => {
    // login
   // loginpage.enterUsername('standard_user')
    loginpage.enterUsername()
    loginpage.enterPassword()
    loginpage.clickLogin()
    loginpage.validatetitle()

    // add product to cart
     productpage.clicksaucelabbackpack()
    productpage.clickaddtocart()
     productpage.clickgotocart()

    // // click Checkout 
     cartpage.clickCheckout()

    // // fill and clcik continue on the checkout page
     checkoutpage.enterFirstname("Julian")
     checkoutpage.enterLastname("Elisa")
     checkoutpage.enterPostalcode("93555")
     checkoutpage.clickonContinue()

    // //validate the product and click finsh on Checkout Overview page
     checkoutoverviewPage.clickfinish()

    // //Verify the purchase 
   chekcoutcompletePage.validateConfirmation()
  })
})

afterEach(function () {
  cy.clearCookies()
  cy.clearLocalStorage()
  

})

