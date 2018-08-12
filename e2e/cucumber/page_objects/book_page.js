'use strict'
const fs = require('fs');

var bookPage = function() {

  this.get = function() {
    return new Promise(resolve => {
    browser.get('https://www.virginholidays.co.uk/')
    .then(resolve);
  });
  };

  this.clickPack = function() {
    return new Promise(resolve => {
    element(by.buttonText('Flydrive')).click()
    .then(resolve);
  });
  }

  this.clickHoli = function() {
    return new Promise(resolve => {
    element(by.buttonText('Holiday')).click()
    .then(resolve);
  });
  }

  this.selectDepart = function(where) {
    return new Promise(resolve => {
    element.all(by.model('selectedItem')).sendKeys(where)
    .then(resolve);
  });

  };

  this.selectArrival = function(to) {
    return new Promise(resolve => {
    element(by.css('select.form-control.qa_depFrom')).sendKeys(to)
    .then(resolve);
  });
    
  };
 
  this.selectDate = function(date) {
    return new Promise(resolve => {
    element.all( by.id('checkin-date')).sendKeys(date)
    .then(resolve);
  });

  };

  this.selectNight = function(night) {
    return new Promise(resolve => {
    element.all(by.model('selectedDuration')).sendKeys(night)
    .then(resolve);
  });

  };

  this.selectAdult = function(count) {
    return new Promise(resolve => {
    element(by.model('room.adults')).sendKeys(count)
    .then(resolve);
  });

  };

  this.clickSearch = function() {
    return new Promise(resolve => {
    element(by.buttonText('Find Flydrive')).click()
    .then(resolve);
  });
  } 

  this.clickFind = function() {
    return new Promise(resolve => {
    element(by.buttonText('Find Holidays')).click()
    .then(resolve);
  });
  } 

};

module.exports = bookPage;