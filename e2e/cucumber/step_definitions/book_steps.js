
'use strict'
var chai = require('chai').use(require('chai-as-promised'));
var bookPage = require("../page_objects/book_page.js");
var expect = chai.expect;
browser.ignoreSynchronization = true;
browser.driver.manage().window().maximize();

var bookSteps = function () {
  this.setDefaultTimeout(60 * 1000);
  this.World = function MyWorld() {
    this.page = new bookPage();
    };
  this.Given('user on the virgin holiday Inn', function (callback) {
    this.page.login();
    callback();
  });

  this.Given('user accept the cookies', function (callback) {
    this.page.acceptCookie();
    callback();
  });

  this.When('user select the Fly drive', function (callback) {
    this.page.flyDrive();
    callback();
   
  });

  this.When(/^user select the (.*) as destination$/, function (where, callback) {
    this.page.arrival(where);
    callback();
  
  });

  this.When(/^user select the deparature (.*) on (.*) for how many days (.*) for (.*) adults$/, function (from, when, nights, count, callback) {
    this.page.selectDepart(from);
    this.page.selectDate(when);
    this.page.selectNight(nights);
    this.page.selectAdult(count);
    callback();
  });

  this.When(/^user clicks (.*)$/, function (search, callback) {
    this.page.clickSearch(search);
    callback();
 
  });

  this.When('user select the multi-destination', function (callback) {
    this.page.multiDest();
    callback();
  });


};

module.exports = bookSteps;