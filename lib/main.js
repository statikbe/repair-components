import * as components from "../src/components";

const ComponentLibrary = {
  install(app, options = { prefix: "r" }) {
    const { prefix } = options;

    for (const componentName in components) {
      const component = components[componentName];

      app.component(component.name || "test", component);
    }

    app.config.globalProperties.$prefix = function (classes) {
      if (!prefix) {
        return classes;
      }

      return `${prefix}${classes.split(" ").join(` ${prefix}`)}`;
    };
  },
};

export * from "../src/components";

export default ComponentLibrary;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ComponentLibrary);
}
