import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
interface ButtonProps {
  children?: React.ReactNode;
  link?: string;
  onClick?: () => void;
}
const EventsButton: React.FC<ButtonProps> = ({ children, link, onClick }) => {
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
