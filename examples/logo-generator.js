#!/usr/bin/env node
const program = require('commander');
const SVG = require('svg.js');

program
  .version('1.0.0')
  .description('Generate an SVG logo')
  .option('-o, --output <file>', 'Output SVG file (default: logo.svg)')
  .parse(process.argv);

const outputFileName = program.output || 'logo.svg';

const draw = SVG(outputFileName).size(200, 200);

const createTriangle = (color) => {
    const triangle = draw.polygon('150, 18 244, 182 56, 182').fill(color);
    return triangle;
};

const blueTriangle = createTriangle('blue');

draw.svg().toFile(outputFileName, (error) => {
  if (error) {
    console.error('Error saving the SVG file:', error);
  } else {
    console.log(`Logo saved as ${outputFileName}`);
  }
});
