class AddressPage
{

getCommentInput()
{
    return cy.get('#ordermsg > .form-control')
}

getProceedAdressPageButton()
{
    return cy.get('#center_column > form > p > button')
}

}

export default AddressPage;