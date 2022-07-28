import {mkdir, writeFile, appendFile} from 'fs';

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createTsxFile = _name => {
  return `
  import { View, Text } from 'react-native-ui-lib';
  import { useEffect } from 'react';
  import { styles } from './${_name}.style';
  import { PageContainerComponent } from '@components';
  import { useNavigation } from '@react-navigation/native';
  
  export const ${_name} = () => {
    const navigation = useNavigation();
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        console.log("${_name} Loaded")
      });
      return unsubscribe;
    }, [navigation]);
  
    return (
        <PageContainerComponent>
          <View>
            <Text style={styles}>${_name}</Text>
          </View>
        </PageContainerComponent>
      );
  } 
  `;
};

const createStyleFile = _name => {
  return `
  import { StyleSheet } from 'react-native';
  
  export const styles = StyleSheet.create({});
  `;
};

const createAppendLine = _name => {
  return `export { ${_name} as ${_name}Page } from './${_name}Page/${_name}';`;
};

const createFiles = (_name, _tsxFile, _styleFile, _appendLine) => {
  mkdir(`src/pages/${_name}Page`, {recursive: true}, err => {
    if (err) throw err;
    writeFile(`src/pages/${_name}Page/${_name}.tsx`, _tsxFile, _err => {
      if (_err) throw _err;
      console.log(`${_name}Page.tsx file create under /pages/${_name}/`);
    });

    writeFile(`src/pages/${_name}Page/${_name}.style.ts`, _styleFile, _err => {
      if (_err) throw _err;
      console.log(`${_name}Page.style.tsx file create under /pages/${_name}/`);
    });
    appendFile('src/pages/index.tsx', _appendLine, _err => {
      if (_err) throw _err;
      console.log(`${_name}Page is appended to /pages/index.tsx`);
    });
  });
};

export const createPage = name => {
  const _name = capitalizeFirstLetter(name);
  const tsxFile = createTsxFile(_name);
  const styleFile = createStyleFile(_name);
  const appendLine = createAppendLine(_name);
  createFiles(_name, tsxFile, styleFile, appendLine);
};
