import { getPages } from '@/sanity/sanity-utils';

export default async function Home() {
  const pages = await getPages();

  return (
    <main>
      <div>
        {pages.map(page => (
          <div key={page._id}>{page.pageTitle}</div>
        ))}
      </div>
    </main>
  );
}
