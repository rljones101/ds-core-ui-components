# DS Core UI Components
Core component library

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
export { default as DsButton } from '@/lib-components'
```

Run the following command to build the components
```
npm run build
```

## How to add the components to your project

Add the component repo to the `package.json` file:
```
npm i ds-core-ui-components --save
```

## Using Vue Components:

Add the following import statements:
```javascript
import DsCoreUiComponents from 'ds-core-ui-components'
```

## Styling
Styles can be overridden in main application

```css
:root {
    --main-color: #396387;
}
```

### Dynamic styling example
```javascript
document.querySelector('body').style.setProperty('--main-color', 'blue');
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
