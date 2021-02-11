export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '6025025c39dd231d986bbbb4',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-jo5f8r12',
                  apiId: '0b5a7379-fc15-473f-af66-f73e24e38534'
                },
                {
                  buildHookId: '6025025de6417e16773ec104',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-oopu9jh9',
                  apiId: '038b6f58-3af9-44ba-a2fe-bc8f741c87c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hazelsiu/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-oopu9jh9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
