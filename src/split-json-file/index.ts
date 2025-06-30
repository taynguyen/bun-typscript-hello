import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join, parse } from 'path';

/**
 * Splits a JSON file containing JSON objects (one per line) into multiple smaller files
 * @param inputFilePath - Path to the input JSON file
 * @param maxLinesPerFile - Maximum number of lines/objects per output file
 * @param outputDir - Directory where the output files will be written
 * @returns An array of paths to the created output files
 */
export async function splitJsonFile(
  inputFilePath: string,
  maxLinesPerFile: number,
  outputDir: string
): Promise<string[]> {
  // Validate inputs
  if (!existsSync(inputFilePath)) {
    throw new Error(`Input file does not exist: ${inputFilePath}`);
  }

  if (maxLinesPerFile <= 0) {
    throw new Error('Maximum lines per file must be greater than 0');
  }

  // Create output directory if it doesn't exist
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // Read the input file
  const fileContent = readFileSync(inputFilePath, 'utf-8');
  const lines = fileContent.split('\n').filter(line => line.trim() !== '');

  // Get the base name of the input file to use in output file names
  const { name } = parse(inputFilePath);
  
  const outputFiles: string[] = [];
  
  // Split the lines into chunks and write to separate files
  for (let i = 0; i < lines.length; i += maxLinesPerFile) {
    const chunk = lines.slice(i, i + maxLinesPerFile);
    const fileIndex = Math.floor(i / maxLinesPerFile) + 1;
    const outputFilePath = join(outputDir, `${name}_${fileIndex}.json`);
    
    // Write the chunk to a new file
    writeFileSync(outputFilePath, chunk.join('\n'), 'utf-8');
    outputFiles.push(outputFilePath);
  }

  return outputFiles;
}
