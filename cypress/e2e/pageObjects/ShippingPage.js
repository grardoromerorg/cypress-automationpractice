class ShippingPage
{

getAgreeTermsCheckbox()
{
    return cy.get('#cgv')
}

getProceedShippingPageButton()
{
    return cy.get('#form > p > button')
}

}

export default ShippingPage;