export class ProductListPage{

    constuctor(){
        this.goShoppingCartButton="#goShoppingCart";
    }

    clickGoShoppingCart(){
        cy.gclick(this.goShoppingCartButton);
    }
}