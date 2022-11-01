import { Given, Then, When} from '@wdio/cucumber-framework';
import homePage from '../pageobjects/mainPage';
import searchResult from '../pageobjects/resulPage';


Given(/^I am on the google search page$/, async () => {
    await browser.url("https://www.google.com/");
    await browser.maximizeWindow();
});

When(/^I enter with (.*) into the search bar$/, async (input) => {
    await homePage.search(input);
    await browser.pause(1000);
});

Then(/^I get the links related to the search$/, async() => {
    
    expect(searchResult.searchLinks).toBeExisting();
    await browser.pause(1000);
});

