class LoginPage
{

getEmailInput()
{
    return cy.get('#email_create',{timeout:10000})
}

getCreateAccountButton()
{
    return cy.get('#SubmitCreate',{timeout:10000})
}

getEmailRegisteredUserInput()
{
    return cy.get('#email')
}

getPasswordRegisteredUserInput()
{
    return cy.get('#passwd')
}

getSignInButton()
{
    return cy.get('#SubmitLogin')
}
}

export default LoginPage;