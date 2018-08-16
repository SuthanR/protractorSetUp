exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  ignoreUncaughtExceptions: true,

    specs: ['cucumber/features/image.feature',],

       onPrepare: function() {
    const protractorImageComparison = require('protractor-image-comparison');
    browser. protractorImageComparison = new protractorImageComparison(
        {
          baselineFolder: 'imagecomparision/baselinescreen',
          screenshotPath: 'imagecomparision/newscreen'
        }
    ); 
},
   
allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    setDefaultTimeout: 60000,

  cucumberOpts: {
    require: 'cucumber/step_definitions/image_steps.js',
  }
}