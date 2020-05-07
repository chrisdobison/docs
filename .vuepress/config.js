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
            },
            {
                title: 'Setup',
                collapsable: true,
                children: [
                    '/supported_libraries',
                ]
            },
            {
                title: 'Configuration',
                collapsable: true,
                children: [
                    '/create_charts',
                    '/adding_datasets',
                    '/render_charts',
                    '/api_charts',
                ]
            },
            {
                title: 'Customization',
                collapsable: true,
                children: [
                    '/customize_charts',
                    '/customize_datasets',
                ]
            },
            {
                title: 'Troubleshooting',
                collapsable: true,
                children: [
                    '/full_example',
                ]
            }
        ]
    }
  }