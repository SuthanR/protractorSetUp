exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  ignoreUncaughtExceptions: true,

  multiCapabilities: [
    {
//     browserName: 'chrome',
    
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
// },

// {
//   browserName: 'firefox',
 
  
//   metadata: {
//       browser: {
//         name: 'firefox',
//         version: '10'
//       },
//       device: 'Dell',
//       platform: {
//         name: 'windows',
//         version: '10'
//       }
//   }
// },

// {
    browserName: 'internet explorer',
   
    
    metadata: {
        browser: {
          name: 'internet explorer',
          version: '10'
        },
        device: 'Dell',
        platform: {
          name: 'windows',
          version: '10'
        }
    }
   },

  ],

  specs: ['cucumber/features/addition.feature'],

  allScriptsTimeout: 10000,
plugins: [{
  package: 'protractor-multiple-cucumber-html-reporter-plugin',
  options:{
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
  }
}],

  cucumberOpts: {
    require: 'cucumber/step_definitions/calculator_steps.js',
    format: 'json:.dashboard/results.json',
  //  format: 'pretty'
  }
}


