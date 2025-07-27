'use client';
import { Box, Fab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FloatingActionButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Phone button on the left */}
      <Box
        sx={{
          position: 'fixed',
          bottom: '5rem',
          left: '5px',
          zIndex: 1000,
        }}
      >
        <Fab
          aria-label='call'
          sx={{
            backgroundColor: '#EA4335',
            color: 'white',
            boxShadow: 3,
            '&:hover': { backgroundColor: '#c62828' },
          }}
          onClick={() => window.open('tel:+918238420382', '_self')}
        >
          <PhoneIcon fontSize='large' />
        </Fab>
      </Box>
      {/* WhatsApp button on the right */}
      <Box
        sx={{
          position: 'fixed',
          bottom: '5rem',
          right: '5px',
          zIndex: 1000,
        }}
      >
        <Fab
          aria-label='whatsapp'
          sx={{
            backgroundColor: '#25D366',
            color: 'white',
            boxShadow: 3,
            '&:hover': { backgroundColor: '#1ebe57' },
          }}
          onClick={() => window.open('https://wa.me/918238420382', '_blank')}
        >
          <WhatsAppIcon fontSize='large' />
        </Fab>
      </Box>
      {/* Scroll-to-top button at bottom center */}
      {showScroll && (
        <Box
          sx={{
            position: 'fixed',
            bottom: '5px',
            right: '5px',
            zIndex: 1000,
          }}
        >
          <Fab
            color='default'
            aria-label='scroll to top'
            onClick={handleScrollTop}
            sx={{
              backgroundColor: '#333',
              color: 'white',
              boxShadow: 3,
              '&:hover': { backgroundColor: '#222' },
            }}
          >
            <KeyboardArrowUpIcon fontSize='large' />
          </Fab>
        </Box>
      )}
    </>
  );
};

export default FloatingActionButtons;
