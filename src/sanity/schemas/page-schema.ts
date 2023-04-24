const page = {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'string',
    },
    {
      name: 'keyWords',
      title: 'Key Words',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'pageUrl',
      Title: 'Page URL',
      type: 'url',
    },
  ],
};

export default page;
