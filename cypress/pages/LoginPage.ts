export default class Login{

    loginUrl = '/?tenant_id=240';

    load(){
        cy.visit(this.loginUrl);
   
    }

    signIn()
    {
        cy.intercept('POST' ,'/account/login/**').as('loginRequest'); //

        cy.get('#idXXXXXXXX_auth-username').type('admin');
        cy.get('#id_auth-password').type('Adm1n1234');
        cy.get('#login-submit-btn').click();

        cy.wait('@loginRequest').its('response.statusCode').should('eq',200);


        
    }

}
