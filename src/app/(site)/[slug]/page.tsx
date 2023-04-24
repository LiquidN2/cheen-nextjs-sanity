import { notFound } from 'next/navigation';
import { getPageBySlug } from '@/sanity/sanity-utils';

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const page = await getPageBySlug(params.slug);

  if (!page) notFound();

  return <div>page {page.title}</div>;
}
