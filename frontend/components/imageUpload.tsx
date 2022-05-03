import React, { useState } from 'react';
import { API_URL } from 'Config/index';
import styles from 'Styles/Form.module.css';
import Title from './Title';
import { Grid, Input } from '@mui/material';
import EventsLink from './EventsLink';
import UploadIcon from '@mui/icons-material/Upload';
interface ImageUploadProps {
  id: string;
  imageUploaded: () => void;
  token: string;
}
const ImageUpload: React.FC<ImageUploadProps> = ({
  token,
  id,
  imageUploaded,
}) => {
  const [image, setImage] = useState(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', image!);
    formData.append('ref', 'events');
    formData.append('refId', id);
    formData.append('field', 'image');
    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (res.ok) {
      imageUploaded();
    }
  };
  const handleFileChange = (e: any) => {
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <Title>Upload Event Image</Title>
      <form onSubmit={handleSubmit}>
        <Grid className={styles.file}>
          <Input
            type='file'
            onChange={handleFileChange}
            className={styles.fileUp}
          />
        </Grid>
        <EventsLink type='submit' className={styles.uploadBtn}>
          <UploadIcon style={{ color: '#fff', marginRight: 10 }} /> Upload
        </EventsLink>
      </form>
    </div>
  );
};

export default ImageUpload;
