const config = require('./../config');
const { LibraryManager } = require('gorila-core');
const Lib = require('./lib');
module.exports = new LibraryManager(config, [Lib]);