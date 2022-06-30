class MyAccountPage
{

getOrderAndDetailsButton()
{
    return cy.get(':nth-child(1) > .myaccount-link-list > :nth-child(1) > a > span')
}

getOrderReferenceButton()
{
    return cy.get('.color-myaccount')
}

}

export default MyAccountPage;