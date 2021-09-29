export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61548b6f459f35295f427b69',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1rd6xtbn',
                  apiId: '116d5b4d-3b8f-4684-816e-b5a5bec286b2'
                },
                {
                  buildHookId: '61548b6f621fcd2dc1afa489',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jr7vib35',
                  apiId: 'e73e052a-da67-482a-b4b4-7fce49a9f41e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/journeycruz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jr7vib35.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
