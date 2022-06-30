class HomePage
{

getProductBlouse()
{
    return cy.get('#homefeatured > li:nth-child(2) > div > div.left-block > div > a.product_img_link > img')
}

}

export default HomePage;