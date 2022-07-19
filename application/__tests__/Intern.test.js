const Intern = require('../lib/Intern');

describe('Initialize', () => {
    it('getSchool() will return school property', () => {
        const school = 'University'
        const intern = new Intern('John', '2','placeholder@email.com', school)

        const result = intern.getSchool();

        expect(result).toStrictEqual('University');
    })
    it('getRole() will return role property', () => {
        const intern = new Intern('John', '2', 'placeholder@email.com', 'University')

        const result = intern.getRole();

        expect(result).toStrictEqual('Intern');
    })
})