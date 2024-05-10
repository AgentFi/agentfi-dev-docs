/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AgentFi',
  url: 'https://dev-docs.agentfi.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AgentFi', // Usually your GitHub org/user name.
  projectName: 'agentfi-dev-docs', // Usually your repo name.
  plugins: [require.resolve('docusaurus-lunr-search')],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    // prism: {
    //   additionalLanguages: ["solidity"],
    // },
    navbar: {
      title: 'AgentFi Dev Docs',
      logo: {
        alt: 'AgentFi Logo',
        src: 'img/agentfi_logo.png',
      },
      items: [
        {
          label: "Website",
          to: "https://agentfi.io",
          position: "left",
        },
        {
          label: "Welcome",
          to: "docs/welcome-to-agentfi-dev-docs",
          position: "right",
        },
        {
          label: "Overview",
          to: "docs/overview/what-is-agentfi",
          position: "right",
        },
        {
          label: "User Guides",
          to: "docs/user-guides/intro",
          position: "right",
        },
        {
          label: "Developer Docs",
          to: "docs/dev-docs/intro",
          position: "right",
        },
        {
          label: 'GitHub',
          href: 'https://github.com/AgentFi',
          position: 'right',
        }
      ],
    },
    footer: {
      links: [
        {
          title: 'AgentFi',
          items: [
            {
              label: "Website",
              to: "https://agentfi.io",
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AgentFi',
            }
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: "Intro Docs",
              to: "https://docs.agentfi.io",
            },
            {
              label: "User Guides",
              to: "docs/user-guides/intro",
            },
            {
              label: "Developer Docs",
              to: "docs/dev-docs/intro",
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.agentfi.io'
            }
          ],
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/AgentFi/agentfi-dev-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
