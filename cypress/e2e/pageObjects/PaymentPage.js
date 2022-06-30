class PaymentPage
{

getPayByBankWireButton()
{
    return cy.get('.bankwire')
}

getPaymentChoiceConfirmationText()
{
    return cy.get('#center_column > form > div > p.cheque-indent > strong')
}

getConfirmOrderButton()
{
    return cy.get('#cart_navigation > button')
}

getSignOutButton()
{
    return cy.get('a[class="logout"]')
}

}

export default PaymentPage;