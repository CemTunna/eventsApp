import React from 'react';
import Link from 'next/link';
import styles from 'Styles/Button.module.css';
import classNames from 'classnames';
interface LinkProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
  onClick?: () => void;
  type?: string;
}
const EventsLink: React.FC<LinkProps> = ({
  className,
  children,
  link,
  onClick,
}) => {
  return (
    <Link href={link!}>
      <a
        className={!className ? styles.btn : classNames(className, styles.btn)}
      >
        {children}
      </a>
    </Link>
  );
};

export default EventsLink;
