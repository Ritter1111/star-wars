'use client';

import { IHeroesData } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';

interface PaginationData {
  data: IHeroesData;
}

const Pagination: FC<PaginationData> = ({ data }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleClickOnPrevButton = (): void => {
    const newUrl = createPageURL(currentPage - 1);
    router.push(newUrl);
  };

  const handleClickOnNextButton = (): void => {
    const newUrl = createPageURL(currentPage + 1);
    router.push(newUrl);
  };

  return (
    <div>
      <button onClick={data.previous ? handleClickOnPrevButton : undefined}>Prev</button>
      {currentPage}
      <button onClick={data.next ? handleClickOnNextButton : undefined}>Next</button>
    </div>
  );
};

export default Pagination;
