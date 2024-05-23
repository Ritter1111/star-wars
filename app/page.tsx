import Pagination from '@/components/pagination';
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
      {resultHeader}
      {data.results.map((el) => {
        return (
          <div key={el.id} className=" text-center bg-sectionBackground rounded-lg p-4 my-2 cursor-pointer">
            {el.name}
          </div>
        );
      })}
      <Pagination data={data} />
    </main>
  );
}
