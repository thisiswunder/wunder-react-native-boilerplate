import prompt from 'prompt';
import {createComponent} from './createComponent.js';
import {createPage} from './createPage.js';
import {createStore} from './createStore.js';

function onErr(err) {
  console.log(err);
  return 1;
}
console.log(`
Please type what you want to create for type:
  component - Creates a component
  page - Creates a page
  store - Creates a store
Then please type name for it.
`);
const properties = [
  {
    name: 'type',
    validator: /^(component|page|store)$/,
    warning: 'Type must be "component", "page" or "store"',
  },
  {
    name: 'name',
  },
];

prompt.start();

prompt.get(properties, (err, result) => {
  if (err) {
    return onErr(err);
  }
  switch (result.type) {
    case 'component':
      createComponent(result.name);
      break;
    case 'page':
      createPage(result.name);
      break;
    case 'store':
      createStore(result.name);
      break;
    default:
      break;
  }
});
