
import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

afterEach(()=>{
    cy.log('I run after every test ');
    cy.get('#id_form-0-DELETE').click();
    cy.get('.pull-right > .btn').click();
});

//mapping the field names to their respective locators
const fieldLocators:{[key: string]: string}={
    'from_date': '[data-cy="form-0-from_date"] .errorlist li',
    'to_date': '[data-cy="form-0-to_date"] .errorlist li',
    'amount': '[data-cy="form-0-amount"] .errorlist li',
    'points': '[data-cy="form-0-points"] .errorlist li',
    'department': '[data-cy="form-0-departments"] .errorlist li',
};

Given(`the admin is on the kwentra loyalty page URL`, () => {
    // [Given] Sets up the initial state of the system.
    cy.visit('https://test.kwentra.com/loyalty/loyaltyrule/?tenant_id=240');
});

Given(`the admin enters username`, () => {
    // [Given] Sets up the initial state of the system.
    cy.get('#id_auth-username').type('admin');
});

Given(`the admin enters password`, () => {
    // [Given] Sets up the initial state of the system.
    cy.get('#id_auth-password').type('Adm1n1234');
});

Given(`the admin clicks on login button`, () => {
    // [Given] Sets up the initial state of the system.
    cy.get('#login-submit-btn').click();
});

When(`the admin fills the From Date with {string}`, (fromDate: string) => {
    // [When] Describes the action or event that triggers the scenario.
    if(fromDate){
        cy.get('#id_form-0-from_date').type(fromDate);
    }
  
});

When(`the admin fills the To Date with {string}`, (toDate: string) => {
    // [When] Describes the action or event that triggers the scenario.
    if(toDate){
    cy.get('#id_form-0-to_date').type(toDate);
}

});

When(`the admin fills the Points field with {string}`, (points: string) => {
    // [When] Describes the action or event that triggers the scenario.
    if(points){
        cy.get('#id_form-0-points').type(points);
    }

    
});
/////////
When(`the admin fills the Department field with {string}`, (department: string) => {
    // [When] Describes the action or event that triggers the scenario.
    // Only perform the type and visibility assertion if the department is not empty
    if(department){
        cy.get('#lookup_form-0-departments').type(department);
        cy.get('.ac_results li').should('be.visible');
        cy.get('.ac_results ul li').first().click();
    }
    else {
   
        // Skip the visibility assertion for an empty department
        cy.log('Skipping department selection as no department was provided');
    }
});

When(`the admin fills the Amount with {string}`, (amount: string) => {
    // [When] Describes the action or event that triggers the scenario.
    if(amount){
        cy.get('#id_form-0-amount').type(amount);
    }

});

When(`the admin clicks on the Save button`, () => {
    // [When] Describes the action or event that triggers the scenario.
    cy.get('.pull-right > .btn').click();

});

Then(`error message says {string} displayed against the field left empty {string}`, (errorMessage: string, field: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
    // Replace field with its corresponding locator
    const locator = fieldLocators[field];
    cy.get(locator).should('have.text', errorMessage);
}); 

Then(`a native JavaScript error message saying {string} should be displayed against the Amount field only if it has a negative value`, (errorValidationMessage: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.get('#id_form-0-amount')
    .invoke('prop', 'validationMessage')
    .then((errorValidationMessage) => {
     
      console.log('Validation Message:', errorValidationMessage); 
    })
    .should('equal', errorValidationMessage);  
});

Then(`error message says {string} should be diplayed against the To Date field`, (errorMessage: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.get('[data-cy="form-0-to_date"] .errorlist li').should("have.text",errorMessage);

});

Then(`error message says {string} should be diplayed against the Points field`, (errorMessage: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
    cy.get('[data-cy="form-0-points"] .errorlist li').should("have.text", errorMessage);

});
