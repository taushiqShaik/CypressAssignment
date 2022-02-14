class Register
{
    getFirstName(){
        return cy.get('input[id="FirstName"]')
    }
    getLastName(){
        return cy.get('input[id="LastName"]')
    }
    getEmail(){
        return cy.get('input[id="Email"]')
    }
    getGender(){
        return cy.get('input[id="gender-male"]')
    }
    checkBox(){
        return cy.get('input[type="checkbox"]')
    }
    selectDateDropdown(){
        return cy.get('div[class="date-picker-wrapper"] select:nth-child(1)')
    }
    
    selectDate(){
        return cy.get('select[name="DateOfBirthDay"] option[value="1"]')
    }
    selectMonthDropdown(){
        return cy.get('div[class="date-picker-wrapper"] select:nth-child(2)')
    }
    selectMonth(){
        return cy.get('select[name="DateOfBirthDay"] option[value="1"]')
    }
    selectYearDropdown(){
        return cy.get('div[class="date-picker-wrapper"] select:nth-child(3)')
    }
    selectYear(){
        return cy.get('select[name="DateOfBirthYear"] option[value="2001"]')
    }
    
}
export default Register