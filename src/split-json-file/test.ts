import { splitJsonFile } from './index';
import { join } from 'path';

async function runTest() {
  try {
    // Define test parameters
    const inputFilePath = join(__dirname, 'sample-data.json');
    const maxLinesPerFile = 3; // Split into files with 3 records each
    const outputDir = join(__dirname, 'output');

    console.log('Starting to split JSON file...');
    console.log(`Input file: ${inputFilePath}`);
    console.log(`Max lines per file: ${maxLinesPerFile}`);
    console.log(`Output directory: ${outputDir}`);

    // Call the splitJsonFile function
    const outputFiles = await splitJsonFile(
      inputFilePath,
      maxLinesPerFile,
      outputDir
    );

    console.log('\nSplit completed successfully!');
    console.log(`Created ${outputFiles.length} output files:`);
    outputFiles.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });
  } catch (error) {
    console.error('Error splitting JSON file:', error);
  }
}

// Run the test
runTest();
