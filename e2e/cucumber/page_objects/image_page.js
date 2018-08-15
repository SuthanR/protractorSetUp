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
const CLICK_BANK = by.linkText('TransferWise');

//browser.ignoreSynchronization = true;

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
            console.log("CLICK_BANK");
            wait.waitForElement(CLICK_BANK).then(resolve);
        });
    };

    const CLICK_RECEIVE = (by.css("landing.selectUseCase('GET_PAID')").getText());
   
    this.receive = function () {
        return new Promise(function (resolve) {

            browser.driver.findElement(CLICK_RECEIVE).click().then(resolve);
            console.log("CLICK_RECEIVE");

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