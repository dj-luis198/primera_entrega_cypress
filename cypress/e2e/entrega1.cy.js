/// <reference types="cypress"/>

const { RegisterPage } = require('../support/pages/registerPage');
const { LoginPage } = require('../support/pages/loginPage');
const { NavBarPage } = require('../support/pages/navBarPage');
const { HomePage } = require('../support/pages/homePage');
const { ProductListPage } = require('../support/pages/productListPage');
const { ShoppingCartPage } = require('../support/pages/shoppingCartPage');

describe('Pre-entrega', { retries: 2 }, () => {
  let loginData, productData;

  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  const navBarPage = new NavBarPage();
  const homePage = new HomePage();
  const productListPage = new ProductListPage();
  const shoppingCartPage = new ShoppingCartPage();

  before('Preparar datos de entrada', () => {

    cy.fixture('login').then(dataLogin => {
      loginData = dataLogin;
    })

    cy.fixture('product').then(dataProduct => {
      productData = dataProduct;
    })
  })

  beforeEach("Pre-condiciones", () => {
    cy.visit("/");
    registerPage.dblClickLogin();
    loginPage.login(loginData.user, loginData.password);
    navBarPage.returnUser(loginData.user).should('exist');
    homePage.clickOnlineShop();
    productListPage.returnTitle().should('have.text', 'Products');
  })

  it('Deberia de mostrarse correctamente el nombre, precio y total acumulado de dos productos en el Shopping Cart', () => {
    productListPage.clickAddToCart(productData.product1.name);
    productListPage.clickAddToCart(productData.product2.name);
    productListPage.clickGoShoppingCart();
    shoppingCartPage.returnProductLength().should('have.length', 2);
    shoppingCartPage.returnProductName(productData.product1.name).should('exist');
    shoppingCartPage.returnProductPrice(productData.product1.name).invoke('text').then(texto => {
      assert.equal(texto, `$${productData.product1.price}`);
    });
    shoppingCartPage.returnProductName(productData.product2.name).should('exist');
    shoppingCartPage.returnProductPrice(productData.product2.name).invoke('text').then(texto => {
      assert.equal(texto, `$${productData.product2.price}`);
    });
    shoppingCartPage.clickShowTotalPrice();
    shoppingCartPage.returnTotal().invoke('text').then(total => {
      assert.equal(total, `${productData.product1.price + productData.product2.price}`);
    });
  })
})