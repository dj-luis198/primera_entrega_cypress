const constants = require('../constants');

export class ShoppingCartPage {

    constructor() {
        this.titleH2 = '#title';
        this.showTotalPriceButton = '//button[text()="Show total price"]';
        this.totalP = '#price';
    }

    returnTitle() {
        return cy.get(this.titleH2, { timeout: constants.TIMEOUT });
    }

    clickShowTotalPrice() {
        cy.xclick(this.showTotalPriceButton);
    }

    returnProductLength() {
        return cy.xpath('//p[@id="productName"]');
    }

    returnProductName(name) {
        return cy.xpath(`//p[@name="${name}"]`);
    }

    returnProductPrice(name) {
        return cy.xpath(`//p[@name="${name}"]//following-sibling::p[@id="productPrice"]`);
    }

    returnTotal() {
        return cy.get(this.totalP);
    }
}