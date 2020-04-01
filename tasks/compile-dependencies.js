#!/usr/bin/env node
/**
 * Copyright (c) 2019-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fse = require('fs-extra');
const os = require('os');
const path = require('path');

const temp = path.join(os.tmpdir(), 'tra-compile-dependencies');

try {
  // Ensures that we start from a clean state
  fse.removeSync(temp);
  fse.mkdirSync(temp);

  // Extract the devDependencies from template.json
  const dependencies = require('../packages/the-template/template.json').package
    .devDependencies;
  const descriptors = Object.keys(dependencies).map(
    (dep) => `${dep}@${dependencies[dep]}`,
  );

  const deps = `module.exports = ${JSON.stringify(descriptors, null, 2)};`;

  fse.writeFileSync(path.join(temp, 'dependencies.js'), deps);

  // Store the generated dependencies in tra-template
  fse.copySync(
    path.join(temp, 'dependencies.js'),
    path.join(
      __dirname,
      '..',
      'packages',
      'the-template',
      'template',
      'devDependencies.js',
    ),
  );
} finally {
  fse.removeSync(temp);
}
