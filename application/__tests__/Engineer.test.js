const Engineer = require('../lib/Engineer');

describe('Initialize', () => {
    it('getGithub() will return github property', () => {
        const github = 'username'
        const engineer = new Engineer('John', '2','placeholder@email.com', github)

        const result = engineer.getGitHub();

        expect(result).toStrictEqual('username');
    })
    it('getRole() will return role property', () => {
        const engineer = new Engineer('John', '2', 'placeholder@email.com', 'username')

        const result = engineer.getRole();

        expect(result).toStrictEqual('Engineer');
    })
})