describe('CSS Tests', function() {
    this.beforeEach(() => {
        cy.visit('localhost:3000');
    });

    it('Home has intended styles', function() {
        cy.get('.mainAbout')
            .should('have.css', 'position', 'relative')
            .should('have.css', 'text-align', 'center')
            .should('have.css', 'font-family', 'Raleway, sans-serif')
            .should('have.css', 'border-radius', '8px')
            .should('have.css', 'margin', '0px 50px')
            .should('have.css', 'padding', '10px')
            .should('have.css', 'font-size', '18px');
        
        cy.get('.vinylsContainer')
            .should('have.css', 'position', 'relative')
            .should('have.css', 'margin', '0px 50px 100px')
            .should('have.css', 'padding-bottom', '32px')
            .should('have.css', 'border-radius', '8px')
            .should('have.css', 'display', 'grid')
        
        cy.get('.vinylItem')
            .should('have.css', 'position', 'relative')
            .should('have.css', 'padding', '30px 10px 10px')
            .should('have.css', 'text-align', 'center')
            .should('have.css', 'font-size', '18px');

        cy.get('#addBtn1')
            .should('have.css', 'border-radius', '8px')
            .should('have.css', 'padding', '5px');

        cy.get('.vinylImg')
            .should('have.css', 'width', '150px')
            .should('have.css', 'border-radius', '50%');

        cy.get('.notif')
            .should('have.css', 'border-radius', '8px')
            .should('have.css', 'padding', '16px')
            .should('have.css', 'position', 'fixed');
    });

    it('Cart has intended styles', function() {
        cy.get('#addBtn1').click();
        cy.get('#cartLink').click();
        
        cy.get('.cartContainer')
            .should('have.css', 'position', 'relative')
            .should('have.css', 'display', 'block')
            .should('have.css', 'margin', '0px 50px 50px')
            .should('have.css', 'border-radius', '8px')
            .should('have.css', 'padding', '32px');

        cy.get('.cartItemContainer')
            .should('have.css', 'margin', '30px')
        
        cy.get('.cartImg')
            .should('have.css', 'width', '150px')
            .should('have.css', 'border-radius', '50%')
            .should('have.css', 'position', 'relative')

        cy.get('#removeBtn1')
            .should('have.css', 'border-radius', '8px')
            .should('have.css', 'padding', '5px')
            .should('have.css', 'float', 'right')
            .should('have.css', 'position', 'relative')

        cy.get('#checkoutBtn')
            .should('have.css', 'padding', '10px')
            .should('have.css', 'border-radius', '8px')
    });
})

describe('Basic Tests', function() {
    this.beforeEach(() => {
        cy.visit('localhost:3000')
    });

    it('Opens the page and checks components', function() {
        cy.title().its('length')
            .should('eq', 12);
        cy.get('#homeLink').click();
        cy.url().should('eq', 'http://localhost:3000/');
        cy.get('.navHeader');
        cy.get('.mainAbout');
        cy.get('.searchForm');
        cy.get('.vinylsContainer');
        cy.get('.navFooter');
    });
    
    it('Opens About page and checks url', function() {
        cy.get('#aboutBtn').click();
        cy.url().should('eq', 'http://localhost:3000/about');
    });

    it('Checks if images swap for a default one on error', function() {
        cy.get('.vinylImg')
            .invoke('attr', 'onError')
    });
})

describe('Add items to cart', function() {
    this.beforeEach(() => {
        cy.visit('localhost:3000')
    });

    it('Adds five items to the cart', function() {

        cy.get('#addBtn1').click();
        cy.wait(1001);
        cy.get('#addBtn2').click();
        cy.wait(1001);
        cy.get('#addBtn6').click();
        cy.wait(1001);
        cy.get('#addBtn4').click();
        cy.wait(1001);
        cy.get('#addBtn3').click();
        cy.wait(1001);

        cy.get('#cartLink').click();
        cy.url().should('eq', 'http://localhost:3000/cart');

        cy.get('.cartContainer')
            .invoke('attr', 'len')
            .should('eq', '5');
    });

    it('Adds the same item to the cart three times', function() {
        cy.get('#addBtn5').click();
        cy.wait(1001);
        cy.get('#addBtn5').click();
        cy.wait(1001);
        cy.get('#addBtn5').click();
        cy.wait(1001);

        cy.get('#cartLink').click();

        cy.get('.cartContainer')
            .invoke('attr', 'len')
            .should('eq', '3');
    });

    it('Removes an item from the cart (even if duplicate)', function() {
        cy.get('#addBtn2').click();
        cy.wait(1001);
        cy.get('#addBtn3').click();
        cy.wait(1001);
        cy.get('#addBtn3').click();
        cy.wait(1001);

        cy.get('#cartLink').click();

        cy.get('#removeBtn2').click();

        cy.get('.cartContainer')
            .invoke('attr', 'len')
            .should('eq', '2');
    });

    it('Checks out all products', function() {
        cy.get('#addBtn1').click();
        cy.wait(1001);
        cy.get('#addBtn2').click();
        cy.wait(1001);
        cy.get('#addBtn6').click();
        cy.wait(1001);
        cy.get('#addBtn6').click();
        cy.wait(1001);
        cy.get('#addBtn4').click();
        cy.wait(1001);
        cy.get('#addBtn3').click();
        cy.wait(1001);
        
        cy.get('#cartLink').click();

        cy.get('#checkoutBtn').click();
        cy.contains('Subtotal: 0€')

        cy.get('.cartContainer')
            .invoke('attr', 'len')
            .should('eq', '0');
    });
})