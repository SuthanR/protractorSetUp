var protractorFlake = require('protractor-flake');
// skip first two passed args (node and self)
var protractorArgs = process.argv.splice(2);

protractorFlake({
    protractorPath: 'node_modules/.bin/protractor',
    maxAttempts: 2,
    parser: 'standard',
    nodeBin: 'node',
    protractorArgs: protractorArgs
}, function(status, output) {
    process.exit(status);
})