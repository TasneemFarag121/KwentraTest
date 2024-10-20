
import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/LoginPage';
import loyaltyRulesPage from '../pages/LoyaltyRulesPage';

const loginPage = new LoginPage(); ;
const loyaltyPage= new loyaltyRulesPage();

afterEach(()=>{
    loyaltyPage.deleteLoyaltyIfOnPage();
});


Given(`the admin is login using username , password`, () => {
    // [Given] Sets up the initial state of the system.
    loginPage.load();
    loginPage.signIn();
    
});

Given(`the admin is on the kwentra loyalty page URL`, () => {
    // [Given] Sets up the initial state of the system.
    loyaltyPage.load();
});

When(`the admin fills the From Date with {string}`, (fromDate: string) => {
    // [When] Describes the action or event that triggers the scenario.
    if(fromDate){
        loyaltyPage.getFromDate.type(fromDate);
        //LoyaltyPage.enterInFromDateField(fromDate)
    }
  
});

When(`the admin fills the To Date with {string}`, (toDate: string) => {
    // [When] Describes the action or event that triggers the scenario.
    if(toDate){
    loyaltyPage.getToDate.type(toDate);
}

});

When(`the admin fills the Points field with {string}`, (points: string) => {
    // [When] Describes the action or event that triggers the scenario.
    if(points){
        loyaltyPage.getPoints.type(points);
    }

    
})

When(`the admin fills the Department field with {string}`, (department: string) => {
    // [When] Describes the action or event that triggers the scenario.
    // Only perform the type and visibility assertion if the department is not empty
    if(department){
        loyaltyPage.getDepartment.type(department);
    }
});

When(`And The admin clicks on the first item at the visibile auto complete search result list`, () => {
    // [When] Describes the action or event that triggers the scenario.
    // Only perform the type and visibility assertion if the department is not empty
  
        loyaltyPage.getAcSearchResultList.should('be.visible');
        loyaltyPage.getAcSearchResultList.first().click();
        
});


When(`the admin fills the Amount with {string}`, (amount: string) => {
    // [When] Describes the action or event that triggers the scenario.
    if(amount){

        loyaltyPage.getAmount.type(amount);
    }

});

When(`the admin clicks on the Save button`, () => {
    // [When] Describes the action or event that triggers the scenario.
    loyaltyPage.getSaveButton.click();

});

Then(`error message says {string} displayed against the field left empty {string}`, (errorMessage: string, field: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
    // Replace field with its corresponding locator
    loyaltyPage.getErrorMessageOfElement(field).should('have.text', errorMessage);

    //Later - Mocha JS
}); 



Then(`a native JavaScript error message saying {string} should be displayed against the Amount field only if it has a negative value`, (errorValidationMessage: string) => {
    // [Then] Describes the expected outcome or result of the scenario.

    loyaltyPage.getAmoutValidationError
    .invoke('prop', 'validationMessage')
    .then((errorValidationMessage) => {
      console.log('Validation Message:', errorValidationMessage); 
    })
    .should('equal', errorValidationMessage);  
});

Then(`error message says {string} should be diplayed against the To Date field`, (errorMessage: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
    loyaltyPage.getToDateValidationError.should('have.text',errorMessage);

});

Then(`error message says {string} should be diplayed against the Points field`, (errorMessage: string) => {
    // [Then] Describes the expected outcome or result of the scenario.
    loyaltyPage.getPointsValidationError.should("have.text", errorMessage);

});
