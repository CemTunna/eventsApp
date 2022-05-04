import { Typography } from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import styles from 'Styles/Typography.module.css';
interface TextProps {
  children: React.ReactNode;
  className?: string;
}
const Text: React.FC<TextProps> = ({ className, children }) => {
  return (
    <Typography
      variant='body1'
      className={!className ? styles.text : classNames(className, styles.text)}
    >
      {children}
    </Typography>
  );
};

export default Text;
