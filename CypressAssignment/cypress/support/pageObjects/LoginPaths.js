class LoginPaths
{
    getLoginEmail(){
        return cy.get('input[id="Email"]')
    }
    getLoginPass(){
        return cy.get('input[id="Password"]')
    }
}

export default LoginPaths