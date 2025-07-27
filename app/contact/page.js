'use client';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Avatar,
  Chip,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  Business,
  Public,
  Send,
  ContentCopy,
} from '@mui/icons-material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    productName: '',
    message: '',
    name: '',
    email: '',
    mobile: '',
    location: '',
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const contactDetails = [
    {
      icon: LocationOn,
      title: 'Our Location',
      text: 'LAVISH POLYPACK LLP, Tankara, Gujarat 363650, India',
      color: '#e74c3c',
      copyable: true,
    },
    {
      icon: Phone,
      title: 'General Inquiry',
      text: '+91-9879260200',
      color: '#3498db',
      copyable: true,
    },
    {
      icon: Phone,
      title: 'Customer Support',
      text: '+91-9979466066',
      color: '#3498db',
      copyable: true,
    },
    {
      icon: Business,
      title: 'Domestic Bag Inquiry',
      text: '+91-9904972444',
      color: '#f39c12',
      copyable: true,
    },
    {
      icon: Public,
      title: 'Export Inquiry',
      text: '+91-7567781212',
      color: '#e67e22',
      copyable: true,
    },
    {
      icon: Email,
      title: 'General Email',
      text: 'info@lavishpolypack.com',
      color: '#9b59b6',
      copyable: true,
    },
    {
      icon: Email,
      title: 'Export Email',
      text: 'exports@lavishpolypack.com',
      color: '#1abc9c',
      copyable: true,
    },
    {
      icon: Email,
      title: 'Alternative Email',
      text: 'kushpolyflex@gmail.com',
      color: '#27ae60',
      copyable: true,
    },
  ];

  const handleInputChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission
    setSnackbar({
      open: true,
      message: 'Your inquiry has been sent successfully!',
      severity: 'success'
    });
    // Reset form
    setFormData({
      productName: '',
      message: '',
      name: '',
      email: '',
      mobile: '',
      location: '',
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setSnackbar({
        open: true,
        message: 'Copied to clipboard!',
        severity: 'info'
      });
    });
  };

  const ContactCard = ({ detail, index }) => {
    const IconComponent = detail.icon;
    return (
      <Card sx={{
        mb: 2,
        position: 'relative',
        background: `linear-gradient(135deg, ${detail.color}08 0%, ${detail.color}15 100%)`,
        border: `2px solid ${detail.color}20`,
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 12px 30px ${detail.color}25`,
          border: `2px solid ${detail.color}40`,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: `linear-gradient(90deg, transparent, ${detail.color}10, transparent)`,
          transition: 'left 0.6s ease',
        },
        '&:hover::before': {
          left: '100%',
        }
      }}>
        <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <Avatar sx={{
            width: 50,
            height: 50,
            mr: 3,
            background: `linear-gradient(135deg, ${detail.color} 0%, ${detail.color}cc 100%)`,
            color: 'white',
            boxShadow: `0 6px 20px ${detail.color}30`,
          }}>
            <IconComponent sx={{ fontSize: 24 }} />
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              color: detail.color,
              mb: 0.5,
              fontSize: '1rem'
            }}>
              {detail.title}
            </Typography>
            <Typography variant="body2" color="text.primary" sx={{ 
              fontSize: '0.95rem',
              lineHeight: 1.4
            }}>
              {detail.text}
            </Typography>
          </Box>
          {detail.copyable && (
            <IconButton
              onClick={() => copyToClipboard(detail.text)}
              sx={{
                ml: 1,
                color: detail.color,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: `${detail.color}15`,
                  transform: 'scale(1.1)',
                }
              }}
            >
              <ContentCopy sx={{ fontSize: 18 }} />
            </IconButton>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{
        textAlign: 'center',
        mb: 8,
        position: 'relative',
        py: 6,
        background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
        borderRadius: 4,
        color: 'white',
        boxShadow: '0 15px 35px rgba(230, 126, 34, 0.3)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Chip
            label="Get In Touch"
            sx={{
              mb: 3,
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
              backdropFilter: 'blur(10px)',
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom sx={{
            fontWeight: 800,
            mb: 2,
            textShadow: '0 4px 8px rgba(0,0,0,0.2)',
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}>
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.95,
            fontWeight: 400,
            lineHeight: 1.4
          }}>
            Ready to Partner with India&apos;s Leading Packaging Solutions Provider
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={6}>
        {/* Contact Details Column */}
        <Grid item xs={12} lg={5}>
          <Paper elevation={0} sx={{
            p: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            border: '2px solid #e67e2220',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            height: 'fit-content',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '6px',
              background: 'linear-gradient(90deg, #e67e22, #f39c12, #e67e22)',
            }
          }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{
              fontWeight: 700,
              mb: 4,
              color: '#2c3e50',
              textAlign: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #e67e22, #f39c12)',
                borderRadius: 2,
              }
            }}>
              Contact Information
            </Typography>
            
            {contactDetails.map((detail, index) => (
              <ContactCard key={index} detail={detail} index={index} />
            ))}
          </Paper>
        </Grid>

        {/* Form and Map Column */}
        <Grid item xs={12} lg={7}>
          <Grid container spacing={4}>
            {/* Contact Form */}
            <Grid item xs={12}>
              <Paper elevation={0} sx={{
                p: 5,
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border: '2px solid #f39c1220',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '6px',
                  background: 'linear-gradient(90deg, #f39c12, #e67e22, #f39c12)',
                }
              }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{
                  fontWeight: 700,
                  mb: 4,
                  color: '#2c3e50',
                  textAlign: 'center',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #f39c12, #e67e22)',
                    borderRadius: 2,
                  }
                }}>
                  Send Your Inquiry
                </Typography>

                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Product Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formData.productName}
                    onChange={handleInputChange('productName')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': { borderColor: '#e67e22' },
                        '&.Mui-focused fieldset': { borderColor: '#f39c12' },
                      },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#e67e22' },
                    }}
                  />
                  
                  <TextField
                    label="Your Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': { borderColor: '#e67e22' },
                        '&.Mui-focused fieldset': { borderColor: '#f39c12' },
                      },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#e67e22' },
                    }}
                  />
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': { borderColor: '#e67e22' },
                            '&.Mui-focused fieldset': { borderColor: '#f39c12' },
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#e67e22' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': { borderColor: '#e67e22' },
                            '&.Mui-focused fieldset': { borderColor: '#f39c12' },
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#e67e22' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Mobile Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.mobile}
                        onChange={handleInputChange('mobile')}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': { borderColor: '#e67e22' },
                            '&.Mui-focused fieldset': { borderColor: '#f39c12' },
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#e67e22' },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Your Location"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.location}
                        onChange={handleInputChange('location')}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': { borderColor: '#e67e22' },
                            '&.Mui-focused fieldset': { borderColor: '#f39c12' },
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#e67e22' },
                        }}
                      />
                    </Grid>
                  </Grid>
                  
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    startIcon={<Send />}
                    sx={{
                      mt: 3,
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                      borderRadius: 3,
                      textTransform: 'none',
                      boxShadow: '0 8px 25px rgba(230, 126, 34, 0.3)',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 12px 35px rgba(230, 126, 34, 0.4)',
                      }
                    }}
                  >
                    Send Inquiry
                  </Button>
                </form>
              </Paper>
            </Grid>

            {/* Map Section */}
            <Grid item xs={12}>
            <Box
  sx={{
    mt: 6,
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    transform: 'translateX(-50%)',
    px: { xs: 2, md: 4 },
  }}
>
  <Paper
    elevation={0}
    sx={{
      p: 2,
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      border: '2px solid #e67e2220',
      borderRadius: 3,
      position: 'relative',
      overflow: 'hidden',
      maxWidth: '1600px',
      mx: 'auto',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '6px',
        background: 'linear-gradient(90deg, #e67e22, #f39c12, #e67e22)',
      },
    }}
  >
    <Typography
      variant="h5"
      component="h3"
      gutterBottom
      sx={{
        fontWeight: 600,
        mb: 3,
        color: '#2c3e50',
        textAlign: 'center',
      }}
    >
      Find Us On Map
    </Typography>
    <Box
      sx={{
        height: { xs: '300px', md: '500px' },
        width: '100%',
        borderRadius: 2,
        overflow: 'hidden',
        border: '3px solid #e67e2230',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.81559806443!2d70.644480!3d22.596371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM1JzQ2LjkiTiA3MMKwMzgnNDAuMSJF!5e0!3m2!1sen!2sus!4v1626883271884!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
    </Box>
  </Paper>
</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactPage;