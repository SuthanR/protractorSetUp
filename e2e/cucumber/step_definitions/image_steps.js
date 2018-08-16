var chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
chai.use(require('chai-as-promised'));
var expect = require('chai').expect,
protractorImageComparison = require('protractor-image-comparison');
protractorImageComparison = require('protractor-image-comparison');
browser.driver.manage().window().maximize();


module.exports = function() {
    this.setDefaultTimeout(60 * 1000);
};

var ImageComSteps = function () {

    var ImagePage = require("../page_objects/image_page.js");


    this.World = function MyWorld() {
        this.page = new ImagePage();
    };

    this.When(/^I log in the megabus home page$/, function () {
        this.page.login();

    });

    this.When(/^I am on the megabus page$/, function () {
        this.page.tPage();

    });


    this.When(/^I click help$/, function () {
        this.page.receive();

    });

    this.When(/^I compare the mega bus page$/, function (callback) {

        this.page.screenReceive();

    });

};

module.exports = ImageComSteps;