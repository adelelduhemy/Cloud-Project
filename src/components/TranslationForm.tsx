import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';

const TranslationForm: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleTranslate = async () => {
    if (!inputText) return;
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/translate/ar2en', { text: inputText });
      setTranslatedText(response.data.translation);
    } catch (error) {
      console.error('Translation Error:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <TextField
        label="Enter text"
        multiline
        fullWidth
        rows={4}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleTranslate} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Translate'}
      </Button>
      {translatedText && (
        <Typography variant="h5" style={{ marginTop: '20px' }}>
          Translation: {translatedText}
        </Typography>
      )}
    </div>
  );
};

export default TranslationForm;
