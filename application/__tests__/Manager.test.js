const Manager = require('../lib/Manager');

describe('Initialize', () => {
    it('getRole() will return role property', () => {
        const manager = new Manager('John', '2', 'placeholder@email.com', '1')

        const result = manager.getRole();

        expect(result).toStrictEqual('Manager');
    })
    it('getOfficeNumber() will return officenumber', () => {
        const officenumber = '1';
        const manager = new Manager('John', '2', 'placeholder@email.com',officenumber);

        const result = manager.getOfficeNumber();

        expect(result).toStrictEqual('1')
    })
})







