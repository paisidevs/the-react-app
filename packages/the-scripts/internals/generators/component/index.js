/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const path = require('path');
const paths = require('../../paths');
const componentExists = require('../utilities/componentExists');

module.exports = {
  description: 'Add a Functional component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: path.join(paths.appComponents, '{{properCase name}}/index.tsx'),
        templateFile: './component/function.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(
          paths.appComponents,
          '{{properCase name}}/{{properCase name}}.spec.tsx',
        ),
        templateFile: './component/spec.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
