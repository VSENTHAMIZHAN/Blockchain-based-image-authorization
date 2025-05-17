
# Blockchain Image Authentication System

A decentralized image verification platform that uses blockchain to store and validate image authenticity. This project is ideal for press images, political events, or official media to combat misinformation and tampering.

- Works locally without real tokens or testnet access  
- Powered by Solidity, Flask, and React

---

## Features

- Upload images with metadata to a smart contract  
- SHA256 hash used as the unique fingerprint of each image  
- Image hash and metadata are stored immutably on a local blockchain  
- Verify any image by comparing its hash to the stored value  
- Prevents re-uploads of the same image (duplicate hash detection)  
- Clean user interface with real-time feedback and hash preview  

---

## Tech Stack

| Layer         | Technology               |
|---------------|--------------------------|
| Frontend      | React, Axios, CSS        |
| Backend       | Flask, Web3.py           |
| Smart Contract| Solidity                 |
| Blockchain    | Local Hardhat Node       |
| Tools         | Metamask (optional), IPFS (future), SHA256 Hashing |

---

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/blockchain-image-auth.git
cd blockchain-image-auth
```

### 2. Start Local Blockchain

```bash
npx hardhat node
```

**Note:** Keep this terminal running. Open a new terminal window for the next step.

### 3. Deploy Smart Contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```



### 4. Backend Setup

