/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
import Cart from '../pageObjects/Cart'
import LoginPage from '../pageObjects/LoginPage'
import AccountCreation from '../pageObjects/AccountCreation'
import AddressPage from '../pageObjects/AddressPage'
import ShippingPage from '../pageObjects/ShippingPage'
import PaymentPage from '../pageObjects/PaymentPage'
import MyAccountPage from '../pageObjects/MyAccountPage'

describe('automationpractice.com automated tests', function(){
   
    const homePage = new HomePage()
    const productPage = new ProductPage()
    const cart = new Cart()
    const loginPage = new LoginPage()
    const accountCreation = new AccountCreation()
    const addressPage = new AddressPage()
    const shippingPage = new ShippingPage()
    const paymentPage = new PaymentPage()
    const myAccountPage = new MyAccountPage()

beforeEach(function(){
        //to generate a random array from the testData.json file 
        cy.fixture('testData').then(function(data){
        var random = (new Date().getMilliseconds() % data.length);
        this.data=data[random];
})
})
       
it('T001: Enter website and go to a product page', function()
{

    cy.visit('http://automationpractice.com')
    homePage.getProductBlouse().click()   
})

it('T002: Hover over product pictures', function()
{

    cy.visit('http://automationpractice.com')
    homePage.getProductBlouse().click() 

    //Hover over product pictures
    productPage.getThumb1().trigger('mouseover').should('be.visible')
    productPage.getThumb2().trigger('mouseover').should('be.visible')
    productPage.getThumb3().trigger('mouseover').should('be.visible')
})

it('T003: Change product color', function()
{
    
    cy.visit('http://automationpractice.com')
    homePage.getProductBlouse().click()  

    //Change color to white
    productPage.getColorWhite().click()
})

it('T004: Change product size', function()
{
        
    cy.visit('http://automationpractice.com')
    homePage.getProductBlouse().click()  

    //Change size to L in dropdown and verify change according to selection
    productPage.getSizeDropdown().select(this.data.size).should('have.value', this.data.size)
})

it('T005: Change product quantity', function()
{
        
    cy.visit('http://automationpractice.com')
    homePage.getProductBlouse().click()  

    //Change quantity to 30
    productPage.getQuantityWanted().clear().type(this.data.productQuantity1)
})

it('T006: Go to product page and Add to Cart, then verify cart summary quantity', function()
{
        
    cy.visit('http://automationpractice.com')
    homePage.getProductBlouse().click()  
    productPage.getQuantityWanted().clear().type(this.data.productQuantity1)

    //Add to cart  
    productPage.getAddToCartButton().click()

    //Verify quantity in summary
    cart.getSummaryQuantity().should('have.text', this.data.productQuantity1)
    cart.getProductQuantityLayer().should('have.text', this.data.productQuantity1)
})

it('T007: Change quantity in Cart', function()
{
        
    cy.visit('http://automationpractice.com')
    homePage.getProductBlouse().click()  
    productPage.getQuantityWanted().clear().type(this.data.productQuantity1)
    productPage.getAddToCartButton().click()

    //Exit cart summary pop-up
    cart.getExitSummaryButton().click()

    //Go to "Shopping-cart summary"
    cart.getViewShoppingCart().click()

    //Change desired quantity to 99
    cart.getCartQuantityInput().clear().type(this.data.productQuantity2)
})

it('T008: Add product to cart and proceed to check-out', function()
{
        
    cy.visit('http://automationpractice.com')
    homePage.getProductBlouse().click()  
    productPage.getQuantityWanted().clear().type(this.data.productQuantity1)
    productPage.getAddToCartButton().click()
    cart.getExitSummaryButton().click()
    cart.getViewShoppingCart().click()

    //Proceed to check-out
    cart.getCartProceedButton().click()
})

it('T009: Register user to confirm order, sign out and sign back in as previously registered user', function()
{
        
    cy.visit('http://automationpractice.com')
    homePage.getProductBlouse().click()  
    productPage.getQuantityWanted().clear().type(this.data.productQuantity1)
    productPage.getAddToCartButton().click()
    cart.getExitSummaryButton().click()
    cart.getViewShoppingCart().click()
    cart.getCartProceedButton().click()

    //Fill email and click on proceed create account form
    loginPage.getEmailInput().type(this.data.email)
    loginPage.getCreateAccountButton().click()

    //Fill form and register
    accountCreation.getTitleRadioCheck().check()
    accountCreation.getFirstNameInput().type(this.data.firstName)
    accountCreation.getLastNameInput().type(this.data.lastName)
    accountCreation.getEmailInputAccountCreation().clear().type(this.data.email)
    accountCreation.getPasswordInput().type(this.data.password)
    accountCreation.getDropdownDays().select(this.data.dayDate)
    accountCreation.getDropdownMonths().select(this.data.monthDate)
    accountCreation.getDropdownYears().select(this.data.yearDate)
    accountCreation.getNewsletterCheckbox().check()
    accountCreation.getFirstNameAddressInput().clear().type(this.data.firstName)
    accountCreation.getLastNameAddressInput().clear().type(this.data.lastName)
    accountCreation.getAddressInput().type(this.data.address)
    accountCreation.getCityInput().type(this.data.city)
    accountCreation.getStateDropdown().select(this.data.state)
    accountCreation.getPostCodeInput().type(this.data.postalCode)
    accountCreation.getCountryDropdown().select(this.data.country)
    accountCreation.getAdditionalInfoInput().type(this.data.additionalInfo)
    accountCreation.getMobilePhone().type(this.data.mobilePhone)
    accountCreation.getAliasInput().clear().type(this.data.addressAlias)
    accountCreation.getSubmitButton().click()

    //Add a comment and click on proceed to checkout
    addressPage.getCommentInput().type(this.data.comment)
    addressPage.getProceedAdressPageButton().click()

    //Accept terms of service and proceed to checkout
    shippingPage.getAgreeTermsCheckbox().check()
    shippingPage.getProceedShippingPageButton().click()
    
    //Select pay by bank wire
    paymentPage.getPayByBankWireButton().click()

    //Click on confirm order
    paymentPage.getConfirmOrderButton().click()

    //Sign out to go back to authentication page
    paymentPage.getSignOutButton().click()
    
    //Sign in again with previously created user 
    loginPage.getEmailRegisteredUserInput().type(this.data.email)
    loginPage.getPasswordRegisteredUserInput().type(this.data.password)
    loginPage.getSignInButton().click()

    //Go to order history and click on details
    myAccountPage.getOrderAndDetailsButton().click()

    //Click on order reference to view details
    myAccountPage.getOrderReferenceButton().click()
    cy.wait(6000)

    //Scroll to bottom of page
    cy.scrollTo('bottom')
})


})