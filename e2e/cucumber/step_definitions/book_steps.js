'use strict'

var chai = require('chai').use(require('chai-as-promised'));

var expect = chai.expect;
browser.ignoreSynchronization = true;

var bookSteps = function() {

  var bookPage = require("../page_objects/book_page.js");

  this.World = function MyWorld() {
    this.page = new bookPage();
    };

  this.Given('I am on the virgin holiday Inn', function () {
    this.page.get();
    });

    this.When('I select the Fly drive package', function () {
      this.page.clickPack();
    });

    this.When('I select the Holiday package', function () {
      this.page.clickHoli();
    });

    this.When(/^I select the deparature as (.*)$/, function (where) {
      this.page.selectDepart(where);
    });

    this.When(/^I select the destination (.*) on (.*) for (.*) nightof (.*) adults$/, function (to, when, night, count) {
      this.page.selectArrival(to);
      this.page.selectDate(when);
      this.page.selectNight(night);
      this.page.selectAdult(count);
    
    });

    this.When('I click Fly drive', function () {
      this.page.clickSearch();
    });

    this.When('I click Find holidays', function () {
      this.page.clickFind();
    });

};

module.exports = bookSteps ;

