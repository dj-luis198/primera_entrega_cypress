const constants = require('../support/constants');

const { NavBarPage } = require('../support/pages/navBarPage');
const { HomePage } = require('../support/pages/homePage');
const { ProductListPage } = require('../support/pages/productListPage');
const { ShoppingCartPage } = require('../support/pages/shoppingCartPage');
const { CheckOutPage } = require('../support/pages/checkOutPage');
const { ReciptPage } = require('../support/pages/reciptPage');

describe('Entrega final', { retries: 2 }, () => {
  let checkoutData, productData;

  const navBarPage = new NavBarPage();
  const homePage = new HomePage();
  const productListPage = new ProductListPage();
  const shoppingCartPage = new ShoppingCartPage();
  const checkoutPage = new CheckOutPage();
  const reciptPage = new ReciptPage();

  before('Pre-condiciones', () => {
    cy.fixture('checkout').then(dataCheckout => {
      checkoutData = dataCheckout;
    });
    cy.fixture('product').then(dataProduct => {
      productData = dataProduct;
    });

    cy.request({
      url: `${constants.APIURL}/register`,
      method: 'POST',
      body: {
        username: constants.USER.toLowerCase(),
        password: constants.PASSWORD,
        gender: constants.GENDER,
        day: constants.DAY,
        month: constants.MONTH,
        year: constants.YEAR,
      }
    }).then(result1 => {
      expect(result1.status).is.eql(200);
      expect(result1.body.newUser.username).is.eql(constants.USER.toLowerCase());
      expect(result1.body.newUser.gender).is.eql(constants.GENDER);
      expect(result1.body.newUser.day).is.eql(constants.DAY);
      expect(result1.body.newUser.month).is.eql(constants.MONTH);
      expect(result1.body.newUser.year).is.eql(constants.YEAR);
      cy.request({
        url: `${constants.APIURL}/login`,
        method: 'POST',
        body: {
          username: result1.body.newUser.username,
          password: constants.PASSWORD,
        }
      }).then(result2 => {
        expect(result2.status).is.eql(200);
        localStorage.setItem('token', result2.body.token);
        localStorage.setItem('user', result2.body.user.username);
      })
    })
    cy.visit('/');
    navBarPage.returnUser(constants.USER.toLowerCase()).should('exist');
    homePage.clickOnlineShop();
    productListPage.returnTitle().should('have.text', 'Products');
  });

  it('Deberia de mostrarse correctamente los datos del ticket de compra', () => {
    productListPage.clickAddToCart(productData.product1.name);
    productListPage.clickAddToCart(productData.product2.name);
    productListPage.clickGoShoppingCart();
    shoppingCartPage.returnProductLength().should('have.length', 2);
    shoppingCartPage.returnProductName(productData.product1.name).should('exist');
    shoppingCartPage.returnProductPrice(productData.product1.name).invoke('text').then(texto => {
      expect(texto).to.eql(`$${productData.product1.price}`);
    });
    shoppingCartPage.returnProductName(productData.product2.name).should('exist');
    shoppingCartPage.returnProductPrice(productData.product2.name).invoke('text').then(texto => {
      expect(texto).to.eql(`$${productData.product2.price}`);
    });
    shoppingCartPage.clickShowTotalPrice();
    shoppingCartPage.returnTotal().invoke('text').then(total => {
      expect(total).to.eql(`${productData.product1.price + productData.product2.price}`);
    });
    shoppingCartPage.clickGoToCheckout();
    checkoutPage.returnTitle().should('have.text', 'Checkout');
    checkoutPage.enterCheckoutData(checkoutData.firstname, checkoutData.lastname, checkoutData.cardnumber);
    checkoutPage.clickPuschase();
    reciptPage.returnTitle().invoke('text').then(title => {
      expect(title).to.eql('Purchase has been completed successfully');
    });
    reciptPage.returnBody().invoke('text').then(body => {
      expect(body).to.eql(`${checkoutData.firstname} ${checkoutData.lastname} has succesfully purchased the following items`);
    });
    reciptPage.returnProduct(productData.product1.name).invoke('text').then(productName => {
      expect(productName).to.eql(`${productData.product1.name}`);
    });
    reciptPage.returnProduct(productData.product2.name).invoke('text').then(productName => {
      expect(productName).to.eql(`${productData.product2.name}`);
    });
    reciptPage.returnCreditCard().invoke('text').then(numCard => {
      expect(numCard).to.eql(`${checkoutData.cardnumber}`);
    });
    reciptPage.returnTotal().invoke('text').then(total => {
      expect(total).to.eql(`You have spent $${productData.product1.price + productData.product2.price}`);
    });
  });

  after(() => {
    cy.clearLocalStorage();
    cy.request({
      url: `${constants.APIURL}/deleteuser/${constants.USER}`,
      method: 'DELETE',
    }).then(result3 => {
      expect(result3.status).is.eql(200);
    })
  })
});