'use client';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import GoogleTranslate from './GoogleTranslate';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const LiveClock = dynamic(() => import('./LiveClock'), { ssr: false });

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const socialLinks = [
    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
    { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const certifications = [
    { src: '/isi-1.jpg', alt: 'ISI Certification 1' },
    { src: '/isi-2.jpg', alt: 'ISI Certification 2' },
    { src: '/iso.png', alt: 'ISO Certification' },
    { src: '/madeinindia.png', alt: 'Made in India' },
    { src: '/BIS.png', alt: 'BIS Certification' },
    { src: '/9eadae44-9f1f-44ac-a846-bb78a605e3fe.jpg', alt: 'Additional Certification' },
  ];

  return (
    <Box
      component='footer'
      sx={{
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #e67e22 0%, #f39c12 50%, #e67e22 100%)',
        }
      }}
    >
      {/* Main Footer Content */}
      <Container maxWidth='lg' sx={{ py: { xs: 4, sm: 6 } }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
          {/* Quick Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography 
                variant='h6' 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  fontWeight: 700,
                  color: '#f39c12',
                  mb: 3,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: { xs: '50%', sm: 0 },
                    transform: { xs: 'translateX(-50%)', sm: 'none' },
                    width: 40,
                    height: 3,
                    background: 'linear-gradient(90deg, #e67e22, #f39c12)',
                    borderRadius: 2,
                  }
                }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {quickLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    color='inherit' 
                    sx={{ 
                      textDecoration: 'none',
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      display: 'inline-block',
                      '&:hover': {
                        color: '#f39c12',
                        transform: 'translateX(8px)',
                      },
                      '&::before': {
                        content: '"→"',
                        position: 'absolute',
                        left: -20,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        color: '#e67e22',
                      },
                      '&:hover::before': {
                        opacity: 1,
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>

              {/* Social Media Icons */}
              <Box sx={{ 
                mt: 3, 
                display: 'flex', 
                justifyContent: { xs: 'center', sm: 'flex-start' }, 
                gap: 1.5 
              }}>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <IconButton
                      key={social.label}
                      href={social.href}
                      target='_blank'
                      sx={{
                        color: 'white',
                        background: 'rgba(243, 156, 18, 0.1)',
                        border: '2px solid rgba(243, 156, 18, 0.3)',
                        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #e67e22, #f39c12)',
                          transform: 'translateY(-3px) scale(1.1)',
                          boxShadow: '0 6px 20px rgba(243, 156, 18, 0.4)',
                          border: '2px solid transparent',
                        }
                      }}
                    >
                      <IconComponent fontSize='small' />
                    </IconButton>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* Chairman's Word Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography 
                variant='h6' 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  fontWeight: 700,
                  color: '#f39c12',
                  mb: 3,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: { xs: '50%', sm: 0 },
                    transform: { xs: 'translateX(-50%)', sm: 'none' },
                    width: 40,
                    height: 3,
                    background: 'linear-gradient(90deg, #e67e22, #f39c12)',
                    borderRadius: 2,
                  }
                }}
              >
                Chairman&apos;s Word
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                p: 3,
                background: 'rgba(243, 156, 18, 0.05)',
                borderRadius: 3,
                border: '1px solid rgba(243, 156, 18, 0.1)',
                backdropFilter: 'blur(10px)',
              }}>
                <Box sx={{ 
                  position: 'relative',
                  alignSelf: { xs: 'center', sm: 'flex-start' },
                  mb: { xs: 2, sm: 0 }
                }}>
                </Box>
                <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography 
                    variant='body2' 
                    sx={{ 
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                      color: '#ecf0f1',
                      mb: 1
                    }}
                  >
                    &quot;Honesty is very expensive Gift, Don&apos;t expect it from
                    Cheap People.&quot;
                  </Typography>
                  <Typography 
                    variant='body2' 
                    sx={{ 
                      color: '#f39c12',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}
                  >
                    - Vivek Kanani
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sm={12} md={5}>
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography 
                variant='h6' 
                gutterBottom 
                sx={{ 
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  fontWeight: 700,
                  color: '#f39c12',
                  mb: 3,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: { xs: '50%', sm: 0 },
                    transform: { xs: 'translateX(-50%)', sm: 'none' },
                    width: 40,
                    height: 3,
                    background: 'linear-gradient(90deg, #e67e22, #f39c12)',
                    borderRadius: 2,
                  }
                }}
              >
                Contact Information
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                {/* Company Name */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Box sx={{ 
                    p: 1, 
                    borderRadius: 2, 
                    background: 'linear-gradient(135deg, #e67e22, #f39c12)',
                    minWidth: 40,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <LocationOnIcon sx={{ fontSize: '1.2rem', color: 'white' }} />
                  </Box>
                  <Typography 
                    variant='body2' 
                    sx={{ 
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      lineHeight: 1.6,
                      color: '#ecf0f1'
                    }}
                  >
                    <strong style={{ color: '#f39c12' }}>LAVISH POLYPACK LLP</strong><br />
                    Survey No 199/P1/P3/P1<br />
                    Opp. Anjani Pipe<br />
                    At - Otala, Tankara - Latipar Road<br />
                    Tankara, Morbi - 363650
                  </Typography>
                </Box>

                {/* Phone */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ 
                    p: 1, 
                    borderRadius: 2, 
                    background: 'linear-gradient(135deg, #e67e22, #f39c12)',
                    minWidth: 40,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <PhoneIcon sx={{ fontSize: '1.2rem', color: 'white' }} />
                  </Box>
                  <Typography 
                    variant='body2' 
                    sx={{ 
                      fontSize: { xs: '0.9rem', sm: '0.95rem' },
                      color: '#ecf0f1'
                    }}
                  >
                    <Link 
                      href="tel:8238420382" 
                      sx={{ 
                        color: '#f39c12', 
                        textDecoration: 'none',
                        '&:hover': { color: '#e67e22' }
                      }}
                    >
                      +91 8238420382
                    </Link>
                  </Typography>
                </Box>

                {/* Tools Section */}
                <Box sx={{ mt: 2 }}>
                  <GoogleTranslate />
                  <Box sx={{ mt: 1 }}>
                    <LiveClock />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Certifications Section */}
        <Divider sx={{ 
          my: 5, 
          background: 'linear-gradient(90deg, transparent, rgba(243, 156, 18, 0.5), transparent)' 
        }} />
        
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant='h6' 
            sx={{ 
              fontSize: { xs: '1.1rem', sm: '1.2rem' },
              fontWeight: 700,
              color: '#f39c12',
              mb: 3
            }}
          >
            Our Certifications & Partnerships
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
            }}
          >
            {certifications.map((cert, index) => (
              <Box
                key={index}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(243, 156, 18, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 25px rgba(243, 156, 18, 0.2)',
                    border: '1px solid rgba(243, 156, 18, 0.4)',
                  }
                }}
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={80}
                  height={50}
                  style={{ 
                    filter: 'brightness(1.1)',
                    transition: 'filter 0.3s ease'
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Copyright Section */}
        <Divider sx={{ 
          mb: 3, 
          background: 'linear-gradient(90deg, transparent, rgba(243, 156, 18, 0.3), transparent)' 
        }} />
        <Typography 
          variant='body2' 
          align='center' 
          sx={{ 
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            color: '#bdc3c7',
            lineHeight: 1.6
          }}
        >
          © {new Date().getFullYear()} ALL RIGHTS RESERVED BY{' '}
          <span style={{ color: '#f39c12', fontWeight: 600 }}>LAVISH POLYPACK LLP</span>
          <br />
          DESIGNED AND DEVELOPED BY{' '}
          <span style={{ color: '#e67e22', fontWeight: 600 }}>Swastik Tech Lab</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;