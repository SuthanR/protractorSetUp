exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  ignoreUncaughtExceptions: true,
  seleniumArgs: ['-browserTimeout=60'],

  multiCapabilities: [
    {
       browserName   : 'chrome',
       specs: [
    
        'cucumber/features/addition.feature',
          'cucumber/features/division.feature',        
       ],
    },
    {
       browserName   : 'chrome',
       specs: [
        'cucumber/features/multiply.feature',
       
       ],
      },
    ],

maxSessions: 2,
allScriptsTimeout: 150000,
getPageTimeout: 3000,
defaultTimeoutInterval: 250000,


  cucumberOpts: {
    require: 'cucumber/step_definitions/calculator_steps.js',
    format: 'pretty',
    strict: true,
  }
    }