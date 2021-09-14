# core-ui-components
This project allows the user to create components that can be used in Vue

## Project setup
```
npm install
```

## Compiles and hot-reloads for development
```
npm run serve
```

## Creating and compiling new components

When you are done creating a new component make sure to add the new component to the `index.js` file

### Example
```javascript
export { default as HelloWorld } from '@/components/HelloWorld/HelloWorld'
```

Run the following command to build the components
```
npm run build
```

This will run the following build commands to build the Vue components:
```json
"build-web-components": "cross-env vue-cli-service build --target wc --inline-vue --dest 'dist/webComponents' --name core-ui './src/components/*/*.vue'"
```


## Lints and fixes files
```
npm run lint:fix
```

## How to add the web components to your project

Add the component repo to the `package.json` file:
```json
"core-ui-components": "https://github.com/<user>/core-ui-components.git"
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
