import {mkdir, writeFile, appendFile} from 'fs';

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createTsxFile = _name => {
  return `
      import { useEffect }  from 'react';
      import { View, Text } from 'react-native-ui-lib';
      import { P${_name}} from './${_name}.props';
      import { styles } from './${_name}.style';
      
      export const ${_name} = ({ label }: P${_name}) => {
      
        useEffect(() => {
          console.log("${_name} Component Loaded")
        }, []);
      
        return (
          <View>
            <Text>{label}</Text>
          </View>
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

const createPropFile = _name => {
  return `
    export interface P${_name} {
      label: string;
    }`;
};

const createAppendLine = _name => {
  return `export { ${_name} as ${_name}Component } from './${_name}Component/${_name}';`;
};

const createFiles = (_name, _tsxFile, _styleFile, _propFile, _appendLine) => {
  mkdir(`src/components/${_name}Component`, {recursive: true}, err => {
    if (err) throw err;
    writeFile(
      `src/components/${_name}Component/${_name}.tsx`,
      _tsxFile,
      _err => {
        if (_err) throw _err;
        console.log(
          `${_name}Component.tsx file create under /components/${_name}/`,
        );
      },
    );

    writeFile(
      `src/components/${_name}Component/${_name}.style.tsx`,
      _styleFile,
      _err => {
        if (_err) throw _err;
        console.log(
          `${_name}Component.style.tsx file create under /components/${_name}/`,
        );
      },
    );

    writeFile(
      `src/components/${_name}Component/${_name}.props.tsx`,
      _propFile,
      _err => {
        if (_err) throw _err;
        console.log(
          `${_name}Component.prop.tsx file create under /components/${_name}/`,
        );
      },
    );

    appendFile('src/components/index.tsx', _appendLine, _err => {
      if (_err) throw _err;
      console.log(`${_name}Component is appended to /components/index.tsx`);
    });
  });
};

export const createComponent = name => {
  const _name = capitalizeFirstLetter(name);
  const tsxFile = createTsxFile(_name);
  const styleFile = createStyleFile(_name);
  const propFile = createPropFile(_name);
  const appendLine = createAppendLine(_name);
  createFiles(_name, tsxFile, styleFile, propFile, appendLine);
};
