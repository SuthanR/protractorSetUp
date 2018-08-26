
'use strict'
var chai = require('chai').use(require('chai-as-promised'));
var bookPage = require("../page_objects/book_page.js");
var expect = chai.expect;
browser.ignoreSynchronization = true;

var bookSteps = function () {
  this.setDefaultTimeout(60 * 1000);
  this.World = function MyWorld() {
    this.page = new bookPage();
    };
  this.Given('user on the virgin holiday Inn', function () {
    this.page.login();
  });

  this.Given('user accept the cookies', function () {
    this.page.acceptCookie();
  });

  this.When('user select the Fly drive', function () {
    this.page.flyDrive();
  });

  this.When(/^user select the (.*) as destination$/, function (where) {
    this.page.arrival(where);
  });

  this.When(/^user select the deparature (.*) on (.*) for how many days (.*) forty (.*) adults$/, function (from, when, nights, count) {
    this.page.selectDepart(from);
    this.page.selectDate(when);
    this.page.selectNight(nights);
    this.page.selectAdult(count);

  });

  this.When(/^user click (.*)$/, function (search) {
    this.page.clickSearch(search);
  });

  this.When('user select the multi-destination', function () {
    this.page.multiDest();
  });


};

module.exports = bookSteps;