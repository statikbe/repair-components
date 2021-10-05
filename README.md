# repair-components

This package contains Vue components for Repair projects, styled with TailwindCSS.

## Installation

Install the package to your Repair project:

```
yarn add @statikbe/repair-components
```

Then install the plugin:

```js
import RepairComponents from '@statikbe/repair-components';

Vue.use(RepairComponents);
```

Make sure to add the vue-i18n instance to your Vue initialization to make translations work:

```js
import { i18n } from '@statikbe/repair-components';

new Vue({
  i18n,
}).$mount('#app');
```

Alternatively, if using Nuxt, make sure to pass the existing i18n instance from the nuxt-i18n module, will get extended with the necessary translations:

```js
@todo check repmap
```

### Options

You can pass some options:

```js
Vue.use(RepairComponents, {
  i18n, // for Nuxt, see above
  icons: {
    myIcon: '...',
    // key = identifier (as passed to r-icon name prop)
    // value = SVG path "d" attribute as string
  },
});
```

## Documentation

Check out the components and their props at the Storybook [documentation](https://statikbe.github.io/repair-components/).
