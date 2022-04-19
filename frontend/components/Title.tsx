import { Typography } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import styles from 'Styles/Typography.module.css';
interface TitleProps {
  children: React.ReactNode;
  className?: string;
  size?: string;
}
const Title: React.FC<TitleProps> = ({ size, className, children }) => {
  return (
    <Typography
      variant={!size ? 'h4' : size}
      className={
        !className ? styles.title : classNames(className, styles.title)
      }
    >
      {children}
    </Typography>
  );
};

export default Title;
