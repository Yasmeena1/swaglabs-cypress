describe('', () => {
    it.skip('to test the random username', () => {

        cy.visit("https://www.saucedemo.com/v1/index.html")

        let username = ["standard_user", "locked_out_user", "problem_user", "performance_glitch_user"]
        let randomusername = Math.floor(Math.random() * username.length)
        cy.get('[data-test="username"]').type(username[randomusername])
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()

    });
    it.skip('to add items to the cart', () => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get('[data-test="username"]').type("problem_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        let expectionitemes = 6;
        for (let i = 0; i < expectionitemes; i++) {
            let myarray = cy.get('div[class="inventory_container"]').find('.btn_inventory').eq(i).click()
        }

    });
   
it.skip('to handle dropdown', () => {
    cy.visit("https://www.saucedemo.com/v1/index.html")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()

    cy.get('.product_sort_container').select('hilo')
    cy.get(':nth-child(1) > .pricebar > .inventory_item_price').should('have.text',"$49.99")
    cy.wait(2000)

    cy.get('.product_sort_container').select('lohi')
    cy.get('.inventory_list > :nth-child(1)').should('contain','$7.99')
    cy.wait(2000)

    cy.get('.product_sort_container').select('za')
    cy.get('.inventory_list > :nth-child(1)').should('have.text','Test.allTheThings() T-Shirt (Red)This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.$15.99ADD TO CART')
    cy.wait(2000)

    cy.get('.product_sort_container').select('az')
    cy.get('.inventory_list > :nth-child(1)').should('have.text','Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99ADD TO CART')
    cy.wait(2000)
    
});

    it.skip('to orgnaized the page from lower to high price ', () => {

        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get('.product_sort_container').select('Price (low to high)')
       
        let prices = [];
        let loweprice, higerprice;
        
        cy.get('.inventory_item_price').each((ele) => {
          prices.push(parseInt(ele.text().replace('$', ''), 10));
        })
        .then(() => {
          loweprice = prices[0];
          higerprice = prices[prices.length - 1];
        
          expect(higerprice).to.be.greaterThan(loweprice);
        
          console.log('this is the lower price: ' + loweprice);
          console.log('this is the highest price: ' + higerprice);
        });
     
    });
    it.skip('to checkout', () => {
        cy.visit("https://www.saucedemo.com/v1/index.html")

        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('#shopping_cart_container').click()
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('yasoo')
        cy.get('[data-test="lastName"]').type('mohammed')
        cy.get('[data-test="postalCode"]').type('1234')
        cy.get('.btn_primary').click()
        cy.get('.summary_total_label').should('contain',' $32.39')
        cy.get('.btn_action').click()
        cy.get('.pony_express').should('be.visible')

        
    });
    it.only('to remove items from the cart ', () => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.get('[data-test="username"]').type("problem_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        let expectionitemes = 6;
        for (let i = 0; i < expectionitemes; i++) {
            let myarray = cy.get('div[class="inventory_container"]').find('.btn_inventory').eq(i).click()
        }
        cy.get('#shopping_cart_container').click()
        let expecetitems=3;
        for(let i=0;i<expecetitems;i++){
            let myarray=cy.get('#cart_contents_container').find('.cart_button').eq(i).click()
            cy.get('.btn_action').click()
        }
    });
});