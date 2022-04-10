import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import styles from 'Styles/Button.module.css';
import classNames from 'classnames';
interface ButtonProps {
  children?: React.ReactNode;
  link?: string;
  className?: string;
  onClick?: () => void;
}
const EventsButton: React.FC<ButtonProps> = ({
  className,
  children,
  link,
  onClick,
}) => {
  if (link) {
    return (
      <Link href={link}>
        <a
          className={
            !className ? styles.btn : classNames(className, styles.btn)
          }
        >
          {children}
        </a>
      </Link>
    );
  }
  return <Button onClick={onClick}>{children}</Button>;
};

export default EventsButton;
