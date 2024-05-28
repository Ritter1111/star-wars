import Pagination from '@/components/pagination';
import AboutSection from '@/components/aboutSection';
import HeroList from '@/components/heroList';
import { getHeroes } from './api/heroes';

interface SearchParamsProps {
  searchParams?: {
    page?: string;
  };
}

export default async function Home({ searchParams = {} }: Readonly<SearchParamsProps>) {
  const currentPage = Number(searchParams.page) || 1;
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
      <HeroList heroes={data.results} />
      <Pagination data={data} />
    </main>
  );
}
