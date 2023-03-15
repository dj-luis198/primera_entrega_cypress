export class RegisterPage {

    constructor(){
        this.loginLink='//span[@id="registertoggle"]';
    }
    
    dblClickLogin() {
        cy.xpath(this.loginLink).dblclick();
    }
}