class AccountCreation
{

getTitleRadioCheck()
{
    return cy.get('input[id="id_gender1"]')
}

getFirstNameInput()
{
    return cy.get('#customer_firstname')
}

getLastNameInput()
{
    return cy.get('#customer_lastname')
}

getEmailInputAccountCreation()
{
    return cy.get('#email')
}

getPasswordInput()
{
    return cy.get('#passwd')
}

getDropdownDays()
{
    return cy.get('select[id="days"]')
}

getDropdownMonths()
{
    return cy.get('select[id="months"]')
}

getDropdownYears()
{
    return cy.get('select[id="years"]')
}

getNewsletterCheckbox()
{
    return cy.get('#newsletter')
}

getFirstNameAddressInput()
{
    return cy.get('#firstname')
}

getLastNameAddressInput()
{
    return cy.get('#lastname')
}

getAddressInput()
{
    return cy.get('#address1')
}

getCityInput()
{
    return cy.get('#city')
}

getStateDropdown()
{
    return cy.get('#id_state')
}

getPostCodeInput()
{
    return cy.get('#postcode')
}

getCountryDropdown()
{
    return cy.get('#id_country')
}

getAdditionalInfoInput()
{
    return cy.get('#other')
}

getMobilePhone()
{
    return cy.get('#phone_mobile')
}

getAliasInput()
{
    return cy.get('#alias')
}

getSubmitButton()
{
    return cy.get('#submitAccount')
}

}
export default AccountCreation;