import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import classes from './button.module.css';
interface ButtonProps {
  children?: React.ReactNode;
  link?: string;
  onClick?: () => void;
  type?: string;
}
const EventsButton: React.FC<ButtonProps> = ({
  type,
  children,
  link,
  onClick,
}) => {
  if (link) {
    return (
      <Link href={link}>
        <a>{children}</a>
      </Link>
    );
  }
  return <Button onClick={onClick}>{children}</Button>;
};

export default EventsButton;
