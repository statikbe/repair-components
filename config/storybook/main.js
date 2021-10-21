import Vue from 'vue';
import RepairComponents from '../../lib/main';

Vue.use(RepairComponents, {});

module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
};
