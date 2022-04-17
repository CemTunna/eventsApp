import React, { useEffect } from 'react';
import { Button, Box, Modal, Grid } from '@mui/material';
import ReactDOM from 'react-dom';
import SubTitle from './SubTitle';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface CustomModalProps {
  title: string;
  open: boolean;
  children: React.ReactNode;
  handleClose: () => void;
  handleOpen: () => void;
}
const CustomModal: React.FC<CustomModalProps> = ({
  open,
  title,
  handleClose,
  handleOpen,
  children,
}) => {
  const [isBrowser, setIsBrowser] = React.useState(false);
  useEffect(() => setIsBrowser(true));

  const content = (
    <Grid>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {title && <SubTitle>{title}</SubTitle>}
          {children}
        </Box>
      </Modal>
    </Grid>
  );

  return (
    isBrowser &&
    ReactDOM.createPortal(content, document.getElementById('modal-root')!)
  );
};
export default CustomModal;
