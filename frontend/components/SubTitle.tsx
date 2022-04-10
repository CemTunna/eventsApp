import { Typography } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import styles from 'Styles/Typography.module.css';
interface SubTitleProps {
  children: React.ReactNode;
  className?: string;
}
const SubTitle: React.FC<SubTitleProps> = ({ className, children }) => {
  return (
    <Typography
      variant='h6'
      className={
        !className ? styles.subTitle : classNames(className, styles.subTitle)
      }
    >
      {children}
    </Typography>
  );
};

export default SubTitle;
