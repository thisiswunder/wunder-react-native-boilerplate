const yargs = require('yargs');
const fs = require('fs');

const tsxFile = `
import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { useEffect } from 'react';
import { styles } from './${yargs.argv.name}.style';

export default function ${yargs.argv.name}() {

  useEffect(() => {
    console.log("${yargs.argv.name} Component Loaded")
  }, []);

  return (
    <View>
      <Text>${yargs.argv.name}</Text>
    </View>
  );
} 
`;

const styleFile = `
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({});
`;

fs.mkdir(`src/components/${yargs.argv.name}`, {recursive: true}, err => {
  if (err) throw err;
  fs.writeFile(
    `src/components/${yargs.argv.name}/${yargs.argv.name}.tsx`,
    tsxFile,
    err => {
      if (err) throw err;
    },
  );

  fs.writeFile(
    `src/components/${yargs.argv.name}/${yargs.argv.name}.style.tsx`,
    styleFile,
    err => {
      if (err) throw err;
    },
  );
});
