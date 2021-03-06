const path = require('path')

const organizationName = 'chaosblade-io' // Usually your GitHub org/user name.
const projectName = 'chaosblade' // Usually your repo name.
const branch = 'master'
const repoUrl = `https://github.com/${organizationName}/${projectName}`

module.exports = {
    title: 'ChaosBlade',
    tagline: 'Help companies solve the high availability problems in the process of migrating to cloud-native systems through chaos engineering',
    url: 'https://chaosblade.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon/favicon.ico',
    organizationName,
    projectName,
    customFields: {
        repoUrl
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            zh: {
                label: 'įŽäŊä¸­æ',
            },
        },
    },
    themeConfig: {
        image: 'img/cb-logo.png',
        metadatas: [{ name: 'twitter:card', content: 'summary' }],
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
            switchConfig: {
                darkIcon: 'đ',
                lightIcon: 'âī¸',
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: '2px',
                },
                lightIconStyle: {
                    marginLeft: '1px',
                },
            },
        },
        prism: {
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula')
        },
        // googleAnalytics: {
        //     trackingID: 'UA-47063382-1'
        // },
        algolia: {
            apiKey: 'b8a269688857cb7ea2bc24386b32280b',
            indexName: 'chaosblade.io',
            appId: 'N2KB4TAKFF'
        },
        announcementBar: {
            id: 'supportus',
            content:
                `â­ī¸  &nbsp; If you like ChaosBlade, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/${organizationName}/${projectName}">GitHub</a>! â­ī¸`,
        },
        navbar: {
            title: 'ChaosBlade',
            logo: {
                alt: 'ChaosBlade',
                src: 'img/cb-head.png',
                srcDark: 'img/cb-head.png',
            },
            items: [{
                label: 'Documentation',
                position: 'left',
                activeBasePath: 'docs',
                to: 'docs',
            },
            {
                to: 'blog',
                label: 'Blog',
                position: 'left'
            },
            {
                href: repoUrl,
                className: 'header-githab-link',
                position: 'right',
            },
            {
                type: 'localeDropdown',
                position: 'right',
            },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                title: 'Docs',
                items: [{
                    label: 'Getting Started',
                    to: '/docs',
                }],
            }, {
                title: 'Community',
                items: [{
                    label: 'Gitter',
                    href: `https://gitter.im/chaosblade-io/community`,
                }, {
                    label: 'Twitter',
                    href: `https://twitter.com/chaosblade.io`,
                }, {
                    label: 'Slack',
                    href: 'https://seleniumhq.slack.com/join/shared_invite/zt-f7jwg1n7-RVw4v4sMA7Zjufira_~EVw#/'
                }, {
                    label: 'DingTalk(23177705)',
                    href: '/',
                }],
            }, {
                title: 'More',
                items: [{
                    label: 'Blog',
                    to: 'blog',
                }, {
                    label: 'GitHub',
                    href: repoUrl,
                }],
            },
            ],
            logo: {
                alt: 'CNCF',
                src: '/img/cncf-white.svg',
                href: 'https://cncf.io/'
            },
            copyright: `ÂŠ ${new Date().getFullYear()} The ChaosBlade Authors. All rights reserved. <br />
            The Linux Foundation has registered trademarks and uses trademarks. 
            For a list of trademarks of The Linux Foundation, 
            please see our <a href="https://www.linuxfoundation.org/trademark-usage/"> Trademark Usage</a> page.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic', {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: `${repoUrl}/edit/${branch}/website/`,
                    remarkPlugins: [
                        [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
                    ],
                },
                blog: {
                    showReadingTime: true,
                    postsPerPage: 3,
                    // Please change this to your repo.
                    editUrl: `${repoUrl}/edit/${branch}/website/blog/`,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                pages: {
                    remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: function ({
                        locale,
                        docPath,
                    }) {
                        return repoUrl + `/edit/master/docs/${locale}/${docPath}`;
                    },
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    includeCurrentVersion: true,
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/oam-dev/kubevela.io/tree/main/blog',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
        [
            '@docusaurus/plugin-client-redirects',
            {
                fromExtensions: ['html'],
            }
        ],
    ],
    themes: ['@saucelabs/theme-github-codeblock'],
    stylesheets: [
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=block',
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=block'
    ],
    scripts: [
        'https://buttons.github.io/buttons.js'
    ]
}
