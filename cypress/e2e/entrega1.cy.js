/// <reference types="cypress"/>

describe('empty spec', () => {
let loginData, productData;

  before('before',()=>{

    cy.fixture('login').then(dataLogin=>{
      loginData=dataLogin;
    })

    cy.fixture('product').then(dataProduct=>{
      productData=dataProduct;
    })
  })

  beforeEach("beforeEach",()=>{
    cy.visit("/");
    cy.xpath('//span[@id="registertoggle"]').dblclick();
    cy.xpath('//input[@id="user"]').type(loginData.user);
    cy.xpath('//input[@id="pass"]').type(loginData.password);
    cy.xpath('//button[@id="submitForm"]').click();
    cy.xpath('//h2[contains(text(),loginData.user)]').should('exist');
    cy.xpath('//a[@id="onlineshoplink"]').click();
})

  it('passes', () => {
  cy.log("paso");
  })
})