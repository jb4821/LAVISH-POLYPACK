'use client';
import { Box, Fab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingActionButtons = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 1000,
      }}
    >
      <Fab color='primary' aria-label='call'>
        <a href='tel:+918238420382' style={{ color: 'inherit' }}>
          <PhoneIcon />
        </a>
      </Fab>
      <Fab color='success' aria-label='whatsapp'>
        <a
          href='https://wa.me/918238420382'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit' }}
        >
          <WhatsAppIcon />
        </a>
      </Fab>
    </Box>
  );
};

export default FloatingActionButtons;
