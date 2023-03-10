// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Creative Club Gombe State University',
  tagline: 'Creativity, A  Remedy For Humanity',
  url: 'https://CreativeClubGSU.github.io',
  baseUrl: '/web/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CreativeClubGSU', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
   // Creative Club blogs
   plugins: [
    /** Poetry */
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'poetry',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'poetry',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './poetry',
      },
    ],
     /**peams section */
     [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'poems',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'poems',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './poems',
      },
    ],
   ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-3R8W3VSX09',
          anonymizeIP: true,
        },
        // /** React page Added */
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://creativeclubgsu.github.io/web/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://creativeclubgsu.github.io/web/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     '<span style="color: #fbd">Creative Day THEME: Role Of Creative Voices</span>, <br/> Date: 27 jan, 2023 9:00Am <br/>Venue: New Multi-purpose Hall Gombe State University',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#095',
      //   isCloseable: true,
      // },
      navbar: {
        title: 'C C GSU',
        logo: {
          alt: 'CC GSU Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Writing',
          },
          /* blogs */
           {
            type: 'dropdown',
            label: 'Blogs',
            position: 'left',
            items: [
              {to: '/blog', label: 'prose'},
              {to: '/poems', label: 'poems'},
              {to: '/poetry', label: 'poetry' },          
            ],
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
                label: 'Writing Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'FaceBook',
                href: 'https://web.facebook.com/groups/770686350483139/?mibextid=HsNCOg',
              },
              {
                label: 'Linkedin',
                href: 'https://creativeclubgsu.github.io/web/',
              },
              {
                label: 'Twitter',
                href: 'https://creativeclubgsu.github.io/web/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Creative Club GSU`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
