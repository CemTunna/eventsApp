import React, { Fragment } from 'react';
import { PER_PAGE } from 'Config/index';
import classNames from 'classnames';
import EventsLink from './EventsLink';
import styles from 'Styles/Link.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
interface PaginationProps {
  total: number;
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, page }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <Fragment>
      {page > 1 && (
        <EventsLink
          className={classNames(styles.btn, styles.btnpagination)}
          link={`/events?page=${page - 1}`}
        >
          <ArrowBackIosIcon style={{ marginRight: 10 }} /> Prev
        </EventsLink>
      )}
      {page < lastPage && (
        <EventsLink
          className={classNames(styles.btn, styles.btnpagination)}
          link={`/events?page=${page + 1}`}
        >
          Next
          <ArrowForwardIosIcon style={{ marginLeft: 10 }} />
        </EventsLink>
      )}
    </Fragment>
  );
};

export default Pagination;
