#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('filepath1', 'first file path')
  .argument('filepath2', 'second file path')
  .action((filepath1, filepath2) => {
    return genDiff(filepath1, filepath2);
  })
  .parse(process.argv);

