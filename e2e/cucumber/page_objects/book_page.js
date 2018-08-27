'use strict'
const fs = require('fs');
const wait = require('./wait.js');

var bookPage = function () {

  this.login = function () {
  browser.get('https://www.virginholidays.co.uk/');
 
  };

  this.acceptCookie = function () {
   element(by.css('.close')).click();

  };

  this.flyDrive = function () {
     element(by.linkText('Flydrive')).click();

  }

  this.arrival = function (where) {
   element(by.cssContainingText('option', where));
  };


  this.selectDepart = function (from) {
    element(by.css('select.form-control.qa_depFrom')).sendKeys(from);
 

  };

  this.selectDate = function (date) {
   element.all(by.id('checkin-date')).sendKeys(date);
  };

  this.selectNight = function (nights) {
    element(by.model('selectedDuration')).sendKeys(nights);

  };


  this.selectAdult = function (count) {
     element(by.css('select[ng-change="passengerChange(room);checkNinePlus()"]')).sendKeys(count);
 

  };

  this.clickSearch = function (search) {
   element(by.partialButtonText(search)).click();

  }


  this.multiDest = function () {
    element(by.css('.qa_multidestination_button')).click();

  };

};

module.exports = bookPage;