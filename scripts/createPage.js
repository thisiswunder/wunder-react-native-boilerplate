const yargs = require('yargs');
const fs = require('fs');

const tsxFile = `
import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { useEffect } from 'react';
import { styles } from './${yargs.argv.name}.style';
import { useNavigation } from '@react-navigation/native';

export default function ${yargs.argv.name}() {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log("${yargs.argv.name} Loaded")
    });
    return unsubscribe;
  }, [navigation]);

  return (
        <View>
          <Text style={styles}>${yargs.argv.name}</Text>
        </View>
    );
} 
`;

const styleFile = `
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({});
`;

fs.mkdir(`src/screens/${yargs.argv.name}`, {recursive: true}, err => {
  if (err) throw err;
  fs.writeFile(
    `src/screens/${yargs.argv.name}/${yargs.argv.name}.tsx`,
    tsxFile,
    err => {
      if (err) throw err;
    },
  );

  fs.writeFile(
    `src/screens/${yargs.argv.name}/${yargs.argv.name}.style.ts`,
    styleFile,
    err => {
      if (err) throw err;
    },
  );
});
