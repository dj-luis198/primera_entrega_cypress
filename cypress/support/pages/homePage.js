export class HomePage {

    constructor() {
        this.onlineShopLink = '#onlineshoplink';
    }

    clickOnlineShop() {
        cy.gclick(this.onlineShopLink);
    }
}