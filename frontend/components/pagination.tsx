import React, { Fragment } from 'react';
import EventsButton from './eventsButton';
import { PER_PAGE } from 'Config/index';

interface PaginationProps {
  total: number;
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, page }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <Fragment>
      {page > 1 && (
        <EventsButton link={`/events?page=${page - 1}`}>Prev</EventsButton>
      )}
      {page < lastPage && (
        <EventsButton link={`/events?page=${page + 1}`}>Next</EventsButton>
      )}
    </Fragment>
  );
};

export default Pagination;