Copy the contents of .env.example to backend/.env, or alternatively, select a sender address and its corresponding private key from the accounts provided by the Hardhat terminal.

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python backend.py
```

**Note:** Keep this terminal running. Open a new terminal window for the next step.

### 5. Frontend Setup

```bash
cd frontend
npm install
npm start
```

You can access your website from your browser at http://127.0.0.1:3000

---

## Demo Flow

1. Select an image and enter metadata (e.g., Photographer ID, Location).
2. Click **Upload**. The backend:
   - Computes the SHA256 hash of the image.
   - Sends the hash and metadata to the smart contract.
3. Displays confirmation and transaction hash.
4. Click **Verify** to check if the uploaded image is authentic or tampered.

---

## Project Structure

```
Folder PATH listing for volume Windows
Volume serial number is E26E-0A81
C:.
+---build
ª   +---static
ª       +---css
ª       +---js
+---node_modules
ª   +---.bin
ª   +---.cache
ª   ª   +---babel-loader
ª   ª   +---default-development
ª   +---@adobe
ª   ª   +---css-tools
ª   ª       +---dist
ª   +---@alloc
ª   ª   +---quick-lru
ª   +---@ampproject
ª   ª   +---remapping
ª   ª       +---dist
ª   ª           +---types
ª   +---@babel
ª   ª   +---code-frame
ª   ª   ª   +---lib
ª   ª   +---compat-data
ª   ª   ª   +---data
ª   ª   +---core
ª   ª   ª   +---lib
ª   ª   ª   ª   +---config
ª   ª   ª   ª   ª   +---files
ª   ª   ª   ª   ª   +---helpers
ª   ª   ª   ª   ª   +---validation
ª   ª   ª   ª   +---errors
ª   ª   ª   ª   +---gensync-utils
ª   ª   ª   ª   +---parser
ª   ª   ª   ª   ª   +---util
ª   ª   ª   ª   +---tools
ª   ª   ª   ª   +---transformation
ª   ª   ª   ª   ª   +---file
ª   ª   ª   ª   ª   +---util
ª   ª   ª   ª   +---vendor
ª   ª   ª   +---node_modules
ª   ª   ª   ª   +---.bin
ª   ª   ª   ª   +---semver
ª   ª   ª   ª       +---bin
ª   ª   ª   +---src
ª   ª   ª       +---config
ª   ª   ª           +---files
ª   ª   +---eslint-parser
ª   ª   ª   +---lib
ª   ª   ª   ª   +---convert
ª   ª   ª   ª   +---utils
ª   ª   ª   ª   +---worker
ª   ª   ª   +---node_modules
ª   ª   ª       +---.bin
ª   ª   ª       +---eslint-visitor-keys
ª   ª   ª       ª   +---lib
ª   ª   ª       +---semver
ª   ª   ª           +---bin
ª   ª   +---generator
ª   ª   ª   +---lib
ª   ª   ª       +---generators
ª   ª   ª       +---node
ª   ª   +---helper-annotate-as-pure
ª   ª   ª   +---lib
ª   ª   +---helper-compilation-targets
ª   ª   ª   +---lib
ª   ª   ª   +---node_modules
ª   ª   ª       +---.bin
ª   ª   ª       +---semver
ª   ª   ª           +---bin
ª   ª   +---helper-create-class-features-plugin
ª   ª   ª   +---lib
ª   ª   ª   +---node_modules
ª   ª   ª       +---.bin
ª   ª   ª       +---semver
ª   ª   ª           +---bin
ª   ª   +---helper-create-regexp-features-plugin
ª   ª   ª   +---lib
ª   ª   ª   +---node_modules
ª   ª   ª       +---.bin
ª   ª   ª       +---semver
ª   ª   ª           +---bin
ª   ª   +---helper-define-polyfill-provider
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   ª       +---browser
ª   ª   ª       +---node
ª   ª   ª       +---visitors
ª   ª   +---helper-member-expression-to-functions
ª   ª   ª   +---lib
ª   ª   +---helper-module-imports
ª   ª   ª   +---lib
ª   ª   +---helper-module-transforms
ª   ª   ª   +---lib
ª   ª   +---helper-optimise-call-expression
ª   ª   ª   +---lib
ª   ª   +---helper-plugin-utils
ª   ª   ª   +---lib
ª   ª   +---helper-remap-async-to-generator
ª   ª   ª   +---lib
ª   ª   +---helper-replace-supers
ª   ª   ª   +---lib
ª   ª   +---helper-skip-transparent-expression-wrappers
ª   ª   ª   +---lib
ª   ª   +---helper-string-parser
ª   ª   ª   +---lib
ª   ª   +---helper-validator-identifier
ª   ª   ª   +---lib
ª   ª   +---helper-validator-option
ª   ª   ª   +---lib
ª   ª   +---helper-wrap-function
ª   ª   ª   +---lib
ª   ª   +---helpers
ª   ª   ª   +---lib
ª   ª   ª       +---helpers
ª   ª   +---parser
ª   ª   ª   +---bin
ª   ª   ª   +---lib
ª   ª   ª   +---typings
ª   ª   +---plugin-bugfix-firefox-class-in-computed-class-key
ª   ª   ª   +---lib
ª   ª   +---plugin-bugfix-safari-class-field-initializer-scope
ª   ª   ª   +---lib
ª   ª   +---plugin-bugfix-safari-id-destructuring-collision-in-function-expression
ª   ª   ª   +---lib
ª   ª   +---plugin-bugfix-v8-spread-parameters-in-optional-chaining
ª   ª   ª   +---lib
ª   ª   +---plugin-bugfix-v8-static-class-fields-redefine-readonly
ª   ª   ª   +---lib
ª   ª   +---plugin-proposal-class-properties
ª   ª   ª   +---lib
ª   ª   +---plugin-proposal-decorators
ª   ª   ª   +---lib
ª   ª   +---plugin-proposal-nullish-coalescing-operator
ª   ª   ª   +---lib
ª   ª   +---plugin-proposal-numeric-separator
ª   ª   ª   +---lib
ª   ª   +---plugin-proposal-optional-chaining
ª   ª   ª   +---lib
ª   ª   +---plugin-proposal-private-methods
ª   ª   ª   +---lib
ª   ª   +---plugin-proposal-private-property-in-object
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-async-generators
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-bigint
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-class-properties
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-class-static-block
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-decorators
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-flow
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-import-assertions
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-import-attributes
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-import-meta
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-json-strings
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-jsx
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-logical-assignment-operators
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-nullish-coalescing-operator
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-numeric-separator
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-object-rest-spread
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-optional-catch-binding
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-optional-chaining
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-private-property-in-object
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-top-level-await
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-typescript
ª   ª   ª   +---lib
ª   ª   +---plugin-syntax-unicode-sets-regex
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-arrow-functions
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-async-generator-functions
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-async-to-generator
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-block-scoped-functions
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-block-scoping
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-class-properties
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-class-static-block
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-classes
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-computed-properties
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-destructuring
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-dotall-regex
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-duplicate-keys
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-duplicate-named-capturing-groups-regex
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-dynamic-import
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-exponentiation-operator
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-export-namespace-from
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-flow-strip-types
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-for-of
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-function-name
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-json-strings
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-literals
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-logical-assignment-operators
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-member-expression-literals
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-modules-amd
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-modules-commonjs
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-modules-systemjs
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-modules-umd
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-named-capturing-groups-regex
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-new-target
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-nullish-coalescing-operator
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-numeric-separator
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-object-rest-spread
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-object-super
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-optional-catch-binding
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-optional-chaining
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-parameters
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-private-methods
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-private-property-in-object
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-property-literals
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-react-constant-elements
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-react-display-name
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-react-jsx
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-react-jsx-development
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-react-pure-annotations
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-regenerator
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-regexp-modifiers
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-reserved-words
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-runtime
ª   ª   ª   +---lib
ª   ª   ª   ª   +---babel-7
ª   ª   ª   ª   +---get-runtime-path
ª   ª   ª   +---node_modules
ª   ª   ª   ª   +---.bin
ª   ª   ª   ª   +---semver
ª   ª   ª   ª       +---bin
ª   ª   ª   +---src
ª   ª   ª       +---get-runtime-path
ª   ª   +---plugin-transform-shorthand-properties
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-spread
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-sticky-regex
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-template-literals
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-typeof-symbol
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-typescript
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-unicode-escapes
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-unicode-property-regex
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-unicode-regex
ª   ª   ª   +---lib
ª   ª   +---plugin-transform-unicode-sets-regex
ª   ª   ª   +---lib
ª   ª   +---preset-env
ª   ª   ª   +---data
ª   ª   ª   +---lib
ª   ª   ª   ª   +---polyfills
ª   ª   ª   +---node_modules
ª   ª   ª       +---.bin
ª   ª   ª       +---semver
ª   ª   ª           +---bin
ª   ª   +---preset-modules
ª   ª   ª   +---lib
ª   ª   ª   ª   +---plugins
ª   ª   ª   ª       +---transform-async-arrows-in-class
ª   ª   ª   ª       +---transform-edge-default-parameters
ª   ª   ª   ª       +---transform-edge-function-name
ª   ª   ª   ª       +---transform-jsx-spread
ª   ª   ª   ª       +---transform-safari-block-shadowing
ª   ª   ª   ª       +---transform-safari-for-shadowing
ª   ª   ª   ª       +---transform-tagged-template-caching
ª   ª   ª   +---src
ª   ª   ª       +---plugins
ª   ª   ª           +---transform-async-arrows-in-class
ª   ª   ª           +---transform-edge-default-parameters
ª   ª   ª           +---transform-edge-function-name
ª   ª   ª           +---transform-jsx-spread
ª   ª   ª           +---transform-safari-block-shadowing
ª   ª   ª           +---transform-safari-for-shadowing
ª   ª   ª           +---transform-tagged-template-caching
ª   ª   +---preset-react
ª   ª   ª   +---lib
ª   ª   +---preset-typescript
ª   ª   ª   +---lib
ª   ª   +---runtime
ª   ª   ª   +---helpers
ª   ª   ª   ª   +---esm
ª   ª   ª   +---regenerator
ª   ª   +---template
ª   ª   ª   +---lib
ª   ª   +---traverse
ª   ª   ª   +---lib
ª   ª   ª       +---path
ª   ª   ª       ª   +---inference
ª   ª   ª       ª   +---lib
ª   ª   ª       +---scope
ª   ª   ª           +---lib
ª   ª   +---types
ª   ª       +---lib
ª   ª           +---asserts
ª   ª           ª   +---generated
ª   ª           +---ast-types
ª   ª           ª   +---generated
ª   ª           +---builders
ª   ª           ª   +---flow
ª   ª           ª   +---generated
ª   ª           ª   +---react
ª   ª           ª   +---typescript
ª   ª           +---clone
ª   ª           +---comments
ª   ª           +---constants
ª   ª           ª   +---generated
ª   ª           +---converters
ª   ª           +---definitions
ª   ª           +---modifications
ª   ª           ª   +---flow
ª   ª           ª   +---typescript
ª   ª           +---retrievers
ª   ª           +---traverse
ª   ª           +---utils
ª   ª           ª   +---react
ª   ª           +---validators
ª   ª               +---generated
ª   ª               +---react
ª   +---@bcoe
ª   ª   +---v8-coverage
ª   ª       +---dist
ª   ª       ª   +---lib
ª   ª       ª       +---_src
ª   ª       +---src
ª   ª           +---lib
ª   ª           +---test
ª   +---@csstools
ª   ª   +---normalize.css
ª   ª   +---postcss-cascade-layers
ª   ª   ª   +---dist
ª   ª   +---postcss-color-function
ª   ª   ª   +---dist
ª   ª   ª       +---css-color-4
ª   ª   +---postcss-font-format-keywords
ª   ª   ª   +---dist
ª   ª   +---postcss-hwb-function
ª   ª   ª   +---dist
ª   ª   +---postcss-ic-unit
ª   ª   ª   +---dist
ª   ª   +---postcss-is-pseudo-class
ª   ª   ª   +---dist
ª   ª   ª       +---split-selectors
ª   ª   ª           +---complex
ª   ª   +---postcss-nested-calc
ª   ª   ª   +---dist
ª   ª   +---postcss-normalize-display-values
ª   ª   ª   +---dist
ª   ª   +---postcss-oklab-function
ª   ª   ª   +---dist
ª   ª   ª       +---css-color-4
ª   ª   +---postcss-progressive-custom-properties
ª   ª   ª   +---dist
ª   ª   ª       +---custom
ª   ª   +---postcss-stepped-value-functions
ª   ª   ª   +---dist
ª   ª   +---postcss-text-decoration-shorthand
ª   ª   ª   +---dist
ª   ª   +---postcss-trigonometric-functions
ª   ª   ª   +---dist
ª   ª   +---postcss-unset-value
ª   ª   ª   +---dist
ª   ª   +---selector-specificity
ª   ª       +---dist
ª   +---@eslint
ª   ª   +---eslintrc
ª   ª   ª   +---conf
ª   ª   ª   +---dist
ª   ª   ª   +---lib
ª   ª   ª   ª   +---config-array
ª   ª   ª   ª   +---shared
ª   ª   ª   +---node_modules
ª   ª   ª       +---.bin
ª   ª   ª       +---argparse
ª   ª   ª       ª   +---lib
ª   ª   ª       +---globals
ª   ª   ª       +---js-yaml
ª   ª   ª       ª   +---bin
ª   ª   ª       ª   +---dist
ª   ª   ª       ª   +---lib
ª   ª   ª       ª       +---schema
ª   ª   ª       ª       +---type
ª   ª   ª       +---type-fest
ª   ª   ª           +---source
ª   ª   ª           +---ts41
ª   ª   +---js
ª   ª       +---src
ª   ª           +---configs
ª   +---@eslint-community
ª   ª   +---eslint-utils
ª   ª   +---regexpp
ª   +---@humanwhocodes
ª   ª   +---config-array
ª   ª   +---module-importer
ª   ª   ª   +---dist
ª   ª   ª   +---src
ª   ª   +---object-schema
ª   ª       +---src
ª   +---@isaacs
ª   ª   +---cliui
ª   ª       +---build
ª   ª       ª   +---lib
ª   ª       +---node_modules
ª   ª           +---ansi-regex
ª   ª           +---ansi-styles
ª   ª           +---string-width
ª   ª           +---strip-ansi
ª   ª           +---wrap-ansi
ª   +---@istanbuljs
ª   ª   +---load-nyc-config
ª   ª   ª   +---node_modules
ª   ª   ª       +---camelcase
ª   ª   +---schema
ª   +---@jest
ª   ª   +---console
ª   ª   ª   +---build
ª   ª   +---core
ª   ª   ª   +---build
ª   ª   ª       +---assets
ª   ª   ª       +---cli
ª   ª   ª       +---lib
ª   ª   ª       +---plugins
ª   ª   +---environment
ª   ª   ª   +---build
ª   ª   +---fake-timers
ª   ª   ª   +---build
ª   ª   +---globals
ª   ª   ª   +---build
ª   ª   +---reporters
ª   ª   ª   +---build
ª   ª   ª   +---node_modules
ª   ª   ª       +---source-map
ª   ª   ª           +---dist
ª   ª   ª           +---lib
ª   ª   +---schemas
ª   ª   ª   +---build
ª   ª   +---source-map
ª   ª   ª   +---build
ª   ª   ª   +---node_modules
ª   ª   ª       +---source-map
ª   ª   ª           +---dist
ª   ª   ª           +---lib
ª   ª   +---test-result
ª   ª   ª   +---build
ª   ª   +---test-sequencer
ª   ª   ª   +---build
ª   ª   +---transform
ª   ª   ª   +---build
ª   ª   ª   +---node_modules
ª   ª   ª       +---convert-source-map
ª   ª   ª       +---source-map
ª   ª   ª           +---dist
ª   ª   ª           +---lib
ª   ª   +---types
ª   ª       +---build
ª   +---@jridgewell
ª   ª   +---gen-mapping
ª   ª   ª   +---dist
ª   ª   ª       +---types
ª   ª   +---resolve-uri
ª   ª   ª   +---dist
ª   ª   ª       +---types
ª   ª   +---set-array
ª   ª   ª   +---dist
ª   ª   ª       +---types
ª   ª   +---source-map
ª   ª   ª   +---dist
ª   ª   ª       +---types
ª   ª   +---sourcemap-codec
ª   ª   ª   +---dist
ª   ª   ª       +---types
ª   ª   +---trace-mapping
ª   ª       +---dist
ª   ª           +---types
ª   +---@leichtgewicht
ª   ª   +---ip-codec
ª   ª       +---types
ª   +---@nicolo-ribaudo
ª   ª   +---eslint-scope-5-internals
ª   ª       +---node_modules
ª   ª           +---eslint-scope
ª   ª           ª   +---lib
ª   ª           +---estraverse
ª   +---@nodelib
ª   ª   +---fs.scandir
ª   ª   ª   +---out
ª   ª   ª       +---adapters
ª   ª   ª       +---providers
ª   ª   ª       +---types
ª   ª   ª       +---utils
ª   ª   +---fs.stat
ª   ª   ª   +---out
ª   ª   ª       +---adapters
ª   ª   ª       +---providers
ª   ª   ª       +---types
ª   ª   +---fs.walk
ª   ª       +---out
ª   ª           +---providers
ª   ª           +---readers
ª   ª           +---types
ª   +---@pkgjs
ª   ª   +---parseargs
ª   ª       +---examples
ª   ª       +---internal
ª   +---@pmmmwh
ª   ª   +---react-refresh-webpack-plugin
ª   ª       +---client
ª   ª       ª   +---utils
ª   ª       +---lib
ª   ª       ª   +---runtime
ª   ª       ª   +---utils
ª   ª       +---loader
ª   ª       ª   +---utils
ª   ª       +---options
ª   ª       +---overlay
ª   ª       ª   +---components
ª   ª       ª   +---containers
ª   ª       +---sockets
ª   ª       ª   +---utils
ª   ª       +---types
ª   ª           +---lib
ª   ª           +---loader
ª   ª           +---options
ª   +---@rollup
ª   ª   +---plugin-babel
ª   ª   ª   +---dist
ª   ª   ª   +---types
ª   ª   +---plugin-node-resolve
ª   ª   ª   +---dist
ª   ª   ª   ª   +---cjs
ª   ª   ª   ª   +---es
ª   ª   ª   +---types
ª   ª   +---plugin-replace
ª   ª   ª   +---dist
ª   ª   ª   +---src
ª   ª   ª   +---types
ª   ª   +---pluginutils
ª   ª       +---dist
ª   ª       ª   +---cjs
ª   ª       ª   +---es
ª   ª       +---node_modules
ª   ª       ª   +---@types
ª   ª       ª       +---estree
ª   ª       +---types
ª   +---@rtsao
ª   ª   +---scc
ª   +---@rushstack
ª   ª   +---eslint-patch
ª   ª       +---lib
ª   ª           +---eslint-bulk-suppressions
ª   ª           ª   +---cli
ª   ª           ª       +---utils
ª   ª           +---exports
ª   +---@sinclair
ª   ª   +---typebox
ª   ª       +---compiler
ª   ª       +---conditional
ª   ª       +---errors
ª   ª       +---format
ª   ª       +---guard
ª   ª       +---value
ª   +---@sinonjs
ª   ª   +---commons
ª   ª   ª   +---lib
ª   ª   ª   ª   +---prototypes
ª   ª   ª   +---types
ª   ª   ª       +---prototypes
ª   ª   +---fake-timers
ª   ª       +---src
ª   +---@surma
ª   ª   +---rollup-plugin-off-main-thread
ª   ª       +---tests
ª   ª           +---fixtures
ª   ª               +---amd-function-name
ª   ª               ª   +---build
ª   ª               +---assets-in-worker
ª   ª               ª   +---build
ª   ª               ª       +---assets
ª   ª               +---dynamic-import
ª   ª               ª   +---build
ª   ª               +---import-meta
ª   ª               ª   +---build
ª   ª               +---import-meta-worker
ª   ª               ª   +---build
ª   ª               +---import-worker-url
ª   ª               ª   +---build
ª   ª               +---import-worker-url-custom-scheme
ª   ª               ª   +---build
ª   ª               +---module-worker
ª   ª               ª   +---build
ª   ª               +---more-workers
ª   ª               ª   +---build
ª   ª               +---public-path
ª   ª               ª   +---build
ª   ª               +---simple-bundle
ª   ª               ª   +---build
ª   ª               +---single-default
ª   ª               ª   +---build
ª   ª               +---url-import-meta-worker
ª   ª               ª   +---build
ª   ª               +---worker
ª   ª                   +---build
ª   +---@svgr
ª   ª   +---babel-plugin-add-jsx-attribute
ª   ª   ª   +---lib
ª   ª   +---babel-plugin-remove-jsx-attribute
ª   ª   ª   +---lib
ª   ª   +---babel-plugin-remove-jsx-empty-expression
ª   ª   ª   +---lib
ª   ª   +---babel-plugin-replace-jsx-attribute-value
ª   ª   ª   +---lib
ª   ª   +---babel-plugin-svg-dynamic-title
ª   ª   ª   +---lib
ª   ª   +---babel-plugin-svg-em-dimensions
ª   ª   ª   +---lib
ª   ª   +---babel-plugin-transform-react-native-svg
ª   ª   ª   +---lib
ª   ª   +---babel-plugin-transform-svg-component
ª   ª   ª   +---lib
ª   ª   +---babel-preset
ª   ª   ª   +---lib
ª   ª   +---core
ª   ª   ª   +---lib
ª   ª   +---hast-util-to-babel-ast
ª   ª   ª   +---lib
ª   ª   +---plugin-jsx
ª   ª   ª   +---lib
ª   ª   +---plugin-svgo
ª   ª   ª   +---lib
ª   ª   +---webpack
ª   ª       +---lib
ª   +---@techstark
ª   ª   +---opencv-js
ª   ª       +---dist
ª   ª       ª   +---src
ª   ª       ª       +---types
ª   ª       ª           +---opencv
ª   ª       +---src
ª   ª           +---types
ª   ª               +---opencv
ª   +---@testing-library
ª   ª   +---dom
ª   ª   ª   +---dist
ª   ª   ª   ª   +---@testing-library
ª   ª   ª   ª   +---queries
ª   ª   ª   +---node_modules
ª   ª   ª   ª   +---aria-query
ª   ª   ª   ª       +---lib
ª   ª   ª   ª           +---etc
ª   ª   ª   ª           ª   +---roles
ª   ª   ª   ª           ª       +---abstract
ª   ª   ª   ª           ª       +---dpub
ª   ª   ª   ª           ª       +---graphics
ª   ª   ª   ª           ª       +---literal
ª   ª   ª   ª           +---util
ª   ª   ª   +---types
ª   ª   +---jest-dom
ª   ª   ª   +---dist
ª   ª   ª   +---node_modules
ª   ª   ª   ª   +---chalk
ª   ª   ª   ª   ª   +---source
ª   ª   ª   ª   +---dom-accessibility-api
ª   ª   ª   ª       +---dist
ª   ª   ª   ª           +---polyfills
ª   ª   ª   +---types
ª   ª   ª       +---__tests__
ª   ª   ª           +---bun
ª   ª   ª           +---jest
ª   ª   ª           +---jest-globals
ª   ª   ª           +---vitest
ª   ª   +---react
ª   ª   ª   +---dist
ª   ª   ª   ª   +---@testing-library
ª   ª   ª   +---types
ª   ª   +---user-event
ª   ª       +---dist
ª   ª           +---keyboard
ª   ª           ª   +---plugins
ª   ª           ª   +---shared
ª   ª           +---type
ª   ª           +---utils
ª   ª               +---click
ª   ª               +---edit
ª   ª               +---focus
ª   ª               +---misc
ª   +---@tootallnate
ª   ª   +---once
ª   ª       +---dist
ª   +---@trysound
ª   ª   +---sax
ª   ª       +---lib
ª   +---@types
ª   ª   +---aria-query
ª   ª   +---babel__core
ª   ª   +---babel__generator
ª   ª   +---babel__template
ª   ª   +---babel__traverse
ª   ª   +---body-parser
ª   ª   +---bonjour
ª   ª   +---connect
ª   ª   +---connect-history-api-fallback
ª   ª   +---eslint
ª   ª   ª   +---rules
ª   ª   +---eslint-scope
ª   ª   +---estree
ª   ª   +---express
ª   ª   ª   +---node_modules
ª   ª   ª       +---@types
ª   ª   ª           +---express-serve-static-core
ª   ª   +---express-serve-static-core
ª   ª   +---graceful-fs
ª   ª   +---html-minifier-terser
ª   ª   +---http-errors
ª   ª   +---http-proxy
ª   ª   +---istanbul-lib-coverage
ª   ª   +---istanbul-lib-report
ª   ª   +---istanbul-reports
ª   ª   +---json-schema
ª   ª   +---json5
ª   ª   +---mime
ª   ª   +---node
ª   ª   ª   +---assert
ª   ª   ª   +---compatibility
ª   ª   ª   +---dns
ª   ª   ª   +---fs
ª   ª   ª   +---readline
ª   ª   ª   +---stream
ª   ª   ª   +---timers
ª   ª   ª   +---ts5.6
ª   ª   +---node-forge
ª   ª   +---parse-json
ª   ª   +---prettier
ª   ª   +---q
ª   ª   +---qs
ª   ª   +---range-parser
ª   ª   +---resolve
ª   ª   +---retry
ª   ª   +---semver
ª   ª   ª   +---classes
ª   ª   ª   +---functions
ª   ª   ª   +---internals
ª   ª   ª   +---ranges
ª   ª   +---send
ª   ª   +---serve-index
ª   ª   +---serve-static
ª   ª   +---sockjs
ª   ª   +---stack-utils
ª   ª   +---trusted-types
ª   ª   ª   +---lib
ª   ª   +---ws
ª   ª   +---yargs
ª   ª   +---yargs-parser
ª   +---@typescript-eslint
ª   ª   +---eslint-plugin
ª   ª   ª   +---dist
ª   ª   ª   ª   +---configs
ª   ª   ª   ª   +---rules
ª   ª   ª   ª   ª   +---enum-utils
ª   ª   ª   ª   ª   +---naming-convention-utils
ª   ª   ª   ª   +---util
ª   ª   ª   +---docs
ª   ª   ª       +---rules
ª   ª   +---experimental-utils
ª   ª   ª   +---dist
ª   ª   ª   +---_ts3.4
ª   ª   ª       +---dist
ª   ª   +---parser
ª   ª   ª   +---dist
ª   ª   ª   +---_ts3.4
ª   ª   ª       +---dist
ª   ª   +---scope-manager
ª   ª   ª   +---dist
ª   ª   ª       +---definition
ª   ª   ª       +---lib
ª   ª   ª       +---referencer
ª   ª   ª       +---scope
ª   ª   ª       +---variable
ª   ª   +---type-utils
ª   ª   ª   +---dist
ª   ª   ª   +---_ts3.4
ª   ª   ª       +---dist
ª   ª   +---types
ª   ª   ª   +---dist
ª   ª   ª   ª   +---generated
ª   ª   ª   +---_ts3.4
ª   ª   ª       +---dist
ª   ª   ª           +---generated
ª   ª   +---typescript-estree
ª   ª   ª   +---dist
ª   ª   ª   ª   +---create-program
ª   ª   ª   ª   +---jsx
ª   ª   ª   ª   +---parseSettings
ª   ª   ª   ª   +---ts-estree
ª   ª   ª   +---_ts3.4
ª   ª   ª       +---dist
ª   ª   ª           +---create-program
ª   ª   ª           +---jsx
ª   ª   ª           +---parseSettings
ª   ª   ª           +---ts-estree
ª   ª   +---utils
ª   ª   ª   +---dist
ª   ª   ª   ª   +---ast-utils
ª   ª   ª   ª   ª   +---eslint-utils
ª   ª   ª   ª   +---eslint-utils
ª   ª   ª   ª   ª   +---rule-tester
ª   ª   ª   ª   +---ts-eslint
ª   ª   ª   ª   +---ts-eslint-scope
ª   ª   ª   +---node_modules
ª   ª   ª   ª   +---eslint-scope
ª   ª   ª   ª   ª   +---lib
ª   ª   ª   ª   +---estraverse
ª   ª   ª   +---_ts3.4
ª   ª   ª       +---dist
ª   ª   ª           +---ast-utils
ª   ª   ª           ª   +---eslint-utils
ª   ª   ª           +---eslint-utils
ª   ª   ª           ª   +---rule-tester
ª   ª   ª           +---ts-eslint
ª   ª   ª           +---ts-eslint-scope
ª   ª   +---visitor-keys
ª   ª       +---dist
ª   ª       +---_ts3.4
ª   ª           +---dist
ª   +---@ungap
ª   ª   +---structured-clone
ª   ª       +---.github
ª   ª       ª   +---workflows
ª   ª       +---cjs
ª   ª       +---esm
ª   +---@webassemblyjs
ª   ª   +---ast
ª   ª   ª   +---esm
ª   ª   ª   ª   +---transform
ª   ª   ª   ª   ª   +---ast-module-to-module-context
ª   ª   ª   ª   ª   +---denormalize-type-references
ª   ª   ª   ª   ª   +---wast-identifier-to-index
ª   ª   ª   ª   +---types
ª   ª   ª   +---lib
ª   ª   ª   ª   +---transform
ª   ª   ª   ª   ª   +---ast-module-to-module-context
ª   ª   ª   ª   ª   +---denormalize-type-references
ª   ª   ª   ª   ª   +---wast-identifier-to-index
ª   ª   ª   ª   +---types
ª   ª   ª   +---scripts
ª   ª   +---floating-point-hex-parser
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   +---helper-api-error
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   +---helper-buffer
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   +---helper-numbers
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   ª   +---src
ª   ª   +---helper-wasm-bytecode
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   +---helper-wasm-section
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   +---ieee754
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   ª   +---src
ª   ª   +---leb128
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   +---utf8
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   ª   +---src
ª   ª   ª   +---test
ª   ª   +---wasm-edit
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   +---wasm-gen
ª   ª   ª   +---esm
ª   ª   ª   ª   +---encoder
ª   ª   ª   +---lib
ª   ª   ª       +---encoder
ª   ª   +---wasm-opt
ª   ª   ª   +---esm
ª   ª   ª   +---lib
ª   ª   +---wasm-parser
ª   ª   ª   +---esm
ª   ª   ª   ª   +---types
ª   ª   ª   +---lib
ª   ª   ª       +---types
ª   ª   +---wast-printer
ª   ª       +---esm
ª   ª       +---lib
ª   +---@xtuc
ª   ª   +---ieee754
ª   ª   ª   +---dist
ª   ª   +---long
ª   ª       +---dist
ª   ª       +---src
ª   +---abab
ª   ª   +---lib
ª   +---accepts
ª   ª   +---node_modules
ª   ª       +---negotiator
ª   ª           +---lib
ª   +---acorn
ª   ª   +---bin
ª   ª   +---dist
ª   +---acorn-globals
ª   ª   +---node_modules
ª   ª       +---.bin
ª   ª       +---acorn
ª   ª           +---bin
ª   ª           +---dist
ª   +---acorn-jsx
ª   +---acorn-walk
ª   ª   +---dist
ª   +---address
ª   ª   +---lib
ª   +---adjust-sourcemap-loader
ª   ª   +---codec
ª   ª   ª   +---utility
ª   ª   +---lib
ª   ª       +---process
ª   +---agent-base
ª   ª   +---dist
ª   ª   ª   +---src
ª   ª   +---src
ª   +---ajv
ª   ª   +---dist
ª   ª   +---lib
ª   ª   ª   +---compile
ª   ª   ª   +---dot
ª   ª   ª   +---dotjs
ª   ª   ª   +---refs
ª   ª   +---scripts
ª   +---ajv-formats
ª   ª   +---dist
ª   ª   +---node_modules
ª   ª   ª   +---ajv
ª   ª   ª   ª   +---dist
ª   ª   ª   ª   ª   +---compile
ª   ª   ª   ª   ª   ª   +---codegen
ª   ª   ª   ª   ª   ª   +---jtd
ª   ª   ª   ª   ª   ª   +---validate
ª   ª   ª   ª   ª   +---refs
ª   ª   ª   ª   ª   ª   +---json-schema-2019-09
ª   ª   ª   ª   ª   ª   ª   +---meta
ª   ª   ª   ª   ª   ª   +---json-schema-2020-12
ª   ª   ª   ª   ª   ª       +---meta
ª   ª   ª   ª   ª   +---runtime
ª   ª   ª   ª   ª   +---standalone
ª   ª   ª   ª   ª   +---types
ª   ª   ª   ª   ª   +---vocabularies
ª   ª   ª   ª   ª       +---applicator
ª   ª   ª   ª   ª       +---core
ª   ª   ª   ª   ª       +---discriminator
ª   ª   ª   ª   ª       +---dynamic
ª   ª   ª   ª   ª       +---format
ª   ª   ª   ª   ª       +---jtd
ª   ª   ª   ª   ª       +---unevaluated
ª   ª   ª   ª   ª       +---validation
ª   ª   ª   ª   +---lib
ª   ª   ª   ª       +---compile
ª   ª   ª   ª       ª   +---codegen
ª   ª   ª   ª       ª   +---jtd
ª   ª   ª   ª       ª   +---validate
ª   ª   ª   ª       +---refs
ª   ª   ª   ª       ª   +---json-schema-2019-09
ª   ª   ª   ª       ª   ª   +---meta
ª   ª   ª   ª       ª   +---json-schema-2020-12
ª   ª   ª   ª       ª       +---meta
ª   ª   ª   ª       +---runtime
ª   ª   ª   ª       +---standalone
ª   ª   ª   ª       +---types
ª   ª   ª   ª       +---vocabularies
ª   ª   ª   ª           +---applicator
ª   ª   ª   ª           +---core
ª   ª   ª   ª           +---discriminator
ª   ª   ª   ª           +---dynamic
ª   ª   ª   ª           +---format
ª   ª   ª   ª           +---jtd
ª   ª   ª   ª           +---unevaluated
ª   ª   ª   ª           +---validation
ª   ª   ª   +---json-schema-traverse
ª   ª   ª       +---.github
ª   ª   ª       ª   +---workflows
ª   ª   ª       +---spec
ª   ª   ª           +---fixtures
ª   ª   +---src
ª   +---ajv-keywords
ª   ª   +---keywords
ª   ª       +---dot
ª   ª       +---dotjs
ª   +---ansi-escapes
ª   +---ansi-html
ª   ª   +---bin
ª   +---ansi-html-community
ª   ª   +---bin
ª   +---ansi-regex
ª   +---ansi-styles
ª   +---any-promise
ª   ª   +---register
ª   +---anymatch
ª   +---arg
ª   +---argparse
ª   ª   +---lib
ª   ª       +---action
ª   ª       ª   +---append
ª   ª       ª   +---store
ª   ª       +---argument
ª   ª       +---help
ª   +---aria-query
ª   ª   +---lib
ª   ª       +---etc
ª   ª       ª   +---roles
ª   ª       ª       +---abstract
ª   ª       ª       +---dpub
ª   ª       ª       +---graphics
ª   ª       ª       +---literal
ª   ª       +---util
ª   +---array-buffer-byte-length
ª   ª   +---.github
ª   ª   +---test
ª   +---array-flatten
ª   +---array-includes
ª   ª   +---.github
ª   ª   +---test
ª   +---array-union
ª   +---array.prototype.findlast
ª   ª   +---.github
ª   ª   +---test
ª   +---array.prototype.findlastindex
ª   ª   +---.github
ª   ª   +---test
ª   +---array.prototype.flat
ª   ª   +---.github
ª   ª   +---test
ª   +---array.prototype.flatmap
ª   ª   +---.github
ª   ª   +---test
ª   +---array.prototype.reduce
ª   ª   +---test
ª   +---array.prototype.tosorted
ª   ª   +---.github
ª   ª   +---test
ª   +---arraybuffer.prototype.slice
ª   ª   +---test
ª   +---asap
ª   +---ast-types-flow
ª   ª   +---lib
ª   +---async
ª   ª   +---dist
ª   ª   +---internal
ª   +---async-function
ª   ª   +---.github
ª   ª   +---test
ª   +---asynckit
ª   ª   +---lib
ª   +---at-least-node
ª   +---autoprefixer
ª   ª   +---bin
ª   ª   +---data
ª   ª   +---lib
ª   ª       +---hacks
ª   +---available-typed-arrays
ª   ª   +---.github
ª   ª   +---test
ª   +---axe-core
ª   ª   +---locales
ª   +---axobject-query
ª   ª   +---lib
ª   ª       +---etc
ª   ª       ª   +---objects
ª   ª       +---util
ª   +---babel-jest
ª   ª   +---build
ª   +---babel-loader
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---schema-utils
ª   ª           +---declarations
ª   ª           ª   +---keywords
ª   ª           ª   +---util
ª   ª           +---dist
ª   ª               +---keywords
ª   ª               +---util
ª   +---babel-plugin-istanbul
ª   ª   +---lib
ª   +---babel-plugin-jest-hoist
ª   ª   +---build
ª   +---babel-plugin-macros
ª   ª   +---dist
ª   +---babel-plugin-named-asset-import
ª   +---babel-plugin-polyfill-corejs2
ª   ª   +---esm
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---.bin
ª   ª       +---semver
ª   ª           +---bin
ª   +---babel-plugin-polyfill-corejs3
ª   ª   +---core-js-compat
ª   ª   +---esm
ª   ª   +---lib
ª   +---babel-plugin-polyfill-regenerator
ª   ª   +---esm
ª   ª   +---lib
ª   +---babel-plugin-transform-react-remove-prop-types
ª   ª   +---lib
ª   ª   +---src
ª   +---babel-preset-current-node-syntax
ª   ª   +---.github
ª   ª   ª   +---workflows
ª   ª   +---src
ª   +---babel-preset-jest
ª   +---babel-preset-react-app
ª   ª   +---node_modules
ª   ª       +---@babel
ª   ª           +---plugin-proposal-private-property-in-object
ª   ª               +---lib
ª   +---balanced-match
ª   ª   +---.github
ª   +---batch
ª   +---bfj
ª   ª   +---src
ª   ª   +---test
ª   ª       +---unit
ª   +---big.js
ª   +---binary-extensions
ª   +---bluebird
ª   ª   +---js
ª   ª       +---browser
ª   ª       +---release
ª   +---body-parser
ª   ª   +---lib
ª   ª   ª   +---types
ª   ª   +---node_modules
ª   ª       +---debug
ª   ª       ª   +---src
ª   ª       +---iconv-lite
ª   ª       ª   +---encodings
ª   ª       ª   ª   +---tables
ª   ª       ª   +---lib
ª   ª       +---ms
ª   +---bonjour-service
ª   ª   +---dist
ª   ª   ª   +---lib
ª   ª   ª       +---utils
ª   ª   +---types
ª   +---boolbase
ª   +---brace-expansion
ª   +---braces
ª   ª   +---lib
ª   +---browser-process-hrtime
ª   +---browserslist
ª   +---bser
ª   +---buffer-from
ª   +---builtin-modules
ª   +---bytes
ª   +---call-bind
ª   ª   +---.github
ª   ª   +---test
ª   +---call-bind-apply-helpers
ª   ª   +---.github
ª   ª   +---test
ª   +---call-bound
ª   ª   +---.github
ª   ª   +---test
ª   +---callsites
ª   +---camel-case
ª   ª   +---dist
ª   ª   +---dist.es2015
ª   +---camelcase
ª   +---camelcase-css
ª   +---caniuse-api
ª   ª   +---dist
ª   +---caniuse-lite
ª   ª   +---data
ª   ª   ª   +---features
ª   ª   ª   +---regions
ª   ª   +---dist
ª   ª       +---lib
ª   ª       +---unpacker
ª   +---case-sensitive-paths-webpack-plugin
ª   +---chalk
ª   ª   +---source
ª   +---char-regex
ª   +---check-types
ª   ª   +---src
ª   +---chokidar
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª   ª   +---glob-parent
ª   ª   +---types
ª   +---chrome-trace-event
ª   ª   +---dist
ª   +---ci-info
ª   +---cjs-module-lexer
ª   ª   +---dist
ª   +---clean-css
ª   ª   +---lib
ª   ª   ª   +---optimizer
ª   ª   ª   ª   +---configuration
ª   ª   ª   ª   ª   +---properties
ª   ª   ª   ª   +---level-0
ª   ª   ª   ª   +---level-1
ª   ª   ª   ª   ª   +---property-optimizers
ª   ª   ª   ª   ª   +---value-optimizers
ª   ª   ª   ª   ª       +---color
ª   ª   ª   ª   +---level-2
ª   ª   ª   ª       +---properties
ª   ª   ª   +---options
ª   ª   ª   +---reader
ª   ª   ª   +---tokenizer
ª   ª   ª   +---utils
ª   ª   ª   +---writer
ª   ª   +---node_modules
ª   ª       +---source-map
ª   ª           +---dist
ª   ª           +---lib
ª   +---cliui
ª   ª   +---build
ª   ª       +---lib
ª   +---co
ª   +---coa
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---ansi-styles
ª   ª       +---chalk
ª   ª       ª   +---types
ª   ª       +---color-convert
ª   ª       +---color-name
ª   ª       +---escape-string-regexp
ª   ª       +---has-flag
ª   ª       +---supports-color
ª   +---collect-v8-coverage
ª   +---color-convert
ª   +---color-name
ª   +---colord
ª   ª   +---plugins
ª   +---colorette
ª   +---combined-stream
ª   ª   +---lib
ª   +---commander
ª   ª   +---lib
ª   ª   +---typings
ª   +---common-tags
ª   ª   +---dist
ª   ª   +---es
ª   ª   ª   +---codeBlock
ª   ª   ª   +---commaLists
ª   ª   ª   +---commaListsAnd
ª   ª   ª   +---commaListsOr
ª   ª   ª   +---html
ª   ª   ª   +---inlineArrayTransformer
ª   ª   ª   +---inlineLists
ª   ª   ª   +---oneLine
ª   ª   ª   +---oneLineCommaLists
ª   ª   ª   +---oneLineCommaListsAnd
ª   ª   ª   +---oneLineCommaListsOr
ª   ª   ª   +---oneLineInlineLists
ª   ª   ª   +---oneLineTrim
ª   ª   ª   +---removeNonPrintingValuesTransformer
ª   ª   ª   +---replaceResultTransformer
ª   ª   ª   +---replaceStringTransformer
ª   ª   ª   +---replaceSubstitutionTransformer
ª   ª   ª   +---safeHtml
ª   ª   ª   +---source
ª   ª   ª   +---splitStringTransformer
ª   ª   ª   +---stripIndent
ª   ª   ª   +---stripIndents
ª   ª   ª   +---stripIndentTransformer
ª   ª   ª   +---TemplateTag
ª   ª   ª   +---trimResultTransformer
ª   ª   ª   +---utils
ª   ª   ª       +---readFromFixture
ª   ª   +---lib
ª   ª       +---codeBlock
ª   ª       +---commaLists
ª   ª       +---commaListsAnd
ª   ª       +---commaListsOr
ª   ª       +---html
ª   ª       +---inlineArrayTransformer
ª   ª       +---inlineLists
ª   ª       +---oneLine
ª   ª       +---oneLineCommaLists
ª   ª       +---oneLineCommaListsAnd
ª   ª       +---oneLineCommaListsOr
ª   ª       +---oneLineInlineLists
ª   ª       +---oneLineTrim
ª   ª       +---removeNonPrintingValuesTransformer
ª   ª       +---replaceResultTransformer
ª   ª       +---replaceStringTransformer
ª   ª       +---replaceSubstitutionTransformer
ª   ª       +---safeHtml
ª   ª       +---source
ª   ª       +---splitStringTransformer
ª   ª       +---stripIndent
ª   ª       +---stripIndents
ª   ª       +---stripIndentTransformer
ª   ª       +---TemplateTag
ª   ª       +---trimResultTransformer
ª   ª       +---utils
ª   ª           +---readFromFixture
ª   +---commondir
ª   ª   +---example
ª   ª   +---test
ª   +---compressible
ª   +---compression
ª   ª   +---node_modules
ª   ª       +---debug
ª   ª       ª   +---src
ª   ª       +---ms
ª   +---concat-map
ª   ª   +---example
ª   ª   +---test
ª   +---confusing-browser-globals
ª   +---connect-history-api-fallback
ª   ª   +---lib
ª   +---content-disposition
ª   +---content-type
ª   +---convert-source-map
ª   +---cookie
ª   +---cookie-signature
ª   +---core-js
ª   ª   +---actual
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---async-disposable-stack
ª   ª   ª   +---async-iterator
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---disposable-stack
ª   ª   ª   +---dom-collections
ª   ª   ª   +---dom-exception
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---url
ª   ª   ª   +---url-search-params
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---es
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---features
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---async-disposable-stack
ª   ª   ª   +---async-iterator
ª   ª   ª   +---bigint
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---disposable-stack
ª   ª   ª   +---dom-collections
ª   ª   ª   +---dom-exception
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---observable
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---url
ª   ª   ª   +---url-search-params
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---full
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---async-disposable-stack
ª   ª   ª   +---async-iterator
ª   ª   ª   +---bigint
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---disposable-stack
ª   ª   ª   +---dom-collections
ª   ª   ª   +---dom-exception
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---observable
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---url
ª   ª   ª   +---url-search-params
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---internals
ª   ª   +---modules
ª   ª   +---proposals
ª   ª   +---stable
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---dom-collections
ª   ª   ª   +---dom-exception
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---url
ª   ª   ª   +---url-search-params
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---stage
ª   ª   +---web
ª   +---core-js-compat
ª   +---core-js-pure
ª   ª   +---actual
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---async-disposable-stack
ª   ª   ª   +---async-iterator
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---disposable-stack
ª   ª   ª   +---dom-collections
ª   ª   ª   +---dom-exception
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---url
ª   ª   ª   +---url-search-params
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---es
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---features
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---async-disposable-stack
ª   ª   ª   +---async-iterator
ª   ª   ª   +---bigint
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---disposable-stack
ª   ª   ª   +---dom-collections
ª   ª   ª   +---dom-exception
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---observable
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---url
ª   ª   ª   +---url-search-params
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---full
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---async-disposable-stack
ª   ª   ª   +---async-iterator
ª   ª   ª   +---bigint
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---disposable-stack
ª   ª   ª   +---dom-collections
ª   ª   ª   +---dom-exception
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---observable
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---url
ª   ª   ª   +---url-search-params
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---internals
ª   ª   +---modules
ª   ª   +---proposals
ª   ª   +---stable
ª   ª   ª   +---array
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---array-buffer
ª   ª   ª   +---data-view
ª   ª   ª   +---date
ª   ª   ª   +---dom-collections
ª   ª   ª   +---dom-exception
ª   ª   ª   +---error
ª   ª   ª   +---function
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---instance
ª   ª   ª   +---iterator
ª   ª   ª   +---json
ª   ª   ª   +---map
ª   ª   ª   +---math
ª   ª   ª   +---number
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---object
ª   ª   ª   +---promise
ª   ª   ª   +---reflect
ª   ª   ª   +---regexp
ª   ª   ª   +---set
ª   ª   ª   +---string
ª   ª   ª   ª   +---virtual
ª   ª   ª   +---symbol
ª   ª   ª   +---typed-array
ª   ª   ª   +---url
ª   ª   ª   +---url-search-params
ª   ª   ª   +---weak-map
ª   ª   ª   +---weak-set
ª   ª   +---stage
ª   ª   +---web
ª   +---core-util-is
ª   ª   +---lib
ª   +---cosmiconfig
ª   ª   +---dist
ª   +---cross-spawn
ª   ª   +---lib
ª   ª       +---util
ª   +---crypto-random-string
ª   +---css-blank-pseudo
ª   ª   +---dist
ª   +---css-declaration-sorter
ª   ª   +---dist
ª   ª   +---orders
ª   ª   +---src
ª   +---css-has-pseudo
ª   ª   +---dist
ª   +---css-loader
ª   ª   +---dist
ª   ª       +---plugins
ª   ª       +---runtime
ª   +---css-minimizer-webpack-plugin
ª   ª   +---dist
ª   ª   +---node_modules
ª   ª   ª   +---source-map
ª   ª   ª       +---dist
ª   ª   ª       +---lib
ª   ª   +---types
ª   +---css-prefers-color-scheme
ª   ª   +---dist
ª   +---css-select
ª   ª   +---lib
ª   ª       +---pseudo-selectors
ª   +---css-select-base-adapter
ª   ª   +---test
ª   +---css-tree
ª   ª   +---data
ª   ª   +---dist
ª   ª   +---lib
ª   ª   ª   +---common
ª   ª   ª   +---convertor
ª   ª   ª   +---definition-syntax
ª   ª   ª   +---generator
ª   ª   ª   +---lexer
ª   ª   ª   +---parser
ª   ª   ª   +---syntax
ª   ª   ª   ª   +---atrule
ª   ª   ª   ª   +---config
ª   ª   ª   ª   +---function
ª   ª   ª   ª   +---node
ª   ª   ª   ª   +---pseudo
ª   ª   ª   ª   ª   +---common
ª   ª   ª   ª   +---scope
ª   ª   ª   +---tokenizer
ª   ª   ª   +---utils
ª   ª   ª   +---walker
ª   ª   +---node_modules
ª   ª       +---source-map
ª   ª           +---dist
ª   ª           +---lib
ª   +---css-what
ª   ª   +---lib
ª   ª       +---commonjs
ª   ª       +---es
ª   +---css.escape
ª   +---cssdb
ª   +---cssesc
ª   ª   +---bin
ª   ª   +---man
ª   +---cssnano
ª   ª   +---src
ª   ª   ª   +---postcss-discard-comments
ª   ª   ª   +---postcss-discard-empty
ª   ª   ª   +---postcss-normalize-whitespace
ª   ª   +---types
ª   +---cssnano-preset-default
ª   ª   +---src
ª   ª   +---types
ª   +---cssnano-utils
ª   ª   +---src
ª   ª   +---types
ª   +---csso
ª   ª   +---dist
ª   ª   +---lib
ª   ª   ª   +---clean
ª   ª   ª   +---replace
ª   ª   ª   ª   +---atrule
ª   ª   ª   ª   +---property
ª   ª   ª   +---restructure
ª   ª   ª       +---prepare
ª   ª   +---node_modules
ª   ª       +---css-tree
ª   ª       ª   +---data
ª   ª       ª   +---dist
ª   ª       ª   +---lib
ª   ª       ª       +---common
ª   ª       ª       +---convertor
ª   ª       ª       +---definition-syntax
ª   ª       ª       +---generator
ª   ª       ª       +---lexer
ª   ª       ª       +---parser
ª   ª       ª       +---syntax
ª   ª       ª       ª   +---atrule
ª   ª       ª       ª   +---config
ª   ª       ª       ª   +---function
ª   ª       ª       ª   +---node
ª   ª       ª       ª   +---pseudo
ª   ª       ª       ª   ª   +---common
ª   ª       ª       ª   +---scope
ª   ª       ª       +---tokenizer
ª   ª       ª       +---utils
ª   ª       ª       +---walker
ª   ª       +---mdn-data
ª   ª       ª   +---api
ª   ª       ª   +---css
ª   ª       ª   +---l10n
ª   ª       +---source-map
ª   ª           +---dist
ª   ª           +---lib
ª   +---cssom
ª   ª   +---lib
ª   +---cssstyle
ª   ª   +---lib
ª   ª   ª   +---properties
ª   ª   ª   +---utils
ª   ª   +---node_modules
ª   ª       +---cssom
ª   ª           +---lib
ª   +---damerau-levenshtein
ª   ª   +---scripts
ª   ª   +---test
ª   +---data-urls
ª   ª   +---lib
ª   +---data-view-buffer
ª   ª   +---.github
ª   ª   +---test
ª   +---data-view-byte-length
ª   ª   +---.github
ª   ª   +---test
ª   +---data-view-byte-offset
ª   ª   +---.github
ª   ª   +---test
ª   +---debug
ª   ª   +---src
ª   +---decimal.js
ª   +---dedent
ª   ª   +---dist
ª   +---deep-is
ª   ª   +---example
ª   ª   +---test
ª   +---deepmerge
ª   ª   +---dist
ª   +---default-gateway
ª   +---define-data-property
ª   ª   +---.github
ª   ª   +---test
ª   +---define-lazy-prop
ª   +---define-properties
ª   ª   +---.github
ª   +---delayed-stream
ª   ª   +---lib
ª   +---depd
ª   ª   +---lib
ª   ª       +---browser
ª   +---dequal
ª   ª   +---dist
ª   ª   +---lite
ª   +---destroy
ª   +---detect-newline
ª   +---detect-node
ª   +---detect-port-alt
ª   ª   +---.vscode
ª   ª   +---bin
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---debug
ª   ª       ª   +---src
ª   ª       +---ms
ª   +---didyoumean
ª   +---diff-sequences
ª   ª   +---build
ª   ª   +---perf
ª   +---dir-glob
ª   +---dlv
ª   ª   +---dist
ª   +---dns-packet
ª   +---doctrine
ª   ª   +---lib
ª   +---dom-accessibility-api
ª   ª   +---dist
ª   ª       +---polyfills
ª   +---dom-converter
ª   ª   +---lib
ª   +---dom-serializer
ª   ª   +---lib
ª   ª       +---esm
ª   +---domelementtype
ª   ª   +---lib
ª   ª       +---esm
ª   +---domexception
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---webidl-conversions
ª   ª           +---lib
ª   +---domhandler
ª   ª   +---lib
ª   +---domutils
ª   ª   +---lib
ª   +---dot-case
ª   ª   +---dist
ª   ª   +---dist.es2015
ª   +---dotenv
ª   ª   +---lib
ª   ª   +---types
ª   +---dotenv-expand
ª   ª   +---lib
ª   +---dunder-proto
ª   ª   +---.github
ª   ª   +---test
ª   +---duplexer
ª   ª   +---test
ª   +---eastasianwidth
ª   +---ee-first
ª   +---ejs
ª   ª   +---bin
ª   ª   +---lib
ª   +---electron-to-chromium
ª   +---emittery
ª   +---emoji-regex
ª   ª   +---es2015
ª   +---emojis-list
ª   +---encodeurl
ª   +---enhanced-resolve
ª   ª   +---lib
ª   ª       +---util
ª   +---entities
ª   ª   +---lib
ª   ª       +---maps
ª   +---error-ex
ª   +---error-stack-parser
ª   ª   +---dist
ª   +---es-abstract
ª   ª   +---2015
ª   ª   ª   +---tables
ª   ª   +---2016
ª   ª   ª   +---tables
ª   ª   +---2017
ª   ª   ª   +---tables
ª   ª   +---2018
ª   ª   ª   +---tables
ª   ª   +---2019
ª   ª   ª   +---tables
ª   ª   +---2020
ª   ª   ª   +---BigInt
ª   ª   ª   +---Number
ª   ª   ª   +---tables
ª   ª   +---2021
ª   ª   ª   +---BigInt
ª   ª   ª   +---Number
ª   ª   ª   +---tables
ª   ª   +---2022
ª   ª   ª   +---BigInt
ª   ª   ª   +---Number
ª   ª   ª   +---tables
ª   ª   +---2023
ª   ª   ª   +---BigInt
ª   ª   ª   +---Number
ª   ª   ª   +---tables
ª   ª   +---2024
ª   ª   ª   +---BigInt
ª   ª   ª   +---Number
ª   ª   ª   +---tables
ª   ª   +---5
ª   ª   +---helpers
ª   ª   ª   +---records
ª   ª   +---operations
ª   +---es-array-method-boxes-properly
ª   ª   +---.github
ª   ª   +---test
ª   +---es-define-property
ª   ª   +---.github
ª   ª   +---test
ª   +---es-errors
ª   ª   +---.github
ª   ª   +---test
ª   +---es-iterator-helpers
ª   ª   +---.github
ª   ª   +---aos
ª   ª   +---Iterator
ª   ª   +---Iterator.concat
ª   ª   +---Iterator.from
ª   ª   +---Iterator.prototype
ª   ª   +---Iterator.prototype.constructor
ª   ª   +---Iterator.prototype.drop
ª   ª   +---Iterator.prototype.every
ª   ª   +---Iterator.prototype.filter
ª   ª   +---Iterator.prototype.find
ª   ª   +---Iterator.prototype.flatMap
ª   ª   +---Iterator.prototype.forEach
ª   ª   +---Iterator.prototype.map
ª   ª   +---Iterator.prototype.reduce
ª   ª   +---Iterator.prototype.some
ª   ª   +---Iterator.prototype.take
ª   ª   +---Iterator.prototype.toArray
ª   ª   +---Iterator.zip
ª   ª   +---Iterator.zipKeyed
ª   ª   +---IteratorHelperPrototype
ª   ª   +---test
ª   ª   ª   +---helpers
ª   ª   +---WrapForValidIteratorPrototype
ª   +---es-module-lexer
ª   ª   +---dist
ª   ª   +---types
ª   +---es-object-atoms
ª   ª   +---.github
ª   ª   +---test
ª   +---es-set-tostringtag
ª   ª   +---test
ª   +---es-shim-unscopables
ª   ª   +---.github
ª   ª   +---test
ª   +---es-to-primitive
ª   ª   +---.github
ª   ª   +---helpers
ª   ª   +---test
ª   +---escalade
ª   ª   +---dist
ª   ª   +---sync
ª   +---escape-html
ª   +---escape-string-regexp
ª   +---escodegen
ª   ª   +---bin
ª   ª   +---node_modules
ª   ª       +---source-map
ª   ª           +---dist
ª   ª           +---lib
ª   +---eslint
ª   ª   +---bin
ª   ª   +---conf
ª   ª   +---lib
ª   ª   ª   +---cli-engine
ª   ª   ª   ª   +---formatters
ª   ª   ª   +---config
ª   ª   ª   +---eslint
ª   ª   ª   +---linter
ª   ª   ª   ª   +---code-path-analysis
ª   ª   ª   +---rule-tester
ª   ª   ª   +---rules
ª   ª   ª   ª   +---utils
ª   ª   ª   ª       +---patterns
ª   ª   ª   ª       +---unicode
ª   ª   ª   +---shared
ª   ª   ª   +---source-code
ª   ª   ª       +---token-store
ª   ª   +---messages
ª   ª   +---node_modules
ª   ª       +---.bin
ª   ª       +---argparse
ª   ª       ª   +---lib
ª   ª       +---find-up
ª   ª       +---globals
ª   ª       +---js-yaml
ª   ª       ª   +---bin
ª   ª       ª   +---dist
ª   ª       ª   +---lib
ª   ª       ª       +---schema
ª   ª       ª       +---type
ª   ª       +---locate-path
ª   ª       +---p-limit
ª   ª       +---p-locate
ª   ª       +---type-fest
ª   ª           +---source
ª   ª           +---ts41
ª   +---eslint-config-react-app
ª   +---eslint-import-resolver-node
ª   ª   +---node_modules
ª   ª       +---debug
ª   ª           +---src
ª   +---eslint-module-utils
ª   ª   +---node_modules
ª   ª       +---debug
ª   ª           +---src
ª   +---eslint-plugin-flowtype
ª   ª   +---dist
ª   ª       +---bin
ª   ª       +---configs
ª   ª       +---rules
ª   ª       ª   +---arrayStyle
ª   ª       ª   +---typeColonSpacing
ª   ª       +---utilities
ª   +---eslint-plugin-import
ª   ª   +---config
ª   ª   ª   +---flat
ª   ª   +---docs
ª   ª   ª   +---rules
ª   ª   +---lib
ª   ª   ª   +---core
ª   ª   ª   +---exportMap
ª   ª   ª   +---rules
ª   ª   +---memo-parser
ª   ª   +---node_modules
ª   ª       +---.bin
ª   ª       +---debug
ª   ª       ª   +---src
ª   ª       +---doctrine
ª   ª       ª   +---lib
ª   ª       +---semver
ª   ª           +---bin
ª   +---eslint-plugin-jest
ª   ª   +---docs
ª   ª   ª   +---rules
ª   ª   +---lib
ª   ª       +---processors
ª   ª       +---rules
ª   +---eslint-plugin-jsx-a11y
ª   ª   +---docs
ª   ª   ª   +---rules
ª   ª   +---lib
ª   ª   ª   +---configs
ª   ª   ª   +---rules
ª   ª   ª   +---util
ª   ª   ª       +---implicitRoles
ª   ª   +---__mocks__
ª   ª   +---__tests__
ª   ª       +---src
ª   ª       ª   +---rules
ª   ª       ª   +---util
ª   ª       ª       +---implicitRoles
ª   ª       +---__util__
ª   ª           +---helpers
ª   +---eslint-plugin-react
ª   ª   +---configs
ª   ª   +---lib
ª   ª   ª   +---rules
ª   ª   ª   +---util
ª   ª   +---node_modules
ª   ª       +---.bin
ª   ª       +---doctrine
ª   ª       ª   +---lib
ª   ª       +---resolve
ª   ª       ª   +---.github
ª   ª       ª   +---bin
ª   ª       ª   +---example
ª   ª       ª   +---lib
ª   ª       ª   +---test
ª   ª       ª       +---dotdot
ª   ª       ª       ª   +---abc
ª   ª       ª       +---module_dir
ª   ª       ª       ª   +---xmodules
ª   ª       ª       ª   ª   +---aaa
ª   ª       ª       ª   +---ymodules
ª   ª       ª       ª   ª   +---aaa
ª   ª       ª       ª   +---zmodules
ª   ª       ª       ª       +---bbb
ª   ª       ª       +---node_path
ª   ª       ª       ª   +---x
ª   ª       ª       ª   ª   +---aaa
ª   ª       ª       ª   ª   +---ccc
ª   ª       ª       ª   +---y
ª   ª       ª       ª       +---bbb
ª   ª       ª       ª       +---ccc
ª   ª       ª       +---pathfilter
ª   ª       ª       ª   +---deep_ref
ª   ª       ª       +---precedence
ª   ª       ª       ª   +---aaa
ª   ª       ª       ª   +---bbb
ª   ª       ª       +---resolver
ª   ª       ª       ª   +---baz
ª   ª       ª       ª   +---browser_field
ª   ª       ª       ª   +---dot_main
ª   ª       ª       ª   +---dot_slash_main
ª   ª       ª       ª   +---empty_main
ª   ª       ª       ª   +---false_main
ª   ª       ª       ª   +---incorrect_main
ª   ª       ª       ª   +---invalid_main
ª   ª       ª       ª   +---missing_index
ª   ª       ª       ª   +---missing_main
ª   ª       ª       ª   +---multirepo
ª   ª       ª       ª   ª   +---packages
ª   ª       ª       ª   ª       +---package-a
ª   ª       ª       ª   ª       +---package-b
ª   ª       ª       ª   +---nested_symlinks
ª   ª       ª       ª   ª   +---mylib
ª   ª       ª       ª   +---null_main
ª   ª       ª       ª   +---other_path
ª   ª       ª       ª   ª   +---lib
ª   ª       ª       ª   +---quux
ª   ª       ª       ª   ª   +---foo
ª   ª       ª       ª   +---same_names
ª   ª       ª       ª   ª   +---foo
ª   ª       ª       ª   +---symlinked
ª   ª       ª       ª   ª   +---package
ª   ª       ª       ª   ª   +---_
ª   ª       ª       ª   ª       +---node_modules
ª   ª       ª       ª   ª       +---symlink_target
ª   ª       ª       ª   +---without_basedir
ª   ª       ª       +---shadowed_core
ª   ª       ª           +---node_modules
ª   ª       ª               +---util
ª   ª       +---semver
ª   ª           +---bin
ª   +---eslint-plugin-react-hooks
ª   ª   +---cjs
ª   +---eslint-plugin-testing-library
ª   ª   +---configs
ª   ª   +---create-testing-library-rule
ª   ª   +---node-utils
ª   ª   +---rules
ª   ª   +---utils
ª   +---eslint-scope
ª   ª   +---dist
ª   ª   +---lib
ª   +---eslint-visitor-keys
ª   ª   +---dist
ª   ª   +---lib
ª   +---eslint-webpack-plugin
ª   ª   +---dist
ª   ª   +---node_modules
ª   ª   ª   +---jest-worker
ª   ª   ª   ª   +---build
ª   ª   ª   ª       +---base
ª   ª   ª   ª       +---workers
ª   ª   ª   +---supports-color
ª   ª   +---types
ª   +---espree
ª   ª   +---dist
ª   ª   +---lib
ª   +---esprima
ª   ª   +---bin
ª   ª   +---dist
ª   +---esquery
ª   ª   +---dist
ª   +---esrecurse
ª   +---estraverse
ª   +---estree-walker
ª   ª   +---dist
ª   ª   +---src
ª   ª   +---types
ª   +---esutils
ª   ª   +---lib
ª   +---etag
ª   +---eventemitter3
ª   ª   +---umd
ª   +---events
ª   ª   +---.github
ª   ª   +---tests
ª   +---execa
ª   ª   +---lib
ª   +---exit
ª   ª   +---lib
ª   ª   +---test
ª   ª       +---fixtures
ª   +---expect
ª   ª   +---build
ª   +---express
ª   ª   +---lib
ª   ª   ª   +---middleware
ª   ª   ª   +---router
ª   ª   +---node_modules
ª   ª       +---debug
ª   ª       ª   +---src
ª   ª       +---ms
ª   +---fast-deep-equal
ª   ª   +---es6
ª   +---fast-glob
ª   ª   +---node_modules
ª   ª   ª   +---glob-parent
ª   ª   +---out
ª   ª       +---managers
ª   ª       +---providers
ª   ª       ª   +---filters
ª   ª       ª   +---matchers
ª   ª       ª   +---transformers
ª   ª       +---readers
ª   ª       +---types
ª   ª       +---utils
ª   +---fast-json-stable-stringify
ª   ª   +---.github
ª   ª   +---benchmark
ª   ª   +---example
ª   ª   +---test
ª   +---fast-levenshtein
ª   +---fast-uri
ª   ª   +---.github
ª   ª   ª   +---workflows
ª   ª   +---lib
ª   ª   +---test
ª   ª   +---types
ª   +---fastq
ª   ª   +---.github
ª   ª   ª   +---workflows
ª   ª   +---test
ª   +---faye-websocket
ª   ª   +---lib
ª   ª       +---faye
ª   ª           +---websocket
ª   ª               +---api
ª   +---fb-watchman
ª   +---file-entry-cache
ª   +---file-loader
ª   ª   +---dist
ª   ª   +---node_modules
ª   ª       +---schema-utils
ª   ª           +---declarations
ª   ª           ª   +---keywords
ª   ª           ª   +---util
ª   ª           +---dist
ª   ª               +---keywords
ª   ª               +---util
ª   +---filelist
ª   ª   +---node_modules
ª   ª       +---brace-expansion
ª   ª       ª   +---.github
ª   ª       +---minimatch
ª   ª           +---lib
ª   +---filesize
ª   ª   +---lib
ª   +---fill-range
ª   +---finalhandler
ª   ª   +---node_modules
ª   ª       +---debug
ª   ª       ª   +---src
ª   ª       +---ms
ª   +---find-cache-dir
ª   +---find-up
ª   +---flat-cache
ª   ª   +---src
ª   +---flatted
ª   ª   +---cjs
ª   ª   +---esm
ª   ª   +---php
ª   ª   +---python
ª   ª   +---types
ª   +---follow-redirects
ª   +---for-each
ª   ª   +---.github
ª   ª   +---test
ª   +---foreground-child
ª   ª   +---dist
ª   ª   ª   +---commonjs
ª   ª   ª   +---esm
ª   ª   +---node_modules
ª   ª       +---signal-exit
ª   ª           +---dist
ª   ª               +---cjs
ª   ª               +---mjs
ª   +---fork-ts-checker-webpack-plugin
ª   ª   +---lib
ª   ª   ª   +---error
ª   ª   ª   +---eslint-reporter
ª   ª   ª   ª   +---issue
ª   ª   ª   ª   +---reporter
ª   ª   ª   ª   +---types
ª   ª   ª   +---formatter
ª   ª   ª   ª   +---types
ª   ª   ª   +---hooks
ª   ª   ª   +---issue
ª   ª   ª   +---logger
ª   ª   ª   +---profile
ª   ª   ª   +---reporter
ª   ª   ª   ª   +---reporter-rpc
ª   ª   ª   +---rpc
ª   ª   ª   ª   +---error
ª   ª   ª   ª   +---rpc-ipc
ª   ª   ª   ª       +---error
ª   ª   ª   +---typescript-reporter
ª   ª   ª   ª   +---extension
ª   ª   ª   ª   ª   +---vue
ª   ª   ª   ª   ª       +---types
ª   ª   ª   ª   +---file-system
ª   ª   ª   ª   +---issue
ª   ª   ª   ª   +---profile
ª   ª   ª   ª   +---reporter
ª   ª   ª   +---utils
ª   ª   ª   ª   +---array
ª   ª   ª   ª   +---async
ª   ª   ª   ª   +---path
ª   ª   ª   +---watch
ª   ª   +---node_modules
ª   ª       +---cosmiconfig
ª   ª       ª   +---dist
ª   ª       +---fs-extra
ª   ª       ª   +---lib
ª   ª       ª       +---copy
ª   ª       ª       +---copy-sync
ª   ª       ª       +---empty
ª   ª       ª       +---ensure
ª   ª       ª       +---fs
ª   ª       ª       +---json
ª   ª       ª       +---mkdirs
ª   ª       ª       +---move
ª   ª       ª       +---move-sync
ª   ª       ª       +---output
ª   ª       ª       +---path-exists
ª   ª       ª       +---remove
ª   ª       ª       +---util
ª   ª       +---schema-utils
ª   ª       ª   +---declarations
ª   ª       ª   ª   +---keywords
ª   ª       ª   ª   +---util
ª   ª       ª   +---dist
ª   ª       ª       +---keywords
ª   ª       ª       +---util
ª   ª       +---tapable
ª   ª           +---lib
ª   +---form-data
ª   ª   +---lib
ª   +---forwarded
ª   +---fraction.js
ª   +---fresh
ª   +---fs-extra
ª   ª   +---lib
ª   ª       +---copy
ª   ª       +---empty
ª   ª       +---ensure
ª   ª       +---fs
ª   ª       +---json
ª   ª       +---mkdirs
ª   ª       +---move
ª   ª       +---output-file
ª   ª       +---path-exists
ª   ª       +---remove
ª   ª       +---util
ª   +---fs-monkey
ª   ª   +---docs
ª   ª   ª   +---api
ª   ª   +---lib
ª   ª       +---util
ª   +---fs.realpath
ª   +---function-bind
ª   ª   +---.github
ª   ª   +---test
ª   +---function.prototype.name
ª   ª   +---.github
ª   ª   +---helpers
ª   ª   +---test
ª   +---functions-have-names
ª   ª   +---.github
ª   ª   +---test
ª   +---gensync
ª   ª   +---test
ª   +---get-caller-file
ª   +---get-intrinsic
ª   ª   +---.github
ª   ª   +---test
ª   +---get-own-enumerable-property-symbols
ª   ª   +---lib
ª   +---get-package-type
ª   +---get-proto
ª   ª   +---.github
ª   ª   +---test
ª   +---get-stream
ª   +---get-symbol-description
ª   ª   +---.github
ª   ª   +---test
ª   +---glob
ª   +---glob-parent
ª   +---glob-to-regexp
ª   +---global-modules
ª   +---global-prefix
ª   ª   +---node_modules
ª   ª       +---.bin
ª   ª       +---which
ª   ª           +---bin
ª   +---globals
ª   +---globalthis
ª   ª   +---test
ª   +---globby
ª   +---gopd
ª   ª   +---.github
ª   ª   +---test
ª   +---graceful-fs
ª   +---graphemer
ª   ª   +---lib
ª   +---gzip-size
ª   +---handle-thing
ª   ª   +---lib
ª   ª   +---test
ª   +---harmony-reflect
ª   +---has-bigints
ª   ª   +---.github
ª   ª   +---test
ª   +---has-flag
ª   +---has-property-descriptors
ª   ª   +---.github
ª   ª   +---test
ª   +---has-proto
ª   ª   +---.github
ª   ª   +---test
ª   +---has-symbols
ª   ª   +---.github
ª   ª   +---test
ª   ª       +---shams
ª   +---has-tostringtag
ª   ª   +---.github
ª   ª   +---test
ª   ª       +---shams
ª   +---hasown
ª   ª   +---.github
ª   +---he
ª   ª   +---bin
ª   ª   +---man
ª   +---hoopy
ª   +---hpack.js
ª   ª   +---bin
ª   ª   +---lib
ª   ª   ª   +---hpack
ª   ª   +---node_modules
ª   ª   ª   +---isarray
ª   ª   ª   +---readable-stream
ª   ª   ª   ª   +---doc
ª   ª   ª   ª   ª   +---wg-meetings
ª   ª   ª   ª   +---lib
ª   ª   ª   ª       +---internal
ª   ª   ª   ª           +---streams
ª   ª   ª   +---safe-buffer
ª   ª   ª   +---string_decoder
ª   ª   ª       +---lib
ª   ª   +---test
ª   ª   +---tools
ª   +---html-encoding-sniffer
ª   ª   +---lib
ª   +---html-entities
ª   ª   +---dist
ª   ª   ª   +---commonjs
ª   ª   ª   +---esm
ª   ª   +---src
ª   +---html-escaper
ª   ª   +---cjs
ª   ª   +---esm
ª   ª   +---test
ª   +---html-minifier-terser
ª   ª   +---src
ª   +---html-webpack-plugin
ª   ª   +---lib
ª   +---htmlparser2
ª   ª   +---lib
ª   +---http-deceiver
ª   ª   +---lib
ª   ª   +---test
ª   +---http-errors
ª   +---http-parser-js
ª   +---http-proxy
ª   ª   +---lib
ª   ª       +---http-proxy
ª   ª           +---passes
ª   +---http-proxy-agent
ª   ª   +---dist
ª   +---http-proxy-middleware
ª   ª   +---dist
ª   ª       +---handlers
ª   +---https-proxy-agent
ª   ª   +---dist
ª   +---human-signals
ª   ª   +---build
ª   ª       +---src
ª   +---iconv-lite
ª   ª   +---.github
ª   ª   +---.idea
ª   ª   ª   +---codeStyles
ª   ª   ª   +---inspectionProfiles
ª   ª   +---encodings
ª   ª   ª   +---tables
ª   ª   +---lib
ª   +---icss-utils
ª   ª   +---src
ª   +---idb
ª   ª   +---build
ª   +---identity-obj-proxy
ª   ª   +---src
ª   ª       +---test-redirections
ª   ª       +---__tests__
ª   +---ignore
ª   +---immer
ª   ª   +---compat
ª   ª   ª   +---pre-3.7
ª   ª   ª       +---dist
ª   ª   +---dist
ª   ª   ª   +---core
ª   ª   ª   +---plugins
ª   ª   ª   +---types
ª   ª   ª   +---utils
ª   ª   +---src
ª   ª       +---core
ª   ª       +---plugins
ª   ª       +---types
ª   ª       +---utils
ª   +---import-fresh
ª   ª   +---node_modules
ª   ª       +---resolve-from
ª   +---import-local
ª   ª   +---fixtures
ª   +---imurmurhash
ª   +---indent-string
ª   +---inflight
ª   +---inherits
ª   +---ini
ª   +---internal-slot
ª   ª   +---.github
ª   ª   +---test
ª   +---ipaddr.js
ª   ª   +---lib
ª   +---is-array-buffer
ª   ª   +---.github
ª   ª   +---test
ª   +---is-arrayish
ª   +---is-async-function
ª   ª   +---test
ª   +---is-bigint
ª   ª   +---.github
ª   ª   +---test
ª   +---is-binary-path
ª   +---is-boolean-object
ª   ª   +---.github
ª   ª   +---test
ª   +---is-callable
ª   ª   +---.github
ª   ª   +---test
ª   +---is-core-module
ª   ª   +---test
ª   +---is-data-view
ª   ª   +---.github
ª   ª   +---test
ª   +---is-date-object
ª   ª   +---.github
ª   ª   +---test
ª   +---is-docker
ª   +---is-extglob
ª   +---is-finalizationregistry
ª   ª   +---.github
ª   ª   +---test
ª   +---is-fullwidth-code-point
ª   +---is-generator-fn
ª   +---is-generator-function
ª   ª   +---test
ª   +---is-glob
ª   +---is-map
ª   ª   +---.github
ª   ª   +---test
ª   +---is-module
ª   +---is-number
ª   +---is-number-object
ª   ª   +---.github
ª   ª   +---test
ª   +---is-obj
ª   +---is-path-inside
ª   +---is-plain-obj
ª   +---is-potential-custom-element-name
ª   +---is-regex
ª   ª   +---test
ª   +---is-regexp
ª   +---is-root
ª   +---is-set
ª   ª   +---.github
ª   ª   +---test
ª   +---is-shared-array-buffer
ª   ª   +---.github
ª   ª   +---test
ª   +---is-stream
ª   +---is-string
ª   ª   +---.github
ª   ª   +---test
ª   +---is-symbol
ª   ª   +---.github
ª   ª   +---test
ª   +---is-typed-array
ª   ª   +---.github
ª   ª   +---test
ª   +---is-typedarray
ª   +---is-weakmap
ª   ª   +---.github
ª   ª   +---test
ª   +---is-weakref
ª   ª   +---.github
ª   ª   +---test
ª   +---is-weakset
ª   ª   +---.github
ª   ª   +---test
ª   +---is-wsl
ª   +---isarray
ª   +---isexe
ª   ª   +---test
ª   +---istanbul-lib-coverage
ª   ª   +---lib
ª   +---istanbul-lib-instrument
ª   ª   +---node_modules
ª   ª   ª   +---.bin
ª   ª   ª   +---semver
ª   ª   ª       +---bin
ª   ª   +---src
ª   +---istanbul-lib-report
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---make-dir
ª   +---istanbul-lib-source-maps
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---source-map
ª   ª           +---dist
ª   ª           +---lib
ª   +---istanbul-reports
ª   ª   +---lib
ª   ª       +---clover
ª   ª       +---cobertura
ª   ª       +---html
ª   ª       ª   +---assets
ª   ª       ª       +---vendor
ª   ª       +---html-spa
ª   ª       ª   +---assets
ª   ª       ª   +---src
ª   ª       +---json
ª   ª       +---json-summary
ª   ª       +---lcov
ª   ª       +---lcovonly
ª   ª       +---none
ª   ª       +---teamcity
ª   ª       +---text
ª   ª       +---text-lcov
ª   ª       +---text-summary
ª   +---iterator.prototype
ª   ª   +---.github
ª   ª   +---test
ª   +---jackspeak
ª   ª   +---dist
ª   ª       +---commonjs
ª   ª       +---esm
ª   +---jake
ª   ª   +---bin
ª   ª   +---lib
ª   ª   ª   +---task
ª   ª   ª   +---utils
ª   ª   +---test
ª   ª       +---integration
ª   ª       ª   +---jakelib
ª   ª       +---unit
ª   +---jest
ª   ª   +---bin
ª   ª   +---build
ª   +---jest-changed-files
ª   ª   +---build
ª   +---jest-circus
ª   ª   +---build
ª   ª       +---legacy-code-todo-rewrite
ª   +---jest-cli
ª   ª   +---bin
ª   ª   +---build
ª   ª       +---cli
ª   ª       +---init
ª   +---jest-config
ª   ª   +---build
ª   +---jest-diff
ª   ª   +---build
ª   +---jest-docblock
ª   ª   +---build
ª   +---jest-each
ª   ª   +---build
ª   ª       +---table
ª   +---jest-environment-jsdom
ª   ª   +---build
ª   +---jest-environment-node
ª   ª   +---build
ª   +---jest-get-type
ª   ª   +---build
ª   +---jest-haste-map
ª   ª   +---build
ª   ª       +---crawlers
ª   ª       +---lib
ª   ª       +---watchers
ª   +---jest-jasmine2
ª   ª   +---build
ª   ª       +---jasmine
ª   +---jest-leak-detector
ª   ª   +---build
ª   +---jest-matcher-utils
ª   ª   +---build
ª   +---jest-message-util
ª   ª   +---build
ª   +---jest-mock
ª   ª   +---build
ª   +---jest-pnp-resolver
ª   +---jest-regex-util
ª   ª   +---build
ª   +---jest-resolve
ª   ª   +---build
ª   +---jest-resolve-dependencies
ª   ª   +---build
ª   +---jest-runner
ª   ª   +---build
ª   +---jest-runtime
ª   ª   +---build
ª   +---jest-serializer
ª   ª   +---build
ª   +---jest-snapshot
ª   ª   +---build
ª   +---jest-util
ª   ª   +---build
ª   +---jest-validate
ª   ª   +---build
ª   +---jest-watch-typeahead
ª   ª   +---build
ª   ª   ª   +---file_name_plugin
ª   ª   ª   +---lib
ª   ª   ª   +---test_name_plugin
ª   ª   ª   +---types
ª   ª   +---node_modules
ª   ª       +---@jest
ª   ª       ª   +---console
ª   ª       ª   ª   +---build
ª   ª       ª   ª   +---node_modules
ª   ª       ª   ª       +---slash
ª   ª       ª   +---test-result
ª   ª       ª   ª   +---build
ª   ª       ª   +---types
ª   ª       ª       +---build
ª   ª       +---@types
ª   ª       ª   +---yargs
ª   ª       +---ansi-styles
ª   ª       +---emittery
ª   ª       +---jest-message-util
ª   ª       ª   +---build
ª   ª       ª   +---node_modules
ª   ª       ª       +---slash
ª   ª       +---jest-regex-util
ª   ª       ª   +---build
ª   ª       +---jest-util
ª   ª       ª   +---build
ª   ª       +---jest-watcher
ª   ª       ª   +---build
ª   ª       ª   ª   +---lib
ª   ª       ª   +---node_modules
ª   ª       ª       +---string-length
ª   ª       ª       +---strip-ansi
ª   ª       +---pretty-format
ª   ª       ª   +---build
ª   ª       ª       +---plugins
ª   ª       ª           +---lib
ª   ª       +---react-is
ª   ª       ª   +---cjs
ª   ª       ª   +---umd
ª   ª       +---slash
ª   ª       +---string-length
ª   ª       ª   +---node_modules
ª   ª       ª       +---char-regex
ª   ª       +---strip-ansi
ª   ª           +---node_modules
ª   ª               +---ansi-regex
ª   +---jest-watcher
ª   ª   +---build
ª   ª       +---lib
ª   +---jest-worker
ª   ª   +---build
ª   ª   ª   +---base
ª   ª   ª   +---workers
ª   ª   +---node_modules
ª   ª       +---supports-color
ª   +---jiti
ª   ª   +---bin
ª   ª   +---dist
ª   ª   ª   +---plugins
ª   ª   +---lib
ª   +---js-tokens
ª   +---js-yaml
ª   ª   +---bin
ª   ª   +---dist
ª   ª   +---lib
ª   ª       +---js-yaml
ª   ª           +---schema
ª   ª           +---type
ª   ª               +---js
ª   +---jsdom
ª   ª   +---lib
ª   ª       +---jsdom
ª   ª           +---browser
ª   ª           ª   +---parser
ª   ª           ª   +---resources
ª   ª           +---level2
ª   ª           +---level3
ª   ª           +---living
ª   ª               +---aborting
ª   ª               +---attributes
ª   ª               +---constraint-validation
ª   ª               +---cssom
ª   ª               +---custom-elements
ª   ª               +---domparsing
ª   ª               +---events
ª   ª               +---fetch
ª   ª               +---file-api
ª   ª               +---generated
ª   ª               +---helpers
ª   ª               ª   +---svg
ª   ª               +---hr-time
ª   ª               +---mutation-observer
ª   ª               +---navigator
ª   ª               +---nodes
ª   ª               +---range
ª   ª               +---selection
ª   ª               +---svg
ª   ª               +---traversal
ª   ª               +---websockets
ª   ª               +---webstorage
ª   ª               +---window
ª   ª               +---xhr
ª   +---jsesc
ª   ª   +---bin
ª   ª   +---man
ª   +---json-buffer
ª   ª   +---test
ª   +---json-parse-even-better-errors
ª   +---json-schema
ª   ª   +---lib
ª   +---json-schema-traverse
ª   ª   +---spec
ª   ª       +---fixtures
ª   +---json-stable-stringify-without-jsonify
ª   ª   +---example
ª   ª   +---test
ª   +---json5
ª   ª   +---dist
ª   ª   +---lib
ª   +---jsonfile
ª   +---jsonpath
ª   ª   +---bin
ª   ª   +---generated
ª   ª   +---include
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª   ª   +---.bin
ª   ª   ª   +---esprima
ª   ª   ª       +---bin
ª   ª   ª       +---test
ª   ª   +---test
ª   ª       +---data
ª   +---jsonpointer
ª   +---jsx-ast-utils
ª   ª   +---.github
ª   ª   +---lib
ª   ª   ª   +---values
ª   ª   ª       +---expressions
ª   ª   +---src
ª   ª   ª   +---values
ª   ª   ª       +---expressions
ª   ª   +---__tests__
ª   ª       +---src
ª   +---keyv
ª   ª   +---src
ª   +---kind-of
ª   +---kleur
ª   +---klona
ª   ª   +---dist
ª   ª   +---full
ª   ª   +---json
ª   ª   +---lite
ª   +---language-subtag-registry
ª   ª   +---data
ª   ª       +---json
ª   +---language-tags
ª   ª   +---lib
ª   +---launch-editor
ª   ª   +---editor-info
ª   +---leven
ª   +---levn
ª   ª   +---lib
ª   +---lilconfig
ª   ª   +---dist
ª   +---lines-and-columns
ª   ª   +---build
ª   +---loader-runner
ª   ª   +---lib
ª   +---loader-utils
ª   ª   +---lib
ª   ª       +---hash
ª   +---locate-path
ª   +---lodash
ª   ª   +---fp
ª   +---lodash.debounce
ª   +---lodash.memoize
ª   +---lodash.merge
ª   +---lodash.sortby
ª   +---lodash.uniq
ª   +---loose-envify
ª   +---lower-case
ª   ª   +---dist
ª   ª   +---dist.es2015
ª   +---lru-cache
ª   +---lz-string
ª   ª   +---bin
ª   ª   +---libs
ª   ª   +---reference
ª   ª   +---tests
ª   ª   ª   +---lib
ª   ª   ª       +---jasmine-1.3.1
ª   ª   +---typings
ª   +---magic-string
ª   ª   +---dist
ª   +---make-dir
ª   ª   +---node_modules
ª   ª       +---.bin
ª   ª       +---semver
ª   ª           +---bin
ª   +---makeerror
ª   ª   +---lib
ª   +---math-intrinsics
ª   ª   +---.github
ª   ª   +---constants
ª   ª   +---test
ª   +---mdn-data
ª   ª   +---api
ª   ª   +---css
ª   ª   +---l10n
ª   +---media-typer
ª   +---memfs
ª   ª   +---lib
ª   ª       +---internal
ª   +---merge-descriptors
ª   +---merge-stream
ª   +---merge2
ª   +---methods
ª   +---micromatch
ª   +---mime
ª   ª   +---src
ª   +---mime-db
ª   +---mime-types
ª   +---mimic-fn
ª   +---min-indent
ª   +---mini-css-extract-plugin
ª   ª   +---dist
ª   ª   ª   +---hmr
ª   ª   +---types
ª   ª       +---hmr
ª   +---minimalistic-assert
ª   +---minimatch
ª   +---minimist
ª   ª   +---.github
ª   ª   +---example
ª   ª   +---test
ª   +---minipass
ª   ª   +---dist
ª   ª       +---commonjs
ª   ª       +---esm
ª   +---mkdirp
ª   ª   +---bin
ª   +---ms
ª   +---multicast-dns
ª   +---mz
ª   +---nanoid
ª   ª   +---async
ª   ª   +---bin
ª   ª   +---non-secure
ª   ª   +---url-alphabet
ª   +---natural-compare
ª   +---natural-compare-lite
ª   +---negotiator
ª   ª   +---lib
ª   +---neo-async
ª   +---no-case
ª   ª   +---dist
ª   ª   +---dist.es2015
ª   +---node-forge
ª   ª   +---dist
ª   ª   +---flash
ª   ª   ª   +---swf
ª   ª   +---lib
ª   +---node-int64
ª   +---node-releases
ª   ª   +---data
ª   ª       +---processed
ª   ª       +---release-schedule
ª   +---normalize-path
ª   +---normalize-range
ª   +---normalize-url
ª   +---npm-run-path
ª   +---nth-check
ª   ª   +---lib
ª   ª       +---esm
ª   +---nwsapi
ª   ª   +---dist
ª   ª   +---src
ª   ª       +---modules
ª   +---object-assign
ª   +---object-hash
ª   ª   +---dist
ª   +---object-inspect
ª   ª   +---.github
ª   ª   +---example
ª   ª   +---test
ª   ª       +---browser
ª   +---object-keys
ª   ª   +---test
ª   +---object.assign
ª   ª   +---.github
ª   ª   +---dist
ª   ª   +---test
ª   +---object.entries
ª   ª   +---test
ª   +---object.fromentries
ª   ª   +---test
ª   +---object.getownpropertydescriptors
ª   ª   +---test
ª   +---object.groupby
ª   ª   +---.github
ª   ª   +---test
ª   +---object.values
ª   ª   +---test
ª   +---obuf
ª   ª   +---test
ª   +---on-finished
ª   +---on-headers
ª   +---once
ª   +---onetime
ª   +---open
ª   +---optionator
ª   ª   +---lib
ª   +---own-keys
ª   ª   +---.github
ª   ª   +---test
ª   +---p-limit
ª   +---p-locate
ª   +---p-retry
ª   +---p-try
ª   +---package-json-from-dist
ª   ª   +---dist
ª   ª       +---commonjs
ª   ª       +---esm
ª   +---param-case
ª   ª   +---dist
ª   ª   +---dist.es2015
ª   +---parent-module
ª   +---parse-json
ª   +---parse5
ª   ª   +---lib
ª   ª       +---common
ª   ª       +---extensions
ª   ª       ª   +---error-reporting
ª   ª       ª   +---location-info
ª   ª       ª   +---position-tracking
ª   ª       +---parser
ª   ª       +---serializer
ª   ª       +---tokenizer
ª   ª       +---tree-adapters
ª   ª       +---utils
ª   +---parseurl
ª   +---pascal-case
ª   ª   +---dist
ª   ª   +---dist.es2015
ª   +---path-exists
ª   +---path-is-absolute
ª   +---path-key
ª   +---path-parse
ª   +---path-scurry
ª   ª   +---dist
ª   ª   ª   +---commonjs
ª   ª   ª   +---esm
ª   ª   +---node_modules
ª   ª       +---lru-cache
ª   ª           +---dist
ª   ª               +---commonjs
ª   ª               +---esm
ª   +---path-to-regexp
ª   +---path-type
ª   +---performance-now
ª   ª   +---lib
ª   ª   +---src
ª   ª   +---test
ª   ª       +---scripts
ª   +---picocolors
ª   +---picomatch
ª   ª   +---lib
ª   +---pify
ª   +---pirates
ª   ª   +---lib
ª   +---pkg-dir
ª   +---pkg-up
ª   ª   +---node_modules
ª   ª       +---find-up
ª   ª       +---locate-path
ª   ª       +---p-locate
ª   ª       +---path-exists
ª   +---possible-typed-array-names
ª   ª   +---.github
ª   ª   +---test
ª   +---postcss
ª   ª   +---lib
ª   +---postcss-attribute-case-insensitive
ª   ª   +---dist
ª   +---postcss-browser-comments
ª   +---postcss-calc
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   ª   +---__tests__
ª   ª   +---types
ª   ª       +---lib
ª   +---postcss-clamp
ª   +---postcss-color-functional-notation
ª   ª   +---dist
ª   +---postcss-color-hex-alpha
ª   ª   +---dist
ª   +---postcss-color-rebeccapurple
ª   ª   +---dist
ª   +---postcss-colormin
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-convert-values
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   +---types
ª   ª       +---lib
ª   +---postcss-custom-media
ª   ª   +---dist
ª   +---postcss-custom-properties
ª   ª   +---dist
ª   ª       +---lib
ª   +---postcss-custom-selectors
ª   ª   +---dist
ª   +---postcss-dir-pseudo-class
ª   ª   +---dist
ª   +---postcss-discard-comments
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   +---types
ª   ª       +---lib
ª   +---postcss-discard-duplicates
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-discard-empty
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-discard-overridden
ª   ª   +---src
ª   +---postcss-double-position-gradients
ª   ª   +---dist
ª   +---postcss-env-function
ª   ª   +---dist
ª   +---postcss-flexbugs-fixes
ª   ª   +---bugs
ª   +---postcss-focus-visible
ª   ª   +---dist
ª   +---postcss-focus-within
ª   ª   +---dist
ª   +---postcss-font-variant
ª   +---postcss-gap-properties
ª   ª   +---dist
ª   +---postcss-image-set-function
ª   ª   +---dist
ª   ª       +---lib
ª   +---postcss-import
ª   ª   +---lib
ª   +---postcss-initial
ª   ª   +---.github
ª   ª   ª   +---workflows
ª   ª   +---.vscode
ª   ª   +---lib
ª   ª   +---~
ª   ª       +---.config
ª   ª           +---configstore
ª   +---postcss-js
ª   +---postcss-lab-function
ª   ª   +---dist
ª   ª       +---css-color-4
ª   +---postcss-load-config
ª   ª   +---node_modules
ª   ª   ª   +---.bin
ª   ª   ª   +---lilconfig
ª   ª   ª   ª   +---src
ª   ª   ª   +---yaml
ª   ª   ª       +---browser
ª   ª   ª       ª   +---dist
ª   ª   ª       ª       +---compose
ª   ª   ª       ª       +---doc
ª   ª   ª       ª       +---nodes
ª   ª   ª       ª       +---parse
ª   ª   ª       ª       +---schema
ª   ª   ª       ª       ª   +---common
ª   ª   ª       ª       ª   +---core
ª   ª   ª       ª       ª   +---json
ª   ª   ª       ª       ª   +---yaml-1.1
ª   ª   ª       ª       +---stringify
ª   ª   ª       +---dist
ª   ª   ª           +---compose
ª   ª   ª           +---doc
ª   ª   ª           +---nodes
ª   ª   ª           +---parse
ª   ª   ª           +---schema
ª   ª   ª           ª   +---common
ª   ª   ª           ª   +---core
ª   ª   ª           ª   +---json
ª   ª   ª           ª   +---yaml-1.1
ª   ª   ª           +---stringify
ª   ª   +---src
ª   +---postcss-loader
ª   ª   +---dist
ª   +---postcss-logical
ª   ª   +---dist
ª   +---postcss-media-minmax
ª   +---postcss-merge-longhand
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   ª       +---decl
ª   ª   +---types
ª   ª       +---lib
ª   ª           +---decl
ª   +---postcss-merge-rules
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   +---types
ª   ª       +---lib
ª   +---postcss-minify-font-values
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   +---types
ª   ª       +---lib
ª   +---postcss-minify-gradients
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-minify-params
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-minify-selectors
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   +---types
ª   ª       +---lib
ª   +---postcss-modules-extract-imports
ª   ª   +---src
ª   +---postcss-modules-local-by-default
ª   ª   +---node_modules
ª   ª   ª   +---postcss-selector-parser
ª   ª   ª       +---dist
ª   ª   ª           +---selectors
ª   ª   ª           +---util
ª   ª   +---src
ª   +---postcss-modules-scope
ª   ª   +---node_modules
ª   ª   ª   +---postcss-selector-parser
ª   ª   ª       +---dist
ª   ª   ª           +---selectors
ª   ª   ª           +---util
ª   ª   +---src
ª   +---postcss-modules-values
ª   ª   +---src
ª   +---postcss-nested
ª   +---postcss-nesting
ª   ª   +---dist
ª   ª       +---lib
ª   ª           +---merge-selectors
ª   +---postcss-normalize
ª   +---postcss-normalize-charset
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-normalize-display-values
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   +---types
ª   ª       +---lib
ª   +---postcss-normalize-positions
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-normalize-repeat-style
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   +---types
ª   ª       +---lib
ª   +---postcss-normalize-string
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-normalize-timing-functions
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-normalize-unicode
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-normalize-url
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-normalize-whitespace
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-opacity-percentage
ª   +---postcss-ordered-values
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   ª   +---rules
ª   ª   +---types
ª   ª       +---lib
ª   ª       +---rules
ª   +---postcss-overflow-shorthand
ª   ª   +---dist
ª   +---postcss-page-break
ª   +---postcss-place
ª   ª   +---dist
ª   +---postcss-preset-env
ª   ª   +---dist
ª   +---postcss-pseudo-class-any-link
ª   ª   +---dist
ª   +---postcss-reduce-initial
ª   ª   +---src
ª   ª   ª   +---data
ª   ª   +---types
ª   +---postcss-reduce-transforms
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-replace-overflow-wrap
ª   +---postcss-selector-not
ª   ª   +---dist
ª   +---postcss-selector-parser
ª   ª   +---dist
ª   ª       +---selectors
ª   ª       +---util
ª   +---postcss-svgo
ª   ª   +---node_modules
ª   ª   ª   +---.bin
ª   ª   ª   +---commander
ª   ª   ª   ª   +---typings
ª   ª   ª   +---css-tree
ª   ª   ª   ª   +---data
ª   ª   ª   ª   +---dist
ª   ª   ª   ª   +---lib
ª   ª   ª   ª       +---common
ª   ª   ª   ª       +---convertor
ª   ª   ª   ª       +---definition-syntax
ª   ª   ª   ª       +---generator
ª   ª   ª   ª       +---lexer
ª   ª   ª   ª       +---parser
ª   ª   ª   ª       +---syntax
ª   ª   ª   ª       ª   +---atrule
ª   ª   ª   ª       ª   +---config
ª   ª   ª   ª       ª   +---function
ª   ª   ª   ª       ª   +---node
ª   ª   ª   ª       ª   +---pseudo
ª   ª   ª   ª       ª   ª   +---common
ª   ª   ª   ª       ª   +---scope
ª   ª   ª   ª       +---tokenizer
ª   ª   ª   ª       +---utils
ª   ª   ª   ª       +---walker
ª   ª   ª   +---mdn-data
ª   ª   ª   ª   +---api
ª   ª   ª   ª   +---css
ª   ª   ª   ª   +---l10n
ª   ª   ª   +---source-map
ª   ª   ª   ª   +---dist
ª   ª   ª   ª   +---lib
ª   ª   ª   +---svgo
ª   ª   ª       +---bin
ª   ª   ª       +---dist
ª   ª   ª       +---lib
ª   ª   ª       ª   +---svgo
ª   ª   ª       +---plugins
ª   ª   +---src
ª   ª   ª   +---lib
ª   ª   +---types
ª   ª       +---lib
ª   +---postcss-unique-selectors
ª   ª   +---src
ª   ª   +---types
ª   +---postcss-value-parser
ª   ª   +---lib
ª   +---prelude-ls
ª   ª   +---lib
ª   +---pretty-bytes
ª   +---pretty-error
ª   ª   +---.github
ª   ª   ª   +---workflows
ª   ª   +---lib
ª   ª   +---src
ª   ª   +---test
ª   +---pretty-format
ª   ª   +---build
ª   ª   ª   +---plugins
ª   ª   ª       +---lib
ª   ª   +---node_modules
ª   ª       +---ansi-styles
ª   +---process-nextick-args
ª   +---promise
ª   ª   +---domains
ª   ª   +---lib
ª   ª   +---setimmediate
ª   ª   +---src
ª   +---prompts
ª   ª   +---dist
ª   ª   ª   +---dateparts
ª   ª   ª   +---elements
ª   ª   ª   +---util
ª   ª   +---lib
ª   ª       +---dateparts
ª   ª       +---elements
ª   ª       +---util
ª   +---prop-types
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---react-is
ª   ª           +---cjs
ª   ª           +---umd
ª   +---proxy-addr
ª   ª   +---node_modules
ª   ª       +---ipaddr.js
ª   ª           +---lib
ª   +---psl
ª   ª   +---data
ª   ª   +---dist
ª   ª   +---types
ª   +---punycode
ª   +---q
ª   +---qs
ª   ª   +---.github
ª   ª   +---dist
ª   ª   +---lib
ª   ª   +---test
ª   +---querystringify
ª   +---queue-microtask
ª   +---raf
ª   +---randombytes
ª   +---range-parser
ª   +---raw-body
ª   ª   +---node_modules
ª   ª       +---iconv-lite
ª   ª           +---encodings
ª   ª           ª   +---tables
ª   ª           +---lib
ª   +---react
ª   ª   +---cjs
ª   +---react-app-polyfill
ª   ª   +---node_modules
ª   ª       +---regenerator-runtime
ª   +---react-dev-utils
ª   ª   +---node_modules
ª   ª       +---find-up
ª   ª       +---loader-utils
ª   ª       ª   +---lib
ª   ª       ª       +---hash
ª   ª       +---locate-path
ª   ª       +---p-limit
ª   ª       +---p-locate
ª   +---react-dom
ª   ª   +---cjs
ª   +---react-error-overlay
ª   ª   +---lib
ª   +---react-is
ª   ª   +---cjs
ª   ª   +---umd
ª   +---react-refresh
ª   ª   +---cjs
ª   +---react-scripts
ª   ª   +---bin
ª   ª   +---config
ª   ª   ª   +---jest
ª   ª   ª   +---webpack
ª   ª   ª       +---persistentCache
ª   ª   +---lib
ª   ª   +---scripts
ª   ª   ª   +---utils
ª   ª   +---template
ª   ª   +---template-typescript
ª   +---read-cache
ª   +---readable-stream
ª   ª   +---lib
ª   ª       +---internal
ª   ª           +---streams
ª   +---readdirp
ª   +---recursive-readdir
ª   +---redent
ª   +---reflect.getprototypeof
ª   ª   +---test
ª   +---regenerate
ª   +---regenerate-unicode-properties
ª   ª   +---Binary_Property
ª   ª   +---General_Category
ª   ª   +---Property_of_Strings
ª   ª   +---Script
ª   ª   +---Script_Extensions
ª   +---regenerator-runtime
ª   +---regenerator-transform
ª   ª   +---lib
ª   ª   +---src
ª   +---regex-parser
ª   ª   +---lib
ª   ª       +---typings
ª   +---regexp.prototype.flags
ª   ª   +---test
ª   +---regexpu-core
ª   ª   +---data
ª   +---regjsgen
ª   +---regjsparser
ª   ª   +---bin
ª   ª   +---node_modules
ª   ª       +---.bin
ª   ª       +---jsesc
ª   ª           +---bin
ª   ª           +---man
ª   +---relateurl
ª   ª   +---lib
ª   ª       +---parse
ª   ª       +---relate
ª   ª       +---util
ª   +---renderkid
ª   ª   +---docs
ª   ª   ª   +---images
ª   ª   +---lib
ª   ª       +---ansiPainter
ª   ª       +---layout
ª   ª       ª   +---block
ª   ª       ª       +---blockAppendor
ª   ª       ª       +---blockPrependor
ª   ª       ª       +---lineAppendor
ª   ª       ª       +---linePrependor
ª   ª       ª       +---lineWrapper
ª   ª       +---renderKid
ª   ª           +---styleApplier
ª   ª           +---styles
ª   ª               +---rule
ª   ª                   +---declarationBlock
ª   +---require-directory
ª   +---require-from-string
ª   +---requires-port
ª   +---resolve
ª   ª   +---.github
ª   ª   +---bin
ª   ª   +---example
ª   ª   +---lib
ª   ª   +---test
ª   ª       +---dotdot
ª   ª       ª   +---abc
ª   ª       +---module_dir
ª   ª       ª   +---xmodules
ª   ª       ª   ª   +---aaa
ª   ª       ª   +---ymodules
ª   ª       ª   ª   +---aaa
ª   ª       ª   +---zmodules
ª   ª       ª       +---bbb
ª   ª       +---node_path
ª   ª       ª   +---x
ª   ª       ª   ª   +---aaa
ª   ª       ª   ª   +---ccc
ª   ª       ª   +---y
ª   ª       ª       +---bbb
ª   ª       ª       +---ccc
ª   ª       +---pathfilter
ª   ª       ª   +---deep_ref
ª   ª       +---precedence
ª   ª       ª   +---aaa
ª   ª       ª   +---bbb
ª   ª       +---resolver
ª   ª       ª   +---baz
ª   ª       ª   +---browser_field
ª   ª       ª   +---dot_main
ª   ª       ª   +---dot_slash_main
ª   ª       ª   +---false_main
ª   ª       ª   +---incorrect_main
ª   ª       ª   +---invalid_main
ª   ª       ª   +---multirepo
ª   ª       ª   ª   +---packages
ª   ª       ª   ª       +---package-a
ª   ª       ª   ª       +---package-b
ª   ª       ª   +---nested_symlinks
ª   ª       ª   ª   +---mylib
ª   ª       ª   +---other_path
ª   ª       ª   ª   +---lib
ª   ª       ª   +---quux
ª   ª       ª   ª   +---foo
ª   ª       ª   +---same_names
ª   ª       ª   ª   +---foo
ª   ª       ª   +---symlinked
ª   ª       ª   ª   +---package
ª   ª       ª   ª   +---_
ª   ª       ª   ª       +---node_modules
ª   ª       ª   ª       +---symlink_target
ª   ª       ª   +---without_basedir
ª   ª       +---shadowed_core
ª   ª           +---node_modules
ª   ª               +---util
ª   +---resolve-cwd
ª   +---resolve-from
ª   +---resolve-url-loader
ª   ª   +---docs
ª   ª   +---lib
ª   ª   ª   +---engine
ª   ª   ª   +---join-function
ª   ª   +---node_modules
ª   ª       +---convert-source-map
ª   ª       +---picocolors
ª   ª       +---postcss
ª   ª       ª   +---lib
ª   ª       +---source-map
ª   ª           +---dist
ª   ª           +---lib
ª   +---resolve.exports
ª   ª   +---dist
ª   +---retry
ª   ª   +---example
ª   ª   +---lib
ª   +---reusify
ª   ª   +---.github
ª   ª   ª   +---workflows
ª   ª   +---benchmarks
ª   +---rimraf
ª   +---rollup
ª   ª   +---dist
ª   ª       +---bin
ª   ª       +---es
ª   ª       ª   +---shared
ª   ª       +---shared
ª   +---rollup-plugin-terser
ª   ª   +---node_modules
ª   ª       +---jest-worker
ª   ª       ª   +---build
ª   ª       ª       +---base
ª   ª       ª       +---workers
ª   ª       +---serialize-javascript
ª   ª           +---.vscode
ª   +---run-parallel
ª   +---safe-array-concat
ª   ª   +---.github
ª   ª   +---test
ª   +---safe-buffer
ª   +---safe-push-apply
ª   ª   +---.github
ª   ª   +---test
ª   +---safe-regex-test
ª   ª   +---.github
ª   ª   +---test
ª   +---safer-buffer
ª   +---sanitize.css
ª   +---sass-loader
ª   ª   +---dist
ª   +---sax
ª   ª   +---lib
ª   +---saxes
ª   +---scheduler
ª   ª   +---cjs
ª   +---schema-utils
ª   ª   +---declarations
ª   ª   ª   +---keywords
ª   ª   ª   +---util
ª   ª   +---dist
ª   ª   ª   +---keywords
ª   ª   ª   +---util
ª   ª   +---node_modules
ª   ª       +---ajv
ª   ª       ª   +---dist
ª   ª       ª   ª   +---compile
ª   ª       ª   ª   ª   +---codegen
ª   ª       ª   ª   ª   +---jtd
ª   ª       ª   ª   ª   +---validate
ª   ª       ª   ª   +---refs
ª   ª       ª   ª   ª   +---json-schema-2019-09
ª   ª       ª   ª   ª   ª   +---meta
ª   ª       ª   ª   ª   +---json-schema-2020-12
ª   ª       ª   ª   ª       +---meta
ª   ª       ª   ª   +---runtime
ª   ª       ª   ª   +---standalone
ª   ª       ª   ª   +---types
ª   ª       ª   ª   +---vocabularies
ª   ª       ª   ª       +---applicator
ª   ª       ª   ª       +---core
ª   ª       ª   ª       +---discriminator
ª   ª       ª   ª       +---dynamic
ª   ª       ª   ª       +---format
ª   ª       ª   ª       +---jtd
ª   ª       ª   ª       +---unevaluated
ª   ª       ª   ª       +---validation
ª   ª       ª   +---lib
ª   ª       ª       +---compile
ª   ª       ª       ª   +---codegen
ª   ª       ª       ª   +---jtd
ª   ª       ª       ª   +---validate
ª   ª       ª       +---refs
ª   ª       ª       ª   +---json-schema-2019-09
ª   ª       ª       ª   ª   +---meta
ª   ª       ª       ª   +---json-schema-2020-12
ª   ª       ª       ª       +---meta
ª   ª       ª       +---runtime
ª   ª       ª       +---standalone
ª   ª       ª       +---types
ª   ª       ª       +---vocabularies
ª   ª       ª           +---applicator
ª   ª       ª           +---core
ª   ª       ª           +---discriminator
ª   ª       ª           +---dynamic
ª   ª       ª           +---format
ª   ª       ª           +---jtd
ª   ª       ª           +---unevaluated
ª   ª       ª           +---validation
ª   ª       +---ajv-keywords
ª   ª       ª   +---dist
ª   ª       ª   ª   +---definitions
ª   ª       ª   ª   +---keywords
ª   ª       ª   +---src
ª   ª       ª       +---definitions
ª   ª       ª       +---keywords
ª   ª       +---json-schema-traverse
ª   ª           +---.github
ª   ª           ª   +---workflows
ª   ª           +---spec
ª   ª               +---fixtures
ª   +---select-hose
ª   ª   +---lib
ª   ª   +---test
ª   +---selfsigned
ª   ª   +---test
ª   +---semver
ª   ª   +---bin
ª   ª   +---classes
ª   ª   +---functions
ª   ª   +---internal
ª   ª   +---ranges
ª   +---send
ª   ª   +---node_modules
ª   ª       +---debug
ª   ª       ª   +---node_modules
ª   ª       ª   ª   +---ms
ª   ª       ª   +---src
ª   ª       +---encodeurl
ª   +---serialize-javascript
ª   +---serve-index
ª   ª   +---node_modules
ª   ª   ª   +---debug
ª   ª   ª   ª   +---src
ª   ª   ª   +---depd
ª   ª   ª   ª   +---lib
ª   ª   ª   ª       +---browser
ª   ª   ª   ª       +---compat
ª   ª   ª   +---http-errors
ª   ª   ª   +---inherits
ª   ª   ª   +---ms
ª   ª   ª   +---setprototypeof
ª   ª   ª   +---statuses
ª   ª   +---public
ª   ª       +---icons
ª   +---serve-static
ª   +---set-function-length
ª   ª   +---.github
ª   +---set-function-name
ª   ª   +---.github
ª   +---set-proto
ª   ª   +---.github
ª   ª   +---test
ª   +---setprototypeof
ª   ª   +---test
ª   +---shebang-command
ª   +---shebang-regex
ª   +---shell-quote
ª   ª   +---.github
ª   ª   +---test
ª   +---side-channel
ª   ª   +---.github
ª   ª   +---test
ª   +---side-channel-list
ª   ª   +---.github
ª   ª   +---test
ª   +---side-channel-map
ª   ª   +---.github
ª   ª   +---test
ª   +---side-channel-weakmap
ª   ª   +---.github
ª   ª   +---test
ª   +---signal-exit
ª   +---sisteransi
ª   ª   +---src
ª   +---slash
ª   +---sockjs
ª   ª   +---lib
ª   +---source-list-map
ª   ª   +---lib
ª   +---source-map
ª   ª   +---dist
ª   ª   +---lib
ª   +---source-map-js
ª   ª   +---lib
ª   +---source-map-loader
ª   ª   +---dist
ª   +---source-map-support
ª   ª   +---node_modules
ª   ª       +---source-map
ª   ª           +---dist
ª   ª           +---lib
ª   +---sourcemap-codec
ª   ª   +---dist
ª   ª       +---types
ª   +---spdy
ª   ª   +---lib
ª   ª   ª   +---spdy
ª   ª   +---test
ª   +---spdy-transport
ª   ª   +---lib
ª   ª       +---spdy-transport
ª   ª           +---protocol
ª   ª               +---base
ª   ª               +---http2
ª   ª               +---spdy
ª   +---sprintf-js
ª   ª   +---demo
ª   ª   +---dist
ª   ª   +---src
ª   ª   +---test
ª   +---stable
ª   +---stack-utils
ª   ª   +---node_modules
ª   ª       +---escape-string-regexp
ª   +---stackframe
ª   ª   +---dist
ª   +---static-eval
ª   ª   +---example
ª   ª   +---node_modules
ª   ª   ª   +---.bin
ª   ª   ª   +---escodegen
ª   ª   ª   ª   +---bin
ª   ª   ª   +---estraverse
ª   ª   ª   +---levn
ª   ª   ª   ª   +---lib
ª   ª   ª   +---optionator
ª   ª   ª   ª   +---lib
ª   ª   ª   +---prelude-ls
ª   ª   ª   ª   +---lib
ª   ª   ª   +---source-map
ª   ª   ª   ª   +---dist
ª   ª   ª   ª   +---lib
ª   ª   ª   +---type-check
ª   ª   ª       +---lib
ª   ª   +---test
ª   +---statuses
ª   +---string-length
ª   +---string-natural-compare
ª   +---string-width
ª   ª   +---node_modules
ª   ª       +---emoji-regex
ª   ª           +---es2015
ª   +---string-width-cjs
ª   ª   +---node_modules
ª   ª       +---emoji-regex
ª   ª           +---es2015
ª   +---string.prototype.includes
ª   ª   +---.github
ª   ª   ª   +---workflows
ª   ª   +---tests
ª   +---string.prototype.matchall
ª   ª   +---.github
ª   ª   +---test
ª   +---string.prototype.repeat
ª   ª   +---tests
ª   +---string.prototype.trim
ª   ª   +---test
ª   +---string.prototype.trimend
ª   ª   +---test
ª   +---string.prototype.trimstart
ª   ª   +---test
ª   +---stringify-object
ª   +---string_decoder
ª   ª   +---lib
ª   +---strip-ansi
ª   +---strip-ansi-cjs
ª   +---strip-bom
ª   +---strip-comments
ª   ª   +---lib
ª   +---strip-final-newline
ª   +---strip-indent
ª   +---strip-json-comments
ª   +---style-loader
ª   ª   +---dist
ª   ª       +---runtime
ª   +---stylehacks
ª   ª   +---src
ª   ª   ª   +---dictionary
ª   ª   ª   +---plugins
ª   ª   +---types
ª   ª       +---dictionary
ª   ª       +---plugins
ª   +---sucrase
ª   ª   +---bin
ª   ª   +---dist
ª   ª   ª   +---esm
ª   ª   ª   ª   +---parser
ª   ª   ª   ª   ª   +---plugins
ª   ª   ª   ª   ª   ª   +---jsx
ª   ª   ª   ª   ª   +---tokenizer
ª   ª   ª   ª   ª   +---traverser
ª   ª   ª   ª   ª   +---util
ª   ª   ª   ª   +---transformers
ª   ª   ª   ª   +---util
ª   ª   ª   +---parser
ª   ª   ª   ª   +---plugins
ª   ª   ª   ª   ª   +---jsx
ª   ª   ª   ª   +---tokenizer
ª   ª   ª   ª   +---traverser
ª   ª   ª   ª   +---util
ª   ª   ª   +---transformers
ª   ª   ª   +---types
ª   ª   ª   ª   +---parser
ª   ª   ª   ª   ª   +---plugins
ª   ª   ª   ª   ª   ª   +---jsx
ª   ª   ª   ª   ª   +---tokenizer
ª   ª   ª   ª   ª   +---traverser
ª   ª   ª   ª   ª   +---util
ª   ª   ª   ª   +---transformers
ª   ª   ª   ª   +---util
ª   ª   ª   +---util
ª   ª   +---node_modules
ª   ª   ª   +---.bin
ª   ª   ª   +---brace-expansion
ª   ª   ª   ª   +---.github
ª   ª   ª   +---commander
ª   ª   ª   ª   +---typings
ª   ª   ª   +---glob
ª   ª   ª   ª   +---dist
ª   ª   ª   ª       +---commonjs
ª   ª   ª   ª       +---esm
ª   ª   ª   +---minimatch
ª   ª   ª       +---dist
ª   ª   ª           +---commonjs
ª   ª   ª           +---esm
ª   ª   +---register
ª   ª   +---ts-node-plugin
ª   +---supports-color
ª   +---supports-hyperlinks
ª   +---supports-preserve-symlinks-flag
ª   ª   +---.github
ª   ª   +---test
ª   +---svg-parser
ª   ª   +---dist
ª   +---svgo
ª   ª   +---bin
ª   ª   +---lib
ª   ª   ª   +---svgo
ª   ª   +---node_modules
ª   ª   ª   +---ansi-styles
ª   ª   ª   +---chalk
ª   ª   ª   ª   +---types
ª   ª   ª   +---color-convert
ª   ª   ª   +---color-name
ª   ª   ª   +---css-select
ª   ª   ª   ª   +---lib
ª   ª   ª   +---css-what
ª   ª   ª   ª   +---lib
ª   ª   ª   +---dom-serializer
ª   ª   ª   +---domutils
ª   ª   ª   ª   +---lib
ª   ª   ª   ª   +---node_modules
ª   ª   ª   ª   ª   +---domelementtype
ª   ª   ª   ª   +---test
ª   ª   ª   ª       +---tests
ª   ª   ª   +---escape-string-regexp
ª   ª   ª   +---has-flag
ª   ª   ª   +---nth-check
ª   ª   ª   +---supports-color
ª   ª   +---plugins
ª   +---symbol-tree
ª   ª   +---lib
ª   +---tailwindcss
ª   ª   +---lib
ª   ª   ª   +---cli
ª   ª   ª   ª   +---build
ª   ª   ª   ª   +---help
ª   ª   ª   ª   +---init
ª   ª   ª   +---css
ª   ª   ª   +---lib
ª   ª   ª   +---postcss-plugins
ª   ª   ª   ª   +---nesting
ª   ª   ª   +---public
ª   ª   ª   +---util
ª   ª   ª   +---value-parser
ª   ª   +---nesting
ª   ª   +---node_modules
ª   ª   ª   +---lilconfig
ª   ª   ª       +---src
ª   ª   +---peers
ª   ª   +---scripts
ª   ª   +---src
ª   ª   ª   +---cli
ª   ª   ª   ª   +---build
ª   ª   ª   ª   +---help
ª   ª   ª   ª   +---init
ª   ª   ª   +---css
ª   ª   ª   +---lib
ª   ª   ª   +---postcss-plugins
ª   ª   ª   ª   +---nesting
ª   ª   ª   +---public
ª   ª   ª   +---util
ª   ª   ª   +---value-parser
ª   ª   +---stubs
ª   ª   +---types
ª   ª       +---generated
ª   +---tapable
ª   ª   +---lib
ª   +---temp-dir
ª   +---tempy
ª   ª   +---node_modules
ª   ª       +---type-fest
ª   ª           +---source
ª   +---terminal-link
ª   +---terser
ª   ª   +---bin
ª   ª   +---dist
ª   ª   +---lib
ª   ª   ª   +---compress
ª   ª   ª   +---utils
ª   ª   +---node_modules
ª   ª   ª   +---commander
ª   ª   ª       +---typings
ª   ª   +---tools
ª   +---terser-webpack-plugin
ª   ª   +---dist
ª   ª   +---types
ª   +---test-exclude
ª   +---text-table
ª   ª   +---example
ª   ª   +---test
ª   +---thenify
ª   +---thenify-all
ª   +---throat
ª   +---thunky
ª   +---tmpl
ª   ª   +---lib
ª   +---to-regex-range
ª   +---toidentifier
ª   +---tough-cookie
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---universalify
ª   +---tr46
ª   ª   +---lib
ª   +---tryer
ª   ª   +---lib
ª   ª   +---src
ª   ª   +---test
ª   +---ts-interface-checker
ª   ª   +---dist
ª   +---tsconfig-paths
ª   ª   +---lib
ª   ª   ª   +---__tests__
ª   ª   ª       +---data
ª   ª   +---node_modules
ª   ª   ª   +---.bin
ª   ª   ª   +---json5
ª   ª   ª   ª   +---dist
ª   ª   ª   ª   +---lib
ª   ª   ª   +---strip-bom
ª   ª   +---src
ª   ª       +---__tests__
ª   ª           +---data
ª   +---tslib
ª   ª   +---modules
ª   +---tsutils
ª   ª   +---node_modules
ª   ª   ª   +---tslib
ª   ª   ª       +---modules
ª   ª   ª       +---test
ª   ª   ª           +---validateModuleExportsMatchCommonJS
ª   ª   +---typeguard
ª   ª   ª   +---2.8
ª   ª   ª   +---2.9
ª   ª   ª   +---3.0
ª   ª   ª   +---3.2
ª   ª   ª   +---next
ª   ª   +---util
ª   +---type-check
ª   ª   +---lib
ª   +---type-detect
ª   +---type-fest
ª   ª   +---source
ª   ª   +---ts41
ª   +---type-is
ª   +---typed-array-buffer
ª   ª   +---.github
ª   ª   +---test
ª   +---typed-array-byte-length
ª   ª   +---.github
ª   ª   +---test
ª   +---typed-array-byte-offset
ª   ª   +---.github
ª   ª   +---test
ª   +---typed-array-length
ª   ª   +---.github
ª   ª   +---test
ª   +---typedarray-to-buffer
ª   ª   +---test
ª   +---typescript
ª   ª   +---bin
ª   ª   +---lib
ª   ª       +---cs
ª   ª       +---de
ª   ª       +---es
ª   ª       +---fr
ª   ª       +---it
ª   ª       +---ja
ª   ª       +---ko
ª   ª       +---pl
ª   ª       +---pt-br
ª   ª       +---ru
ª   ª       +---tr
ª   ª       +---zh-cn
ª   ª       +---zh-tw
ª   +---unbox-primitive
ª   ª   +---.github
ª   ª   +---test
ª   +---underscore
ª   ª   +---amd
ª   ª   +---cjs
ª   ª   +---modules
ª   +---undici-types
ª   +---unicode-canonical-property-names-ecmascript
ª   +---unicode-match-property-ecmascript
ª   +---unicode-match-property-value-ecmascript
ª   ª   +---data
ª   +---unicode-property-aliases-ecmascript
ª   +---unique-string
ª   +---universalify
ª   +---unpipe
ª   +---unquote
ª   +---upath
ª   ª   +---build
ª   ª       +---code
ª   +---update-browserslist-db
ª   +---uri-js
ª   ª   +---dist
ª   ª       +---es5
ª   ª       +---esnext
ª   ª           +---schemes
ª   +---url-parse
ª   ª   +---dist
ª   +---util-deprecate
ª   +---util.promisify
ª   ª   +---.github
ª   ª       +---workflows
ª   +---utila
ª   ª   +---lib
ª   ª   +---test
ª   +---utils-merge
ª   +---uuid
ª   ª   +---dist
ª   ª       +---bin
ª   ª       +---esm-browser
ª   ª       +---esm-node
ª   ª       +---umd
ª   +---v8-to-istanbul
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---convert-source-map
ª   +---vary
ª   +---w3c-hr-time
ª   ª   +---lib
ª   +---w3c-xmlserializer
ª   ª   +---lib
ª   +---walker
ª   ª   +---lib
ª   +---watchpack
ª   ª   +---lib
ª   +---wbuf
ª   ª   +---test
ª   +---web-vitals
ª   ª   +---dist
ª   ª   ª   +---modules
ª   ª   ª       +---lib
ª   ª   ª           +---polyfills
ª   ª   +---src
ª   ª       +---lib
ª   ª           +---polyfills
ª   +---webidl-conversions
ª   ª   +---lib
ª   +---webpack
ª   ª   +---bin
ª   ª   +---hot
ª   ª   +---lib
ª   ª   ª   +---asset
ª   ª   ª   +---async-modules
ª   ª   ª   +---cache
ª   ª   ª   +---config
ª   ª   ª   +---container
ª   ª   ª   +---css
ª   ª   ª   +---debug
ª   ª   ª   +---dependencies
ª   ª   ª   +---electron
ª   ª   ª   +---errors
ª   ª   ª   +---esm
ª   ª   ª   +---hmr
ª   ª   ª   +---ids
ª   ª   ª   +---javascript
ª   ª   ª   +---json
ª   ª   ª   +---library
ª   ª   ª   +---logging
ª   ª   ª   +---node
ª   ª   ª   +---optimize
ª   ª   ª   +---performance
ª   ª   ª   +---prefetch
ª   ª   ª   +---rules
ª   ª   ª   +---runtime
ª   ª   ª   +---schemes
ª   ª   ª   +---serialization
ª   ª   ª   +---sharing
ª   ª   ª   +---stats
ª   ª   ª   +---util
ª   ª   ª   ª   +---hash
ª   ª   ª   +---wasm
ª   ª   ª   +---wasm-async
ª   ª   ª   +---wasm-sync
ª   ª   ª   +---web
ª   ª   ª   +---webworker
ª   ª   +---node_modules
ª   ª   ª   +---eslint-scope
ª   ª   ª   ª   +---lib
ª   ª   ª   +---estraverse
ª   ª   +---schemas
ª   ª       +---plugins
ª   ª           +---asset
ª   ª           +---container
ª   ª           +---css
ª   ª           +---debug
ª   ª           +---ids
ª   ª           +---optimize
ª   ª           +---schemes
ª   ª           +---sharing
ª   +---webpack-dev-middleware
ª   ª   +---dist
ª   ª   ª   +---utils
ª   ª   +---types
ª   ª       +---utils
ª   +---webpack-dev-server
ª   ª   +---bin
ª   ª   +---client
ª   ª   ª   +---clients
ª   ª   ª   +---modules
ª   ª   ª   ª   +---logger
ª   ª   ª   ª   +---sockjs-client
ª   ª   ª   +---overlay
ª   ª   ª   +---utils
ª   ª   +---lib
ª   ª   ª   +---servers
ª   ª   +---node_modules
ª   ª   ª   +---ws
ª   ª   ª       +---lib
ª   ª   +---types
ª   ª       +---bin
ª   ª       +---lib
ª   ª           +---servers
ª   +---webpack-manifest-plugin
ª   ª   +---dist
ª   ª   +---node_modules
ª   ª       +---source-map
ª   ª       ª   +---dist
ª   ª       ª   +---lib
ª   ª       +---webpack-sources
ª   ª           +---lib
ª   +---webpack-sources
ª   ª   +---lib
ª   ª       +---helpers
ª   +---websocket-driver
ª   ª   +---lib
ª   ª       +---websocket
ª   ª           +---driver
ª   ª               +---hybi
ª   +---websocket-extensions
ª   ª   +---lib
ª   ª       +---pipeline
ª   +---whatwg-encoding
ª   ª   +---lib
ª   ª   +---node_modules
ª   ª       +---iconv-lite
ª   ª           +---encodings
ª   ª           ª   +---tables
ª   ª           +---lib
ª   +---whatwg-fetch
ª   ª   +---dist
ª   +---whatwg-mimetype
ª   ª   +---lib
ª   +---whatwg-url
ª   ª   +---dist
ª   +---which
ª   ª   +---bin
ª   +---which-boxed-primitive
ª   ª   +---.github
ª   ª   +---test
ª   +---which-builtin-type
ª   ª   +---test
ª   +---which-collection
ª   ª   +---.github
ª   ª   +---test
ª   +---which-typed-array
ª   ª   +---.github
ª   ª   +---test
ª   +---word-wrap
ª   +---workbox-background-sync
ª   ª   +---build
ª   ª   +---lib
ª   ª   +---src
ª   ª       +---lib
ª   +---workbox-broadcast-update
ª   ª   +---build
ª   ª   +---src
ª   ª   ª   +---utils
ª   ª   +---utils
ª   +---workbox-build
ª   ª   +---build
ª   ª   ª   +---lib
ª   ª   ª   +---schema
ª   ª   ª   +---templates
ª   ª   +---node_modules
ª   ª   ª   +---@apideck
ª   ª   ª   ª   +---better-ajv-errors
ª   ª   ª   ª       +---dist
ª   ª   ª   ª       ª   +---lib
ª   ª   ª   ª       ª   +---types
ª   ª   ª   ª       +---src
ª   ª   ª   ª           +---lib
ª   ª   ª   ª           +---types
ª   ª   ª   +---ajv
ª   ª   ª   ª   +---dist
ª   ª   ª   ª   ª   +---compile
ª   ª   ª   ª   ª   ª   +---codegen
ª   ª   ª   ª   ª   ª   +---jtd
ª   ª   ª   ª   ª   ª   +---validate
ª   ª   ª   ª   ª   +---refs
ª   ª   ª   ª   ª   ª   +---json-schema-2019-09
ª   ª   ª   ª   ª   ª   ª   +---meta
ª   ª   ª   ª   ª   ª   +---json-schema-2020-12
ª   ª   ª   ª   ª   ª       +---meta
ª   ª   ª   ª   ª   +---runtime
ª   ª   ª   ª   ª   +---standalone
ª   ª   ª   ª   ª   +---types
ª   ª   ª   ª   ª   +---vocabularies
ª   ª   ª   ª   ª       +---applicator
ª   ª   ª   ª   ª       +---core
ª   ª   ª   ª   ª       +---discriminator
ª   ª   ª   ª   ª       +---dynamic
ª   ª   ª   ª   ª       +---format
ª   ª   ª   ª   ª       +---jtd
ª   ª   ª   ª   ª       +---unevaluated
ª   ª   ª   ª   ª       +---validation
ª   ª   ª   ª   +---lib
ª   ª   ª   ª       +---compile
ª   ª   ª   ª       ª   +---codegen
ª   ª   ª   ª       ª   +---jtd
ª   ª   ª   ª       ª   +---validate
ª   ª   ª   ª       +---refs
ª   ª   ª   ª       ª   +---json-schema-2019-09
ª   ª   ª   ª       ª   ª   +---meta
ª   ª   ª   ª       ª   +---json-schema-2020-12
ª   ª   ª   ª       ª       +---meta
ª   ª   ª   ª       +---runtime
ª   ª   ª   ª       +---standalone
ª   ª   ª   ª       +---types
ª   ª   ª   ª       +---vocabularies
ª   ª   ª   ª           +---applicator
ª   ª   ª   ª           +---core
ª   ª   ª   ª           +---discriminator
ª   ª   ª   ª           +---dynamic
ª   ª   ª   ª           +---format
ª   ª   ª   ª           +---jtd
ª   ª   ª   ª           +---unevaluated
ª   ª   ª   ª           +---validation
ª   ª   ª   +---fs-extra
ª   ª   ª   ª   +---lib
ª   ª   ª   ª       +---copy
ª   ª   ª   ª       +---copy-sync
ª   ª   ª   ª       +---empty
ª   ª   ª   ª       +---ensure
ª   ª   ª   ª       +---fs
ª   ª   ª   ª       +---json
ª   ª   ª   ª       +---mkdirs
ª   ª   ª   ª       +---move
ª   ª   ª   ª       +---move-sync
ª   ª   ª   ª       +---output
ª   ª   ª   ª       +---path-exists
ª   ª   ª   ª       +---remove
ª   ª   ª   ª       +---util
ª   ª   ª   +---json-schema-traverse
ª   ª   ª   ª   +---.github
ª   ª   ª   ª   ª   +---workflows
ª   ª   ª   ª   +---spec
ª   ª   ª   ª       +---fixtures
ª   ª   ª   +---source-map
ª   ª   ª   ª   +---lib
ª   ª   ª   +---tr46
ª   ª   ª   ª   +---lib
ª   ª   ª   +---webidl-conversions
ª   ª   ª   ª   +---lib
ª   ª   ª   +---whatwg-url
ª   ª   ª       +---lib
ª   ª   +---src
ª   ª       +---lib
ª   ª       +---schema
ª   ª       +---templates
ª   +---workbox-cacheable-response
ª   ª   +---build
ª   ª   +---src
ª   +---workbox-core
ª   ª   +---build
ª   ª   +---models
ª   ª   ª   +---messages
ª   ª   +---src
ª   ª   ª   +---models
ª   ª   ª   ª   +---messages
ª   ª   ª   +---utils
ª   ª   ª   +---_private
ª   ª   +---utils
ª   ª   +---_private
ª   +---workbox-expiration
ª   ª   +---build
ª   ª   +---models
ª   ª   +---src
ª   ª       +---models
ª   +---workbox-google-analytics
ª   ª   +---build
ª   ª   +---src
ª   ª   ª   +---utils
ª   ª   +---utils
ª   +---workbox-navigation-preload
ª   ª   +---build
ª   ª   +---src
ª   +---workbox-precaching
ª   ª   +---build
ª   ª   +---src
ª   ª   ª   +---utils
ª   ª   +---utils
ª   +---workbox-range-requests
ª   ª   +---build
ª   ª   +---src
ª   ª   ª   +---utils
ª   ª   +---utils
ª   +---workbox-recipes
ª   ª   +---build
ª   ª   +---src
ª   +---workbox-routing
ª   ª   +---build
ª   ª   +---src
ª   ª   ª   +---utils
ª   ª   +---utils
ª   +---workbox-strategies
ª   ª   +---build
ª   ª   +---plugins
ª   ª   +---src
ª   ª   ª   +---plugins
ª   ª   ª   +---utils
ª   ª   +---utils
ª   +---workbox-streams
ª   ª   +---build
ª   ª   +---src
ª   ª   ª   +---utils
ª   ª   +---utils
ª   +---workbox-sw
ª   ª   +---build
ª   ª   +---controllers
ª   +---workbox-webpack-plugin
ª   ª   +---build
ª   ª   ª   +---lib
ª   ª   +---node_modules
ª   ª   ª   +---source-map
ª   ª   ª   ª   +---dist
ª   ª   ª   ª   +---lib
ª   ª   ª   +---webpack-sources
ª   ª   ª       +---lib
ª   ª   +---src
ª   ª       +---lib
ª   +---workbox-window
ª   ª   +---build
ª   ª   +---src
ª   ª   ª   +---utils
ª   ª   +---utils
ª   +---wrap-ansi
ª   +---wrap-ansi-cjs
ª   +---wrappy
ª   +---write-file-atomic
ª   +---ws
ª   ª   +---lib
ª   +---xml-name-validator
ª   ª   +---lib
ª   +---xmlchars
ª   ª   +---xml
ª   ª   ª   +---1.0
ª   ª   ª   +---1.1
ª   ª   +---xmlns
ª   ª       +---1.0
ª   +---y18n
ª   ª   +---build
ª   ª       +---lib
ª   ª           +---platform-shims
ª   +---yallist
ª   +---yaml
ª   ª   +---browser
ª   ª   ª   +---dist
ª   ª   ª   +---types
ª   ª   +---dist
ª   ª   +---types
ª   +---yargs
ª   ª   +---build
ª   ª   ª   +---lib
ª   ª   ª       +---typings
ª   ª   ª       +---utils
ª   ª   +---helpers
ª   ª   +---lib
ª   ª   ª   +---platform-shims
ª   ª   +---locales
ª   +---yargs-parser
ª   ª   +---build
ª   ª       +---lib
ª   +---yocto-queue
+---public
+---src

```

---

## Improvements in Progress

- Status messages for upload and verification steps  
- Duplicate image check via smart contract  
- Enhanced UI with blue/yellow color theme  
- Drag-and-drop image upload support  
- Export metadata as `.json` file  
- Local hash history using browser storage  
- Future support for IPFS image storage  

---

## Author

**Senthamizhan**  and HEISENBERG Team (III year Engineering Students)


