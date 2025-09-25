# tracklink

Redirects and tracks links on your website according to a configurable URL dictionary. Here is the source code of the [Tracklink](https://www.npmjs.com/package/tracklink) module.

---


## 📦 Install

```bash

npm install tracklink

```

## ⚙️ Usage as ESM


### 1. Import the script


```js

import { tracklink } from "tracklink/dist/tracklink.js";

```


### 2. Initialize with your URLs

```js

tracklink.init({
  'https://example1.com':'http://example1.com/?marker=123&ref=456',
  'https://example2.com':'http://example2.com/?marker=789'
});

```
---

## ⚙️ Usage as UMD

Add the code in body of your HTML file

```html
<script type="text/javascript" src="https://unpkg.com/tracklink@1.0.2/dist/tracklink.umd.js"></script>
<script type="text/javascript">
  tracklink.init({
    'https://example1.com':'http://example1.com/?marker=123&ref=456',
    'https://example2.com':'http://example2.com/?marker=789'  
  })
</script>
```

---



## ⚙️ Getting started local development

Clone the project and install project packages with npm:

```sh
git clone https://github.com/okb3wok/tracklink.git
cd tracklink
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

For development, use webpack-dev-server. Open [http://localhost:8009](http://localhost:8009) to view it in your browser. The page will automatically reload when you make changes.

### `npm run build`

Builds the app for production into the `dist` folder. The output includes minified JavaScript code for ESM and UMD.


## 📄 Other

GitHub: [https://github.com/okb3wok/tracklink](https://github.com/okb3wok/tracklink)

MIT License, Copyright (c) 2025 Alexander Dolzhenkov