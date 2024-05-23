'use client';

import { IHeroesData } from '@/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';
import s from './index.module.css';

interface PaginationData {
  data: IHeroesData;
}

const Pagination: FC<PaginationData> = ({ data }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;
  const countPages = Math.ceil(data.count / data.results.length);

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
    <div className="flex items-center justify-center gap-10 my-5">
      <button onClick={handleClickOnPrevButton} className={s.pagination_btn} disabled={!data.previous}>
        Prev
      </button>
      {currentPage}...{countPages}
      <button className={s.pagination_btn} disabled={!data.next} onClick={handleClickOnNextButton}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
