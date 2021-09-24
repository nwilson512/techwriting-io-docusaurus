const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Nathaniel Wilson',
  tagline: 'Lead Tech Writer & Front End Developer',
  url: 'https://techwriting-io-docusaurus.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/pencil.png',
  organizationName: 'nwilson512', // Usually your GitHub org/user name.
  projectName: 'techwriting-io-docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/nwilson512/techwriting-io-docusaurus/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        pages: {}, // I added pages to the preset here, but I'm not yet sure what to do next
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Techwriting.io',
        logo: {
          alt: 'My Site Logo',
          src: 'img/pencil.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'All docs files',
          // },
          // {
          //   type: 'doc',
          //   docId: 'sample-works/create-a-statamic-web-server-on-google-cloud-platform/index',
          //   position: 'left',
          //   label: 'GCP sample',
          // },
          {
            to: 'resume',
            position: 'left',
            label: 'Resume',
          },
          {
            to: 'sample-works',
            position: 'left',
            label: 'Sample works',
          },
          {
            to: 'how-i-write',
            position: 'left',
            label: 'How I write',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/nwilson512',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/nwilson512',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nwilson512',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nathaniel Wilson`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
