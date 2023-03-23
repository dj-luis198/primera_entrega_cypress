export class CheckOutPage{

    constructor(){
        this.titleH2='#title';
        this.firstNameInput='#FirstName';
        this.lastNameInput='#lastName';
        this.cardNumberInput='#cardNumber';
        this.purchaseButton='Purchase';
    }

    returnTitle(){
        return cy.get(this.titleH2);
    }

    enterCheckoutData(firstName, lastName, cardNumber){
        cy.gtype(this.firstNameInput, firstName);
        cy.gtype(this.lastNameInput, lastName);
        cy.gtype(this.cardNumberInput, cardNumber);
    }

    clickPuschase(){
        cy.cclick(this.purchaseButton);
    }
}