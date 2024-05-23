import Pagination from '@/components/pagination';
import Link from 'next/link';
import AboutSection from '@/components/aboutSection';
import getHeroes from './api/heroes';

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

export default async function Home({ searchParams }: Readonly<SearchParamsProps>) {
  const currentPage = Number(searchParams?.page) || 1;
  const data = await getHeroes(currentPage);

  let resultHeader;

  if (data.count === 0) {
    resultHeader = <h2>Nothing found</h2>;
  } else {
    resultHeader = <h2>Results ({data.count})</h2>;
  }

  return (
    <main>
      <AboutSection />

      {resultHeader}
      {data.results.map((el) => {
        return (
          <Link
            href={`hero/${el.id}`}
            key={el.id}
            className="transition flex text-center bg-sectionBackground rounded-lg p-4 my-2 cursor-pointer hover:bg-hoverBackground"
          >
            {el.name}
          </Link>
        );
      })}
      <Pagination data={data} />
    </main>
  );
}
