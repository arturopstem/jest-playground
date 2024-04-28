# Jest JavaScript Template

## Basic Jest - JS - Node template

- Install eslint, prettier and plugins :

  ```console
  npm i -D eslint@8 prettier eslint-config-prettier @trivago/prettier-plugin-sort-imports eslint-plugin-jest
  ```

- Run ESLint config tool:

  ```console
  npm init @eslint/config
  ```

- Modify the content of `.eslint.json`:

  ```diff
           "es2021": true,
           "node": true
       },
  -    "extends": "airbnb-base",
  -    "overrides": [],
  +    "extends": [
  +        "airbnb-base",
  +        "prettier"
  +    ],
  +    "overrides": [
  +        {
  +            "files": [
  +                "src/**/*.test.js"
  +            ],
  +            "env": {
  +                "es2021": true,
  +                "node": true,
  +                "jest/globals": true
  +            },
  +            "plugins": [
  +                "jest"
  +            ],
  +            "extends": [
  +                "plugin:jest/recommended"
  +            ]
  +        }
  +    ],
       "parserOptions": {
           "ecmaVersion": "latest",
           "sourceType": "module"
       },
  -    "rules": {}
  +    "rules": {
  +        "no-console": "off"
  +    }
   }
  ```

- Create file `.prettierrc.json` with the following content:

  ```json
  {
    "singleQuote": true,
    "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true,
    "plugins": ["@trivago/prettier-plugin-sort-imports"]
  }
  ```

- Install @types/jest for Jest type definitions and enhanced VSCode autocompletion/intellisense

  ```console
  npm i -D @types/jest
  ```

- Open _Preferences: Open Workspace Settings (JSON)_ and enable automatic ESLint fixes and code formatting on save, with the following config in `settings.json`:

  ```json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
    "editor.formatOnSave": true
  }
  ```

- Install Jest and Babel dependencies:

  ```console
  npm i -D jest babel-jest @babel/core @babel/preset-env
  ```

- Create `babel.config.js` and add the following content:

  ```js
  module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  };
  ```

- In `package.json` update the test script and add watch script:

  ```diff
    "version": "1.0.0",
    "description": "## JavaScript Course: Testing JavaScript",
    "scripts": {
  -    "test": "echo \"Error: no test specified\" && exit 1"
  +    "test": "jest --verbose",
  +    "watch": "jest --verbose --watch"
    },
    "keywords": [],
    "author": "",
  ```
