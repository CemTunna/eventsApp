import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
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
        <a className={className && className}>{children}</a>
      </Link>
    );
  }
  return <Button onClick={onClick}>{children}</Button>;
};

export default EventsButton;
