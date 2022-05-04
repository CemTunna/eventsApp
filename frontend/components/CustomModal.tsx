import React, { Fragment, useEffect } from 'react';
import { Button, Box, Modal, Grid } from '@mui/material';
import ReactDOM from 'react-dom';
import SubTitle from './SubTitle';
import styles from 'Styles/Modal.module.css';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
};
interface CustomModalProps {
  title: string;
  open: boolean;
  children: React.ReactNode;
  handleClose: () => void;
}
const CustomModal: React.FC<CustomModalProps> = ({
  open,
  title,
  handleClose,

  children,
}) => {
  const [isBrowser, setIsBrowser] = React.useState(false);
  useEffect(() => setIsBrowser(true));

  const content = (
    <Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} className={styles.container}>
          {title && <SubTitle>{title}</SubTitle>}
          {children}
        </Box>
      </Modal>
    </Grid>
  );

  return (
    <Fragment>
      {isBrowser &&
        ReactDOM.createPortal(content, document.getElementById('modal-root')!)}
    </Fragment>
  );
};
export default CustomModal;
