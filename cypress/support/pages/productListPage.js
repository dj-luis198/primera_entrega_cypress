const constants = require('../constants');

export class ProductListPage {

    constructor() {
        this.titleH2 = '#title';
        this.goShoppingCartButton = '#goShoppingCart';
        this.closeButton = '#closeModal';
    }

    returnTitle() {
        return cy.get(this.titleH2, { timeout: constants.TIMEOUT });
    }

    clickClose() {
        cy.gclick(this.closeButton);
    }

    clickGoShoppingCart() {
        cy.gclick(this.goShoppingCartButton);
    }

    clickAddToCart(product) {
        cy.contains(product).siblings('button').click();
        this.clickClose();
    }
}