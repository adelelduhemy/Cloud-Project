import React from 'react';
import Header from '../components/Header';
import TranslationForm from '../components/TranslationForm';
import FileUpload from '../components/FileUpload';

const Home: React.FC = () => {
  return (
    <>
      <Header title="Translation Service" />
      <TranslationForm />
      <FileUpload />
    </>
  );
};

export default Home;
