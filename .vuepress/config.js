module.exports = {
    title: 'Virtual Airline Operations Platform',
    themeConfig: {
        sidebarDepth: 3,
        lastUpdated: 'Last Updated',
        displayAllHeaders: true,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'User Guide', link: '/guide/' },
          { text: 'PHPDocs', link: 'https://phpdocs.vaop.io/latest/' },
          { text: 'GitHub', link: 'https://github.com/vaop/core' }
        ],
        sidebar: [
            {
                title: 'User Guide',
                path: '/guide/',
            },
            {
                title: 'Concepts',
                path: '/guide/setup/',
                collapsable: true,
                children: [
                    '/guide/configuration',
                    '/guide/customizing',
                ]
            }
        ]
    }
  }