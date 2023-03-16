const constants = require('../constants');

export class NavBarPage {

    returnUser(user) {
        return cy.get(`[id^=user_${user}_]`,{timeout: constants.TIMEOUT});
    };
};