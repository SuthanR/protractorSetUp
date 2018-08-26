'use strict'
var chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
const wait = require('./wait.js');
chai.use(require('chai-as-promised'));
const expect = require('chai').expect,
    protractorImageComparison = require('protractor-image-comparison');
browser.waitForAngularEnabled(false);
const CLICK_BANK = by.linkText('Megabus.com');

function Imagepage() {

    browser.protractorImageComparison = new protractorImageComparison({
        baselineFolder: 'imagecomparision/baselinescreen',
        screenshotPath: 'imagecomparision/newscreen'
    });
 

    this.login = function () {
        return new Promise(resolve => {
            browser.driver.get('https://us.megabus.com/').then(resolve);
        })
    }
    
    
    this.tPage = function () {
        return new Promise(function (resolve) {
            console.log("CLICK_ONE");
            wait.waitForElement(CLICK_BANK).then(resolve);
        });
    };

    const CLICK_ONE =  by.linkText('Help');

    
    this.receive = function () {
        return new Promise(function (resolve) {

            element(CLICK_ONE).click().then(resolve);

        });
    };

    this.screenReceive = function () {
        expect(browser.protractorImageComparison.checkScreen('Interchange')).to.eventually.equal(0);

    };

}
module.exports = Imagepage;