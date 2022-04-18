import React, { useState } from 'react';
import { API_URL } from 'Config/index';
import styles from 'Styles/Form.module.css';
import Title from './Title';
import { Button, Grid, Input } from '@mui/material';
interface ImageUploadProps {
  id: string;
  imageUploaded: () => void;
}
const ImageUpload: React.FC<ImageUploadProps> = ({ id, imageUploaded }) => {
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
      body: formData,
    });
    if (res.ok) {
      imageUploaded();
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <Title>Upload Event Image</Title>
      <form onSubmit={handleSubmit}>
        <Grid className={styles.file}>
          <Input type='file' onChange={handleFileChange} />
        </Grid>
        <Button type='submit' className={styles.btn}>
          Upload
        </Button>
      </form>
    </div>
  );
};

export default ImageUpload;
