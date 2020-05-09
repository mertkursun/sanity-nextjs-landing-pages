export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eb72fadc2f2d29926286f1f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x147z7e2',
                  apiId: '9959614d-714f-42ad-8560-81a03ce25bce'
                },
                {
                  buildHookId: '5eb72fadc2f2d28449287195',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gyxfuupx',
                  apiId: '94057b6b-0fd4-4e7c-b0e3-332f55e1aacd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mertkursun/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gyxfuupx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
