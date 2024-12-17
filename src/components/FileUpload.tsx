import React, { useState } from 'react';
import { Button, Snackbar, Typography } from '@mui/material';
import axios from 'axios';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSnackbarMessage('File uploaded successfully!');
    } catch (error) {
      setSnackbarMessage('File upload failed.');
    }
    setSnackbarOpen(true);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <Typography variant="h5">Upload Document for Translation</Typography>
      <input type="file" onChange={handleFileChange} accept=".txt,.docx,.pdf" />
      <Button
        variant="contained"
        color="primary"
        onClick={handleFileUpload}
        disabled={!file}
      >
        Upload and Translate
      </Button>
      <Snackbar
        open={snackbarOpen}
        message={snackbarMessage}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      />
    </div>
  );
};

export default FileUpload;
