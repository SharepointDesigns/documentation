import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "SharePoint Designs Documentation",
  tagline: "Documentation for SharePoint Designs",
  url: "https://sharepointdesigns.github.io",
  baseUrl: "/documentation/",
  favicon:
    "data:image/png;base64,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",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SharePointDesigns", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/spdlogo.svg",
    navbar: {
      title: "Documentation",
      logo: {
        alt: "SharePoint Designs Logo",
        src: "img/spdlogo.svg",
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/sharepointdesigns",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/company/sharepoint-designs/",
            },
<<<<<<< HEAD
            {
              label: "Blog",
              to: "https://www.sharepointdesigns.com/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/sharepointdesigns",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "📧 sales@sharepointdesigns.com",
              to: "mailto:sales@sharepointdesigns.com",
            },
            {
              label: "📞 +91 9884189463",
              to: "tel:+919884189463",
=======
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://www.sharepointdesigns.com/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/sharepointdesigns",
>>>>>>> main
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SharePoint Designs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
