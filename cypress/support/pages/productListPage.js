const constants = require('../constants');

export class ProductListPage {

    constructor() {
        this.titleH2 = '#title';
        this.goShoppingCartButton = '#goShoppingCart';
        this.headerAlert = '//header[text()="Message alert"]';
        this.closeButton = '//button[@id="closeModal"]';
    }

    returnTitle() {
        return cy.get(this.titleH2, { timeout: constants.TIMEOUT });
    }

    clickClose() {
        cy.xclick(this.closeButton);
    }

    clickGoShoppingCart() {
        cy.gclick(this.goShoppingCartButton);
    }

    clickAddToCart(product) {
        cy.xclick(`//p[text()="${product}"]//following-sibling::button[text()="Add to cart"]`);
        this.clickClose();
    }
}