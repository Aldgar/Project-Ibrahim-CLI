"use strict";
/*
class Circle {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    
    scale(factor: number) {
        this.radius *= factor;
    }
    
    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
       
}*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
class Circle {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // Method to scale the circle
    scale(factor: number): void {
        this.radius *= factor;
    }

    // Optional: Method to get the area (just to see the effect of scaling)
    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Example usage:
const myCircle = new Circle(5);
console.log("Original radius:", myCircle.radius); // Output: 5
console.log("Original area:", myCircle.getArea()); // Output: area of radius 5

myCircle.scale(2); // Scale by a factor of 2
console.log("Scaled radius:", myCircle.radius); // Output: 10
console.log("Scaled area:", myCircle.getArea()); // Output: area of radius 10

*/
const commander_1 = require("commander");
const fs = __importStar(require("fs"));
// Initialize Commander
const program = new commander_1.Command();
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
const generateBoilerplate = (name, language, inputs) => {
    let boilerplate = '';
    if (language === 'javascript' || language === 'typescript') {
        boilerplate = `
      function ${name}(${inputs.join(', ')}) {
   // TODO: Implement function logic
      }

      module.exports = ${name};
    `;
    }
    else {
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
