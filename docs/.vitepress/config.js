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
    repoLabel: 'Contribute!',
    repo: 'https://bitbucket.org/statikbe/repair-components',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Edit this page',
    search: false,
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
        nav: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Components', link: '/components/' },
          { text: 'BitBucket', link: 'https://bitbucket.org/statikbe/repair-components' },
        ],
        sidebar: [
          {
            text: 'Getting started',
          },
          {
            text: 'Tailwind',
            children: [{ text: 'Config', link: '/tailwind/Config' }],
          },
          {
            text: 'Components',
            children: [
              { text: 'Button', link: '/components/Button' },
              { text: 'Heading', link: '/components/Heading' },
              { text: 'Section', link: '/components/Section' },
            ],
          },
        ],
      },
    },
  },
};
