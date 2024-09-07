import { sys } from "typescript";


export class CheckoutcompletePage {
   purchaseconfirmation_text = '[data-test="complete-header"]'



   validateConfirmation() {
      //cy.get(this.purchaseconfirmation_text).should('have.text', 'Thank you for your order!')

      cy.get(this.purchaseconfirmation_text).then((element) => {
         const confirmationText = element.text().trim();

         switch (confirmationText) {
            case "Thank you for your order!":

               cy.get(this.purchaseconfirmation_text).should('have.text', 'Thank you for your order!')
               cy.log(("Message verified in English"))
               break;

            case "Merci pour votre commande !":

               cy.get(this.purchaseconfirmation_text).should('have.text', 'Merci pour votre commande !')
               cy.log(("Message verified in French"))
               break;

            case "¡Gracias por tu pedido!":

               cy.get(this.purchaseconfirmation_text).should('have.text', '¡Gracias por tu pedido!')
               cy.log(("Message verified in Spanish"))
               break;

            case "Grazie per il tuo ordine!":

               cy.get(this.purchaseconfirmation_text).should('have.text', 'Grazie per il tuo ordine!')
               cy.log(("Message verified in Italian"))
               break;

            default:
               console.error("Confirmation text did not match any expected values.")
         }
      });
   }

}
export default CheckoutcompletePage;