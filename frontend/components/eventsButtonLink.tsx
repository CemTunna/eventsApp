import React from 'react';
import Link from 'next/link';
import styles from 'Styles/Button.module.css';
import classNames from 'classnames';
interface ButtonProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
  type?: string;
}
const EventsButton: React.FC<ButtonProps> = ({ className, children, link }) => {
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

export default EventsButton;
