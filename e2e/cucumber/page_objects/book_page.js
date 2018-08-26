'use strict'
const fs = require('fs');
const wait = require('./wait.js');

var bookPage = function () {

  this.login = function () {
    return new Promise(resolve => {
      browser.get('https://www.virginholidays.co.uk/').then(resolve);
    });
  };

  this.acceptCookie = function () {
    return new Promise(resolve => {
      element(by.css('.close')).click().then(resolve);
    });
  };

  this.flyDrive = function () {
    return new Promise(resolve => {
      element(by.linkText('Flydrive')).click().then(resolve);
    });
  }

  this.arrival = function (where) {
    return new Promise(resolve => {
      element(by.cssContainingText('option', where)).click().then(resolve);
    });

  };


  this.selectDepart = function (from) {
    return new Promise(resolve => {
      element(by.css('select.form-control.qa_depFrom')).sendKeys(from).then(resolve);
    });

  };

  this.selectDate = function (date) {
    return new Promise(resolve => {
      element.all(by.id('checkin-date')).sendKeys(date).then(resolve);
    });

  };

  this.selectNight = function (nights) {
    return new Promise(resolve => {
      element(by.model('selectedDuration')).sendKeys(nights).then(resolve);
    });
  };


  this.selectAdult = function (count) {
    return new Promise(resolve => {
      element(by.css('select[ng-change="passengerChange(room);checkNinePlus()"]')).sendKeys(count).then(resolve);
    });

  };

  this.clickSearch = function (search) {
    return new Promise(resolve => {
      element(by.partialButtonText(search)).click().then(resolve);
    });
  }


  this.multiDest = function () {
    return new Promise(resolve => {
      element(by.css('.qa_multidestination_button')).click().then(resolve);

    });

  };



};

module.exports = bookPage;