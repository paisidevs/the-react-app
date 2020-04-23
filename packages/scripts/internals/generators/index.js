/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const paths = require('../paths');
const componentGenerator = require('./component/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);

  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(path.join(paths.appContainers, comp), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });

  plop.addHelper('curly', (_object, open) => (open ? '{' : '}'));
};
