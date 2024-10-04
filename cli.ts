import { Command } from 'commander';
import * as inquirer from 'inquirer';
import * as fs from 'fs';

// Initialize Commander
const program = new Command();

program
  .version('1.0.0')
  .description('CLI to generate boilerplate code for coding challenges')
  .option('-n, --name <name>', 'Function name')
  .option('-l, --language <language>', 'Programming language (javascript, typescript)')
  .option('-i, --inputs <inputs>', 'Comma-separated list of function inputs');

program.parse(process.argv);

const options = program.opts();

// Validate inputs
if (!options.name || !options.language || !options.inputs) {
  console.log('Please provide the function name, language, and inputs.');
  process.exit(1);
}

// Generate boilerplate code
const generateBoilerplate = (name: string, language: string, inputs: string[]): string => {
  let boilerplate = '';

  if (language === 'javascript' || language === 'typescript') {
    boilerplate = `
      function ${name}(${inputs.join(', ')}) {
        // TODO: Implement function logic
      }

      module.exports = ${name};
    `;
  } else {
    console.log(`Language ${language} is not supported.`);
    process.exit(1);
  }

  return boilerplate;
};

// Get function inputs as an array
const inputs = options.inputs.split(',');

// Generate the boilerplate code
const boilerplateCode = generateBoilerplate(options.name, options.language, inputs);

// Save to a file (optional)
fs.writeFileSync(`${options.name}.${options.language === 'typescript' ? 'ts' : 'js'}`, boilerplateCode);

console.log(`Boilerplate for function '${options.name}' generated successfully!`);