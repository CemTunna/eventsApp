import { Typography } from '@mui/material';
import React from 'react';
import styles from 'Styles/Title.module.css';
interface TitleProps {
  children: React.ReactNode;
}
const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <Typography variant='h4' className={styles.title}>
      {children}
    </Typography>
  );
};

export default Title;
