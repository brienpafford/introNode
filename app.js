#!/usr/bin/env node
var argv = require('yargs').argv;
var prompt = require('prompt');
var help = require('./app/help');

var zip = require('./app/zipFile');
var csv2json = require('./app/csv2json');
var hello = require('./app/hello');

if (argv.help) {
    help();
  };

if (argv.filename) {
  zip(argv.file)
};

if (argv.csv) {
  csv2json(argv.file)
};

prompt.override = argv;
prompt.message = prompt.delimiter = '';
prompt.start();

  prompt.get(['name'], function (err, result) {
    hello(result.name);
});
