const assert = require('assert');
const skillsMember = require('./member');

// Import the assert module

// Import the skillsMember function

// Test the getSkills method
describe('skillsMember', () => {
    describe('#getSkills()', () => {
        it('should return an array of skills', () => {
            // Create a new member object
            const member = skillsMember();

            // Call the getSkills method
            const skills = member.getSkills();

            // Assert that the skills array is not empty
            assert.notStrictEqual(skills.length, 0);

            // Assert that the skills array contains the expected skills
            assert.deepStrictEqual(skills, ['HTML', 'CSS', 'JS']);
        });
    });
});