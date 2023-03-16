export class RegisterPage {

    constructor() {
        this.loginLink = '//span[@id="registertoggle"]';
    }

    dblClickLogin() {
        cy.xdblclick(this.loginLink);
    }
}