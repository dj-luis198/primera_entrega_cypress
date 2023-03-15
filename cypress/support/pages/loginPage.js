export class LoginPage {

    constructor() {
        this.userInput = '//input[@id="user"]';
        this.passwordInput = '//input[@id="pass"]';
        this.loginButton = '//button[@id="submitForm"]';
    }

    typeUser(user) {
        cy.xtype(this.userInput,user);
    };

    typePassword(password) {
        cy.xtype(this.passwordInput,password);
    };

    clickLogIn() {
        cy.xclick(this.loginButton);
    };

    login(user, password) {
        this.typeUser(user);
        this.typePassword(password);
        this.clickLogIn();
    };
};