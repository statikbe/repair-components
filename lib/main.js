import VModal from 'vue-js-modal/dist/ssr.nocss';
import VTooltip from 'v-tooltip';
import i18nPlugin from 'vue-i18n';

import * as components from '../src/components';
import * as defaultIcons from '../src/assets/icons';

import messages from '../src/i18n';

const isBrowser = typeof window !== 'undefined';

let i18nInstance;

const Plugin = {
  install(Vue, options = {}) {
    const { icons, i18n } = options;

    Vue.use(i18nPlugin);
    Vue.use(VTooltip);
    Vue.use(VModal);

    Vue.prototype.$icons = {
      ...defaultIcons,
      ...(icons || {}),
    };

    i18nInstance = i18n || new i18nPlugin();

    i18nInstance.mergeLocaleMessage('de', messages.de);
    i18nInstance.mergeLocaleMessage('en', messages.en);
    i18nInstance.mergeLocaleMessage('fr', messages.fr);
    i18nInstance.mergeLocaleMessage('nl', messages.nl);

    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  },
};

export { i18nInstance as i18n };

export * from '../src/components';

export { default as tailwindConfig } from '../tailwind.config';
export * as icons from '../src/assets/icons';

export default Plugin;

if (isBrowser && window.Vue) {
  window.Vue.use(Plugin);
}
