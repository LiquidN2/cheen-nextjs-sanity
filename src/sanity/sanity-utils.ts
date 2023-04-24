import { createClient, groq } from 'next-sanity';

export async function getPages() {
  const client = createClient({
    projectId: '0468wj5x',
    dataset: 'production',
    apiVersion: '2023-04-24',
  });

  return client.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      pageTitle,
      pageDescription,
      keyWords,
      url
    }`
  );
}
