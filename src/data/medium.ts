export interface MediumArticle {
  title: string;
  url: string;
  published: Date;
}

// Newest first. Add new Medium articles here; they're listed with the site's own posts.
export const mediumArticles: MediumArticle[] = [
  {
    title: 'From .default() to .prefault()',
    url: 'https://haweecodes.medium.com/from-default-to-prefault-b59b7e0af144',
    published: new Date('2025-11-29'),
  },
  {
    title: 'My view of Angular',
    url: 'https://haweecodes.medium.com/my-view-of-angular-e7d1a3d6920b',
    published: new Date('2020-11-30'),
  },
  {
    title: 'Create and Publish your very own components to npm with Vue CLI 3',
    url: 'https://haweecodes.medium.com/create-and-publish-your-very-own-components-to-npm-with-vue-cli-3-4baf1bb9aa0d',
    published: new Date('2019-02-04'),
  },
];
