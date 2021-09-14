# core-ui-components
This project allows the user to create components that can be used in either React or Vue

## Project setup
```
npm install
```

## Compiles and hot-reloads for development
```
npm run serve
```

## Creating and compiling new components

We you are done creating a new component make sure to add the new component to the `index.js` file

### Example
```javascript
export { default as HelloWorld } from '@/components/HelloWorld/HelloWorld'
```

Run the following command to build the components
```
npm run build
```

This will run the following build commands to build the Web components and Vue components:
```json
"build-web-components": "cross-env vue-cli-service build --target wc --inline-vue --dest 'dist/webComponents' --name core-ui './src/components/*/*.vue'",
"build-vue-components": "cross-env vue-cli-service build --target lib --dest 'dist/vueComponents' --name core-ui './src/index.js'",
```


## Lints and fixes files
```
npm run lint
```

## How to add the web components to your project

Add the component repo to the `package.json` file:
```json
"core-ui-components": "https://github.com/rljones101/core-ui-components.git"
```
## Using Web Components:

Add the following import statements:
```javascript
import 'core-ui-components/dist/webComponents/core-ui.js'
```
You can now use the components in your application. Each component is prefixed with `core-ui-`:

#### Example:
```html
<core-ui-hello-world>
```

## Using Vue Components:

Add the following import statements:
```javascript
import { HelloWorld } from 'core-coupon-components/dist/vueComponents/core-ui.umd' // TIP: Only import the components that you need
import 'core-coupon-components/dist/vueComponents/core-ui.css' // imports the css styles
```

## Styling
Styles can be overridden in main application

```css
:root {
    --hello-world-msg-color: blue; /* default is green */
}
```

### Dynamic styling example
```javascript
document.querySelector('body').style.setProperty('--hello-world-msg-color', 'blue');
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
