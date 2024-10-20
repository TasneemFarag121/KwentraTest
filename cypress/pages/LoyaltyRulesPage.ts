import { error } from "console";

export default class loyaltyRulesPage{

    constructor(){}

    // Private Elements Selecotors
    private elementSelectors={
        fromDate :'#id_form-0-from_date',
        toDate : '#id_form-0-to_date',
        points : '#id_form-0-points',
        amount :  '#id_form-0-amount',
        departments: '#lookup_form-0-departments',
        autoCompleteSearchResultList:'.ac_results ul li'
 
    }

    //private Actions Selectors
    private actionSelectors={ 
        delete: '#id_form-0-DELETE',
        Save:'.pull-right > .btn'

    }

    //Private Validation Errors Messages Selectors
    private validatioErrorMessageSelectors={
        fromDate: '[data-cy="form-0-from_date"] .errorlist li',
        toDate: '[data-cy="form-0-to_date"] .errorlist li',
        points: '[data-cy="form-0-points"] .errorlist li',
        amount: '[data-cy="form-0-amount"] .errorlist li',
        departments:'[data-cy="form-0-departments"] .errorlist li',

        
    }

    //Fields Elements
    get getFromDate(){
        return cy.get(this.elementSelectors.fromDate);
    }
    get getToDate(){
        return cy.get(this.elementSelectors.toDate);
    }

    get getPoints(){
        return cy.get(this.elementSelectors.points);
    }

    get getAmount(){
        return cy.get(this.elementSelectors.amount);
        
    }

    get getDepartment(){
        return cy.get(this.elementSelectors.departments)
    }
    get getAcSearchResultList(){
        return cy.get(this.elementSelectors.autoCompleteSearchResultList);
    }

    // Actions Elements
    get getDeleteCheckBox(){
        return cy.get(this.actionSelectors.delete);
    }


    get getSaveButton(){
        return cy.get(this.actionSelectors.Save);
    }

    // Validation error Messages Elements

    get getFromDateValidationError(){
        return cy.get(this.validatioErrorMessageSelectors.fromDateError);
    }

    get getToDateValidationError(){
        return cy.get(this.validatioErrorMessageSelectors.toDateError);
    }

    get getPointsValidationError(){
        return cy.get(this.validatioErrorMessageSelectors.pointsError);
    }
    get getAmoutValidationError(){
        return cy.get(this.validatioErrorMessageSelectors.amountError);

    }
    get getDepartmentValidationError(){
        return cy.get(this.validatioErrorMessageSelectors.departmentsError);
    }
    


    load(){
        cy.visit('/loyalty/loyaltyrule/?tenant_id=240');
    }

    deleteLoyaltyIfOnPage(){
        cy.url().then((url)=>{
            if(url.includes('/loyalty')){
                cy.get(this.actionSelectors.delete).click();
                cy.get(this.actionSelectors.Save).click();
            }
        });
    }

    getErrorMessageOfElement(elemnetName : string){

    const errorSelector = this.validatioErrorMessageSelectors['${elementName}'];
    if (errorSelector){
        return cy.get(errorSelector);
    }
    else
    {
        throw new error('validatio error selector not found for element: ${elemnetName} ')
    }
}

    //mapping the field names to their respective locators
    // Encapsulation needed - add a function in the loyaalty page

    // this.validatioErrorMessageSelectors.
    
    // const ValidationErrorFieldsLocators:{[key: string]: string}={
    // 'from_date': loyaltyPage.getFromDateValidationError,
    // 'to_date': loyaltyPage.toDateValidationErrorLocator,    
    // 'amount': loyaltyPage.amoutValidationErrorLocator,
    // 'points': loyaltyPage.pointsValidationErrorLocator,
    // 'department': loyaltyPage.departmentValidationErrorLocator,
//};








}