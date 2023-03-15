export class LoginPage {

    constructor() {
        this.userInput = '//input[@id="user"]';
        this.passwordInput = '//input[@id="pass"]';
        this.loginButton = '//button[@id="submitForm"]';
    }

    typeUser(user) {
        cy.xpath(this.userInput).type(user);
    };

    typePassword(password) {
        cy.xpath(this.passwordInput).type(password);
    };

    clickLogIn() {
        cy.xpath(this.loginButton).click();
    };

    login(user, password) {
        this.typeUser(user);
        this.typePassword(password);
        this.clickLogIn();
    };
};