var chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
chai.use(require('chai-as-promised'));
var expect = require('chai').expect,
protractorImageComparison = require('protractor-image-comparison');
protractorImageComparison = require('protractor-image-comparison');
browser.driver.manage().window().maximize();


var configure = function () {

    this.setDefaultTimeout(60 * 1000);

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


    this.When(/^I click Login&Signup$/, function () {
        this.page.signUp();

    });

    this.When(/^I compare the Login&Signup bus page$/, function (callback) {

        this.page.compareSignUp();

    });

};

module.exports = configure;