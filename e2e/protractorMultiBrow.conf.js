exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  ignoreUncaughtExceptions: true,

  multiCapabilities: [
    {
    browserName: 'chrome',
    
//     metadata: {
//         browser: {
//             name: 'chrome',
//             version: '63'
//         },
//         device: 'Dell',
//         platform: {
//             name: 'windows',
//             version: '10.12.6'
//         }
//     }
 },

{
  browserName: 'firefox',
 
  
  metadata: {
      browser: {
        name: 'firefox',
       
      },
      device: 'Dell',
      platform: {
        name: 'windows',
     
      }
  }
},

// {
    // browserName: 'internet explorer',
   
    
    // metadata: {
    //     browser: {
    //       name: 'internet explorer',
    //       version: '10'
    //     },
    //     device: 'Dell',
    //     platform: {
    //       name: 'windows',
    //       version: '10'
    //     }
    // }
 //  },

  ],

  specs: ['cucumber/features/calculator.feature'],

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options:{
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
    }
  }],
  
  allScriptsTimeout: 100000,
  getPageTimeout: 20000,
  defaultTimeoutInterval: 30000,

  cucumberOpts: {
    require: 'cucumber/step_definitions/calculator_steps.js',
    format: 'json:.dashboard/results.json',
  //  format: 'pretty'
  }
}


