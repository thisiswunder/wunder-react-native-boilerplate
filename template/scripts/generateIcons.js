const fs = require('fs');
const path = require('path');
const glob = require('glob');
const svgr = require('@svgr/core').default;

const ICONS_SOURCE_DIR = './src/assets/icons/source';
const COMPONENTS_DIR = './src/assets/icons';

// Template to generate named exports instaed of default ones
const iconComponentTemplate = (
  { template },
  opts,
  { imports, componentName, jsx },
) =>
  template.smart({ plugins: ['typescript'] }).ast`
        ${imports}
        ${'\n'}
        export const ${componentName} = (props: React.SVGProps<SVGSVGElement>): JSX.Element => ${jsx};
    `;

const icons = glob.sync(`${ICONS_SOURCE_DIR}/**.svg`);
fs.writeFileSync('src/assets/index.tsx', '');
for (const icon of icons) {
  const svg = fs.readFileSync(icon, 'utf8');
  const componentName = path.parse(icon).name;
  const componentCode = svgr.sync(
    svg,
    {
      template: iconComponentTemplate,
      // 1. Clean SVG files using SVGO
      // 2. Generate JSX
      // 3. Format the result using Prettier
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier',
      ],
      // Replace hardcoded colors with `currentColor`
      svgoConfig: {
        plugins: [{ convertColors: { currentColor: true } }],
      },
      // Replace dimentions
      svgProps: { height: 24, width: 24 },
      native: true,
      replaceAttrValues: { '#FFFFFF': '{props.color}' },
      removeDimensions: true,
      dimensions: false,
    },
    { componentName },
  );
  fs.writeFileSync(`${COMPONENTS_DIR}/${componentName}.tsx`, componentCode);
  const importFile = `export { ${componentName} as Icon${componentName} } from './icons/${componentName}';`;

  fs.appendFile('src/assets/index.tsx', importFile, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}
