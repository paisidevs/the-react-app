/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const paths = require('../../paths');

const components = fs.readdirSync(paths.appComponents);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
