import {mkdir, writeFile, appendFile} from 'fs';

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createTsxFile = _name => {
  return `
  import create from 'zustand'
  import { T${_name} } from './${_name}.type';
  
  export const ${_name} = create<T${_name}>((set) => ({
    bears: 0,
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 })
  }))
  `;
};

const createTypeFile = _name => {
  return `
  export type T${_name} = {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
  }
  `;
};

const createAppendLine = _name => {
  return `export { ${_name} as use${_name}} from './${_name}Store/${_name}';`;
};

const createFiles = (_name, _tsxFile, _typeFile, _appendLine) => {
  mkdir(`src/stores/${_name}Store`, {recursive: true}, err => {
    if (err) throw err;
    writeFile(`src/stores/${_name}Store/${_name}.tsx`, _tsxFile, _err => {
      if (_err) throw _err;
      console.log(`${_name}Store.tsx file create under /stores/${_name}/`);
    });
    writeFile(`src/stores/${_name}Store/${_name}.type.tsx`, _typeFile, _err => {
      if (_err) throw _err;
      console.log(`${_name}Store.type.tsx file create under /stores/${_name}/`);
    });
    appendFile('src/stores/index.tsx', _appendLine, _err => {
      if (_err) throw _err;
      console.log(`${_name}Store is appended to /stores/index.tsx`);
    });
  });
};

export const createStore = name => {
  const _name = capitalizeFirstLetter(name);
  const tsxFile = createTsxFile(_name);
  const typeFile = createTypeFile(_name);
  const appendLine = createAppendLine(_name);
  createFiles(_name, tsxFile, typeFile, appendLine);
};
