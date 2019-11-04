/*
 * one.js
 * Copyleft (ↄ) 2019 jkirchartz <jkirchartz@naou23380>
 *
 * Distributed under terms of the NPL (Necessary Public License) license.
 */

exports.command = "one <input> [output] [options]";

exports.describe = "testing first option";

exports.builder = (yargs) => {
  return yargs.usage("Usage: one <input> [output] [options]")
    .positional("input", {
      demands: "input/source file is required",
      nargs: 1
    }).positional("output", {
      nargs: 1
    }).options({
      v: {
        alias: "verbose",
        type: "count"
      },
      x: {
        describe: "something"
      },
      y: {
        describe: "something"
      }
    });
};

exports.handler = (args) => { console.log(args) };
