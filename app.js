#!/usr/bin/env node
var argv = require('yargs').argv;
var prompt = require('prompt')

  if (argv.help) {
    printHelpMessage();
    process.exit(1);
  }


  prompt.override = argv;
  prompt.message = prompt.delimiter = '';
  prompt.start();

  prompt.get(['name'], function (err, result) {
    printHelloMessage(result.name);
});


function printHelp() {
  console.log('intronode');
    console.log('v1.0.0');
    console.log('');
    console.log('--help           print this message!');
    console.log('--name={name}    input name');
    console.log('');
    console.log('1');

    process.exit(1);
}

function printHelloMessage(name) {
  console.log('Hello ' + name);
  process.stdout.write('Hello ' + name + ' Again!\n');
}

// console.log(argv)



