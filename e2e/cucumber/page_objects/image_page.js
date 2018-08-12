'use strict'
var chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
chai.use(require('chai-as-promised'));
protractorImageComparison = require('protractor-image-comparison');

var imagePage = function() {
    
  
  browser.protractorImageComparison = new protractorImageComparison({
    baselineFolder: 'imagecomparision/baselinescreen',
    screenshotPath: 'imagecomparision/newscreen'
});
    
      this.get = function() {
        return new Promise(resolve => {
        browser.get('http://www.globalsqa.com/angularJs-protractor/WebTable/')
        .then(resolve);
      });
      }
     

      this.filter = function() {
        return new Promise(resolve => {
          element(by.css('input[st-search="firstName"]')).sendKeys('Pol')
        .then(resolve);
      });

    }

  this.filt = function() {
    return new Promise(resolve => {
      element(by.css('input[st-search="firstName"]')).sendKeys('Pol')
    .then(resolve);
  });

}

this.screenMatch = function() {
  return new Promise(resolve => {
    browser.protractorImageComparison.checkScreen('imageA')
  .then(resolve);
});
} 

this.scMatch = function() {
  return new Promise(resolve => {
    browser.protractorImageComparison.checkScreen('imageB')
  .then(resolve);
});
} 

    };
    module.exports = imagePage;