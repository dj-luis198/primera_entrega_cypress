export class NavBarPage {

    returnUser(user) {
        return cy.get(`[id^=user_${user}_]`);
    };
};