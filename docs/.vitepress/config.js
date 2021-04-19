// const twConfig = require('./tailwind.config.js');

module.exports = {
  title: 'Repair Components',
  description: 'Vue components for Repair projects',

  head: [
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,700;0,900;1,400&display=swap',
      },
    ],
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Repair Components',
      description: 'Vue components for Repair projects',
    },
  },

  themeConfig: {
    repoLabel: 'BitBucket',
    repo: 'https://bitbucket.org/statikbe/repair-components',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Edit this page',
    search: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        sidebar: [
          {
            text: 'Installation',
            children: [
              { text: 'Vue', link: '/Installation/Vue' },
              { text: 'Tailwind', link: '/Installation/Tailwind' },
            ],
          },
          {
            text: 'Styling',
            children: [{ text: 'Typography', link: '/Styling/Typography' }],
          },
          {
            text: 'Components',
            children: [
              { text: 'App', link: '/Components/App/index' },
              { text: 'Button', link: '/Components/Button/index' },
              {
                text: 'Form',
                link: '/Components/Form/index',
                children: [
                  { text: 'FormField', link: '/Components/Form/FormField/index' },
                  { text: 'FormText', link: '/Components/Form/FormText/index' },
                ],
              },
              { text: 'Section', link: '/Components/Section/index' },
            ],
          },
        ],
      },
    },
  },
};
