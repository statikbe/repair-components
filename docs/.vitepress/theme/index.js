import DefaultTheme from 'vitepress/theme';
import * as components from '../../../src/components';

import './before.css';
import './tailwind.css';
import './after.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    for (const componentName in components) {
      const component = components[componentName];

      app.component(component.name, component);
    }
  },
};
