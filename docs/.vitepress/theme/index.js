import DefaultTheme from 'vitepress/theme';
import ComponentLibrary from '../../../lib/main';

import './index.css';
import '../../../src/assets/css/index.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ComponentLibrary, {});
  },
};
