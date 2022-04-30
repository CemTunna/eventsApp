import React, { Fragment } from 'react';
import { PER_PAGE } from 'Config/index';
import classNames from 'classnames';
import EventsLink from './EventsLink';

interface PaginationProps {
  total: number;
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, page }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <Fragment>
      {page > 1 && (
        <EventsLink link={`/events?page=${page - 1}`}>Prev</EventsLink>
      )}
      {page < lastPage && (
        <EventsLink link={`/events?page=${page + 1}`}>Next</EventsLink>
      )}
    </Fragment>
  );
};

export default Pagination;
