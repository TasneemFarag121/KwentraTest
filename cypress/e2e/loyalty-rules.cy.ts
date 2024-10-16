

beforeEach(()=>{
    cy.log('I run before every test in every spec file !');
    cy.visit('https://test.kwentra.com/loyalty/loyaltyrule/?tenant_id=240');

    //Login steps
    cy.get('#id_auth-username').type('admin');
    cy.get('#id_auth-password').type('Adm1n1234');
    cy.get('#login-submit-btn').click();


})

afterEach(()=>{
    cy.log('I run after every test in every spec file !');
    cy.get('#id_form-0-DELETE').click();
    cy.get('.pull-right > .btn').click();
})

it("TC#1:An error message should be displayed when the Start Date field is empty, and all other fields are filled with valid data " ,()=>{

    cy.get('#id_form-0-from_date').clear(); // Keep from_date empty
    cy.get('#id_form-0-to_date').clear().type('2024-10-30');
    cy.get('#id_form-0-amount').type('1000');
    cy.get('#id_form-0-points').type('10');
    cy.get('#lookup_form-0-departments').type('324234');
    cy.get('.ac_results li').should('be.visible');
    cy.get('.ac_results ul li').first().click();//Q
    //cy.get('ac_results').first('li').click();// This is functioning same as the previous line 27, but not working properly  
    cy.get('.pull-right > .btn').click();
    cy.get('[data-cy="form-0-from_date"] .errorlist li').should("have.text","This field is required.");
})

it("TC#2:An error message should be displayed when the End Date field is empty,and all other fields are filled with valid data " ,()=>{

    cy.get('#id_form-0-from_date').clear().type('2024-10-30'); 
    cy.get('#id_form-0-to_date').clear();// Keep from_date empty
    cy.get('#id_form-0-amount').type('1000');
    cy.get('#id_form-0-points').type('10');
    cy.get('#lookup_form-0-departments').type('324234');
    cy.get('.ac_results li').should('be.visible');
    cy.get('.ac_results ul li').first().click();
    cy.get('.pull-right > .btn').click();
    cy.get('[data-cy="form-0-to_date"] .errorlist li').should("have.text","This field is required.");
})

// Expected to fail 
it("TC#3:An error message should be displayed when the Points field is empty,and all other fields are filled with valid data " ,()=>{


    cy.get('#id_form-0-from_date').type('2024-10-01'); 
    cy.get('#id_form-0-to_date').type('2024-10-30');
    cy.get('#id_form-0-amount').type('1000');
    // make points empty 
    cy.get('#id_form-0-points').clear();
    cy.get('#lookup_form-0-departments').type('324234');
    cy.get('.ac_results li').should('be.visible');
    cy.get('.ac_results ul li').first().click();
    cy.get('.pull-right > .btn').click();
    cy.get('[data-cy="form-0-points"] .errorlist li').should("have.text","This field is required.");// [Gap] The currunt actual error message is "Points should be greater than 0.
})
// Expexted to fail 
it("TC#4:An error message should be displayed when the Amount field is empty,and all other fields are filled with valid data " ,()=>{
    cy.get('#id_form-0-from_date').type('2024-10-01'); 
    cy.get('#id_form-0-to_date').type('2024-10-30');
    // make amount empty 
    cy.get('#id_form-0-amount').clear();
    cy.get('#id_form-0-points').type('1000');
    cy.get('#lookup_form-0-departments').type('324234');
    cy.get('.ac_results li').should('be.visible');
    cy.get('.ac_results ul li').first().click();
    cy.get('.pull-right > .btn').click();
    cy.get('[data-cy="form-0-amount"] .errorlist li').should("have.text","This field is required.");// [Gap] The currunt actual error message is "Points should be greater than 0.
})

it("TC#5:An error message should be displayed when the Department field is empty,and all other fields are filled with valid data " ,()=>{
    cy.get('#id_form-0-from_date').type('2024-10-01'); 
    cy.get('#id_form-0-to_date').type('2024-10-30');
    // make amount empty 
    cy.get('#id_form-0-amount').clear();
    cy.get('#id_form-0-points').type('1000');
    cy.get('#lookup_form-0-departments').clear();       
    cy.get('.pull-right > .btn').click();
    cy.get('[data-cy="form-0-departments"] .errorlist li').should("have.text","This field is required.");
})

it("TC#[1-8]: 1 Verify that thesystem fails to save and displays validation error messages when entering negative values for 'Amount' and 'Points', an invalid date range (end date before start date), and typing in the department field without selecting a specific department, while other fields contain valid data. " ,()=>{

    cy.get('#id_form-0-from_date').type('2024-10-01'); 
    cy.get('#id_form-0-to_date').type('2024-10-30');
    cy.get('#id_form-0-points').type('-10');
    cy.get('#id_form-0-amount').type('-10');
    cy.get('#lookup_form-0-departments').type('revenue');
    cy.get('.pull-right > .btn').click();

    cy.get('#id_form-0-amount')
    .invoke('prop', 'validationMessage')
    .then((errorValidationMessage) => {
     
      console.log('Validation Message:', errorValidationMessage); 
    })
    .should('equal', 'Value must be greater than or equal to 0.');  



})
it("TC#[1-8]: 1 Verify that thesystem fails to save and displays validation error messages when entering negative values for 'Amount' and 'Points', an invalid date range (end date before start date), and typing in the department field without selecting a specific department, while other fields contain valid data. " ,()=>{

    cy.get('#id_form-0-from_date').type('2024-10-01'); 
    cy.get('#id_form-0-to_date').type('2024-10-30');
    cy.get('#id_form-0-points').type('-10');
    cy.get('#id_form-0-amount').type('-10');
    cy.get('#lookup_form-0-departments').type('revenue');
    cy.get('.pull-right > .btn').click();

    cy.get('#id_form-0-amount')
    .invoke('prop', 'validationMessage')
    .then((errorValidationMessage) => {
     
      console.log('Validation Message:', errorValidationMessage); 
    })
    .should('equal', 'Value must be greater than or equal to 0.');  



})
it("TC#[2-8]: 2 Verify that the system fails to save and displays validation error messages when entering negative values for 'Amount' and 'Points', an invalid date format, and typing in the department field without selecting a specific department, while other fields contain valid data. " ,()=>{


})


it("TC#[2-8]: 3 Verify that the system fails to save and displays validation error messages when 'Amount' is negative, 'Points' is zero, the 'Date' end is before the start date, and the department field is typed without a specific selection, while other fields contain valid data." ,()=>{

})



it("TC#9  4 Verify that the system fails to save and displays validation error messages when 'Amount' is negative, 'Points' is zero,  an invalid date format, and the department field is typed without a specific selection, while other fields contain valid data." ,()=>{

})



it("TC#12 5 Verify that the system fails to save and displays validation error messages when 'Amount' is zero, 'Points' is negative,  an invalid date format, and the department field is typed without a specific selection, while other fields contain valid data." ,()=>{

})

it("TC#12 " ,()=>{
    
})



