# Phoenix Komponente

Phoenix Komponente.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Installation

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save-dev @phoenixreisen/...
```

## Anwendung

```js
// entweder CommonJS
const Tabs = require('@phoenixreisen/...');

// oder ES6+
import Tabs from '@phoenixreisen/...';
```

#### Aufruf

```js
// Hyperscript bzw. Javascript
...
```

## Test

```bash
npm install
npm run test
```

## Deployment

```bash
npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm
git push
```