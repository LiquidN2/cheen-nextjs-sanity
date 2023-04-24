import { createClient, groq } from 'next-sanity';
import type { Page } from '@/types/Page';

const client = createClient({
  projectId: '0468wj5x',
  dataset: 'production',
  apiVersion: '2023-04-24',
});

export async function getPages() {
  return client.fetch(
    groq`*[_type == "page" && title != "Home"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description,
      keywords,
      url
    }`
  );
}

export async function getHomePageMetaData() {
  return client.fetch(
    groq`*[_type == "page" && title == "Home"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      description,
      keywords,
      url
    }`
  );
}

export async function getPageBySlug(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      description,
      keywords,
      url
    }`,
    {
      slug,
    }
  );
}
