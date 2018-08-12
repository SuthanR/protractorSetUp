protractorImageComparison = require('protractor-image-comparison');

var ImageComSteps = function() {

  var ImagePage = require("../page_objects/image_page.js");

  this.World = function MyWorld() {
    this.page = new ImagePage();
  };


  this.Given('I am on the globalsqa page', function () {
    this.page.get();
 
  });


  this.Given('I enter the First name to filter', function () {
    this.page.filter();
  
  });

  this.Then('The comparison should match the page', function () {
    this.page.screenMatch();

});

this.Given('I enter the last name to filter', function () {
  this.page.filt();

});

this.Then('The comparison match the page', function (callback) {
  this.page.scMatch();

});

};

module.exports = ImageComSteps ;

