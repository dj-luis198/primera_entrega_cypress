const constants = require('../constants');

export class ReciptPage{

    constructor(){
        this.titleHeader = 'Purchase has been completed successfully';
        this.nameP = '#name';
        this.creditCardText ='#creditCard';
        this.TotalPriceText='#totalPrice';
    }

    returnTitle(){
        return cy.contains(this.titleHeader);
    }

    returnBody(){
        return cy.get(this.nameP, {timeout: constants.TIMEOUT});
    }

    returnProduct(product){
        return cy.get(`p[id="${product}"]`);
    }

    returnCreditCard(){
        return cy.get(this.creditCardText);
    }

    returnTotal(){
        return cy.get(this.TotalPriceText);
    }
}