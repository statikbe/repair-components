// import VModal from 'vue-js-modal';
import VTooltip from 'v-tooltip';
import VMultiselect from 'vue-multiselect';

import * as components from '../src/components';
import * as defaultIcons from '../src/assets/icons';

import 'vue-multiselect/dist/vue-multiselect.min.css';

const isBrowser = typeof window !== 'undefined';

const ComponentLibrary = {
  install(Vue, options = { icons: {} }) {
    const { icons } = options;

    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }

    Vue.component('r-select', VMultiselect);

    Vue.prototype.$icons = {
      ...defaultIcons,
      ...icons,
    };

    Vue.use(VTooltip);

    Vue.prototype.t = Vue.prototype.t || ((label) => label);
  },
};

export * from '../src/components';

export { default as tailwindConfig } from '../tailwind.config';
export * as icons from '../src/assets/icons';

export default ComponentLibrary;

if (isBrowser && window.Vue) {
  window.Vue.use(ComponentLibrary);
}
