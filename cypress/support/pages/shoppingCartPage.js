const constants = require('../constants');

export class ShoppingCartPage {

    constructor() {
        this.titleH2 = '#title';
        this.showTotalPriceButton = 'Show total price';
        this.totalP = '#price';
        this.goToCheckoutButton='Go to Checkout';
    }

    returnTitle() {
        return cy.get(this.titleH2, { timeout: constants.TIMEOUT });
    }

    clickShowTotalPrice() {
        cy.cclick(this.showTotalPriceButton);
    }

    returnProductLength() {
        return cy.get('p[id="productName"]');
    }

    returnProductName(name) {
        return cy.get(`p[name="${name}"]`);
    }

    returnProductPrice(name) {
        return cy.get(`p[name="${name}"]`).siblings('p[id="productPrice"]');
    }

    returnTotal() {
        return cy.get(this.totalP);
    }

    clickGoToCheckout() {
        cy.cclick(this.goToCheckoutButton);
    }
}