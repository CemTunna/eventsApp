import React from 'react';
import Link from 'next/link';
import styles from 'Styles/Link.module.css';
import classNames from 'classnames';
import { Button } from '@mui/material';
interface LinkProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}
const EventsLink: React.FC<LinkProps> = ({
  onClick,
  className,
  children,
  link,
  type,
}) => {
  if (link && link.length !== 0) {
    return (
      <Link href={link!}>
        <a
          className={
            !className ? styles.link : classNames(className, styles.link)
          }
        >
          {children}
        </a>
      </Link>
    );
  }
  return (
    <Button
      type={type}
      onClick={onClick && onClick}
      className={!className ? styles.btn : classNames(className, styles.btn)}
    >
      {children}
    </Button>
  );
};

export default EventsLink;
