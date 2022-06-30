class ProductPage
{

getThumb1()
{
    return cy.get('#thumb_5')
}

getThumb2()
{
    return cy.get('#thumb_6')
}

getThumb3()
{
    return cy.get('#thumb_6')
}

getColorWhite()
{
    return cy.get('a[name="White"]')
}

getSizeDropdown()
{
    return cy.get('#group_1')
}

getQuantityWanted()
{
    return cy.get('#quantity_wanted')
}

getAddToCartButton()
{
    return cy.get('#add_to_cart > button > span')
}



}
export default ProductPage;