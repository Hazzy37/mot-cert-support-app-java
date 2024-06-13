import { Selector } from 'testcafe';

fixture('Getting Started')
    .page('http://localhost:8080/#/login');

test('My First test', async t => {
    const theTitle = Selector('title')
    const inputEmail = Selector('input[name="email"]');
    const inputPassword = Selector('input[name="password"]')
    const h1Header = Selector('h1');

    // Assertion for Title
    await t
        .expect(theTitle.innerText).eql('Timesheet manager')
        .expect(theTitle.exists).ok() // Check if Title exists
        .typeText(inputEmail, 'admin@test.com') //input email address
        .typeText(inputPassword, 'password123') //input password
        .click('button') // Click the sign in button
        .expect(h1Header.innerText).eql('Welcome to Timesheet manager'); //Check header is on the landing page
});