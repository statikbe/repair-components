import * as components from '../src/components';

const ComponentLibrary = {
  install(Vue, options = {}) {
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  },
};

export * from '../src/components';

export default ComponentLibrary;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
}
