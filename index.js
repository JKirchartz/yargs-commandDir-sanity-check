#! /usr/bin/env node
/*
 * index.js
 * Copyleft (ↄ) 2019 jkirchartz <jkirchartz@naou23380>
 *
 * Distributed under terms of the NPL (Necessary Public License) license.
 */

var yargs = require('yargs');
yargs.version()
  .usage('Usage: $0 [one|two|three|completion]')
  .commandDir('cmds', { exclude: /util\.js/ })
  .completion('completion')
  .epilog('For more information visit https://jkirchartz.com/pos2tracery')
  .demandCommand()
  .wrap(100)
  .help('h')
  .alias('h', 'help')
  .argv;
