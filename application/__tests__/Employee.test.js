const Employee = require('../lib/Employee');
// validation for input can be utilised in inquirer

describe('Initialize', () => {
    it('getName() will return name property', () => {
        const name = 'John'
        const employee = new Employee(name, '2', 'placeholder@email.com');
        
        const result = employee.getName();

        expect(result).toStrictEqual(name);
    })
    it('getID() will return id property', () => {
        const id = '1'
        const employee = new Employee('John', id, 'placeholder@email.com');
        
        const result = employee.getId();

        expect(result).toStrictEqual('1');
    })
    it('getEmail() will return email property', () => {
        const email = 'placeholder@email.com'
        const employee = new Employee('John', '2', email)

        const result = employee.getEmail();

        expect(result).toStrictEqual('placeholder@email.com');
    })
    it('getRole() will return role property', () => {
        const employee = new Employee('John', '2', 'placeholder@email.com')

        const result = employee.getRole();

        expect(result).toStrictEqual('Employee');
    })
})







