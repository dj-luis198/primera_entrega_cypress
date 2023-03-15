export class ProductListPage{

    constuctor(){
        this.titleH2= "#title";
        this.goShoppingCartButton="#goShoppingCart";
    }

    returnTitle(){
        return cy.get(this.titleH2);
    }

    clickGoShoppingCart(){
        cy.get(this.goShoppingCartButton).click();
    }
}