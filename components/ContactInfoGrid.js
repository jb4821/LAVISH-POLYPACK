import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  Zoom,
  Box,
} from '@mui/material';
import { ContentCopy } from '@mui/icons-material';

const ContactCard = React.memo(({ detail }) => {
  const IconComponent = detail.icon;
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(detail.text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <Zoom in={true}>
      <Card
        sx={{
          mb: 2,
          position: 'relative',
          background: 'rgba(255, 250, 243, 0.97)',
          border: `1px solid ${detail.color}20`,
          borderRadius: 2,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          cursor: detail.action ? 'pointer' : 'default',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 12px 40px ${detail.color}25`,
            border: `1px solid ${detail.color}40`,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '3px',
            background: `linear-gradient(90deg, ${detail.color}, ${detail.color}80)`,
          },
        }}
        onClick={() => detail.action && detail.action()}
      >
        <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
          <Avatar
            sx={{
              width: 50,
              height: 50,
              mr: 3,
              backgroundColor: `${detail.color}15`,
              color: detail.color,
              transition: 'all 0.3s ease',
              boxShadow: `0 4px 15px ${detail.color}20`,
            }}
          >
            <IconComponent sx={{ fontSize: 24 }} />
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 600,
                color: detail.color,
                mb: 0.5,
                fontSize: '1rem',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              {detail.title}
            </Typography>
            <Typography
              variant='body2'
              color='text.primary'
              sx={{
                fontSize: '0.95rem',
                lineHeight: 1.4,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              {detail.text}
            </Typography>
          </Box>
          {detail.copyable && (
            <IconButton
              onClick={handleCopy}
              tabIndex={-1}
              sx={{
                ml: 1,
                color: detail.color,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: `${detail.color}15`,
                  transform: 'scale(1.1)',
                },
              }}
            >
              <ContentCopy sx={{ fontSize: 18 }} />
            </IconButton>
          )}
          <Snackbar
            open={copied}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            autoHideDuration={1200}
            onClose={() => setCopied(false)}
          >
            <Alert severity='info' sx={{ fontFamily: '"Inter", sans-serif' }}>
              Copied to clipboard!
            </Alert>
          </Snackbar>
        </CardContent>
      </Card>
    </Zoom>
  );
});
ContactCard.displayName = 'ContactCard';

const ContactInfoGrid = ({ contactDetails }) => (
  <Grid container spacing={2}>
    {contactDetails.map((detail) => (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={4}
        key={`${detail.text}-${detail.title}`}
      >
        <ContactCard detail={detail} />
      </Grid>
    ))}
  </Grid>
);

export default ContactInfoGrid;
