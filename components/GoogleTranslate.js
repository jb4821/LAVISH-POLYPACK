'use client';
import { useEffect } from 'react';
import { Box } from '@mui/material';

const GoogleTranslate = () => {
  useEffect(() => {
    // Check if the script has already been added
    if (window.google && window.google.translate) {
      return;
    }

    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    // Check if the script is already in the document
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = googleTranslateElementInit;

    // No cleanup needed, as we want the script to persist
  }, []);

  return <Box id='google_translate_element' sx={{ mt: 2 }} />;
};

export default GoogleTranslate;
