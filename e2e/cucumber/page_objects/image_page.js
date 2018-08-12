'use strict'
var chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
const wait = require('./wait.js');
chai.use(require('chai-as-promised'));
const expect = require('chai').expect,
    protractorImageComparison = require('protractor-image-comparison');
browser.waitForAngularEnabled(false);
const WAIT_DASH = by.id('dashboard');
const CLICK_BANK = by.id('viewBanks');
const CLICK_USER = by.id('viewPersons');
const CLICK_ROLE = by.id('userRolesBank');
const CLICK_ACCOUT = by.id('viewBankUsers');
const CLICK_CALEN = by.id('viewBusinessCalendars');
const CLICK_AUDIT = by.id('viewAuditLog');
const CLICK_ACT = by.id('viewAccounts');
const CLICK_PARA = by.id('viewParameter');


browser.ignoreSynchronization = true;

function Imagepage() {

    browser.protractorImageComparison = new protractorImageComparison({
        baselineFolder: 'imagecomparision/baselinescreen',
        screenshotPath: 'imagecomparision/newscreen'
    });
 

    this.login = function () {
        return new Promise(resolve => {
            browser.driver.get('https://transferwise.com/nl').then(resolve);
        })
    }
 
    this.tPage = function () {
        return new Promise(function (resolve) {
            wait.waitForElement(CLICK_BANK).then(resolve);
        });
    };

    const CLICK_ICHANGE = by.id('processInterchange');
    const CLICK_SEARCH = by.css('.bttns #defaultBttn');

    this.receive = function () {
        return new Promise(function (resolve) {

            browser.driver.findElement(CLICK_ICHANGE).click().then(resolve);

        });
    };

    this.screenReceive = function () {
        expect(browser.protractorImageComparison.checkScreen('Interchange')).to.eventually.equal(0);

    };

    // this.search2 = function () {
    //     return new Promise(function (resolve) {

    //         wait.waitForElement(CLICK_SEARCH).then(function () {

    //             browser.driver.findElement(CLICK_SEARCH).submit().then(resolve);
    //         })
    //     });
    // };

}
module.exports = Imagepage;