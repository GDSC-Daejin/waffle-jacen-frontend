import React, {useState} from 'react';
import './styled.css';
// @ts-ignore
import Pagination from 'react-js-pagination';

interface IPaginationProps {
  page: number;
  count: number;
  setPage: (page: number) => void;
}

const PageBar: React.FC<IPaginationProps> = ({ page, count, setPage }) => {
  // eslint-disable-next-line no-console
  console.log(page + ' asdf ' + count);
  const handle = (page: number) => {
    // eslint-disable-next-line no-console
    console.log(page);
    setPage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={'<'}
      nextPageText={'>'}
      onChange={() => handle(page)}
      className={'pagination'}
    />
  );
};

export default PageBar;
