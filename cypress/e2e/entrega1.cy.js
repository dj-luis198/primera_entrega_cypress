/// <reference types="cypress"/>

const { RegisterPage } = require('../support/pages/registerPage');
const { LoginPage } = require('../support/pages/loginPage');
const { NavBarPage } = require('../support/pages/navBarPage');
const { HomePage } = require('../support/pages/homePage');
const { ProductListPage } = require('../support/pages/productListPage');
//const { ShoppingCartPage } = require('../support/pages/shoppingCartPage');

describe('empty spec', () => {
let loginData, productData;

const registerPage= new RegisterPage();
const loginPage= new LoginPage();
const navBarPage= new NavBarPage();
const homePage= new HomePage();
const productListPage= new ProductListPage();

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
    registerPage.dblClickLogin();
    loginPage.login(loginData.user,loginData.password)
    navBarPage.returnUser(loginData.user).should('exist');
    homePage.clickOnlineShop();
    //
})

  it('passes', () => {
  cy.log("paso");
  })
})