const RAM = require('./ram');
const CPU = require('./cpu');
const fs = require('fs');
const args = process.argv;

/**
 * Load an LS8 program into memory
 *
 * TODO: load this from a file on disk instead of having it hardcoded
 */
function loadMemory() {
    // Hardcoded program to print the number 8 on the console
   
        // const regexp = /[0-9]{8}/gi;
        // var regexp = /^\d+$/;
        var regexp = /[0-9]{8}/g;
        const data = fs.readFileSync(`${args[2]}`, "utf-8").match(regexp); // result an array of only numerical values 

        //Load the program into the CPU's memory a byte at a time
        for (let i = 0; i < data.length; i++) {
            cpu.poke(i, parseInt(data[i], 2));// call poke with index, data[i] (in binary)
        }
}

/**
 * Main
 */

let ram = new RAM(256);
let cpu = new CPU(ram);

// TODO: get name of ls8 file to load from command line

loadMemory(cpu);

cpu.startClock();