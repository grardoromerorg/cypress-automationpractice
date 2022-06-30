class Cart
{

getSummaryQuantity()
{
    return cy.get('.ajax_cart_product_txt_s > .ajax_cart_quantity')
}


getProductQuantityLayer()
{
    return cy.get('#layer_cart_product_quantity')
}

getExitSummaryButton()
{
    return cy.get('.cross')
}

getViewShoppingCart()
{
    return cy.get('a[title="View my shopping cart"]')
}

getCartQuantityInput()
{
    return cy.get('.cart_quantity_input')
}

getCartProceedButton()
{
    return cy.get('.button.btn.btn-default.standard-checkout')

}


}

export default Cart;