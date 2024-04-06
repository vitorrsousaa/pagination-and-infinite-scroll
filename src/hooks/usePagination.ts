import { useCallback, useEffect, useState } from 'react';

export function usePagination(initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(() =>{
    const searchParams = new URLSearchParams(window.location.search);

    const page = searchParams.get('page');

    if(!page) return initialPage;

    return parseInt(page);
  });

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  },[]);

  const previousPage = useCallback(() => {
    setCurrentPage((prev) => prev - 1);
  },[]);

  const setPage = useCallback((page: number) => {
    setCurrentPage(page);
  },[]);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', currentPage.toString());
    const newUrl= url.origin + url.pathname + '?' +url.searchParams.toString();
    window.history.replaceState(null, '', newUrl);
  },[currentPage]);

  return {
    currentPage,
    nextPage,
    previousPage,
    setPage,

  };
}
