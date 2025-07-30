'use client';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
  Divider,
  Stack,
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
        background: 'linear-gradient(135deg, #F7E7B3 0%, #D7BFAE 100%)', // pastel gold to brown
        color: '#2D2D2D',
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 4, md: 6 },
        pb: { xs: 2, md: 3 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #8B4513 0%, #D4AF37 50%, #8B4513 100%)',
        }
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          sx={{
            flexWrap: 'wrap',
            gap: { xs: 0, md: 0 },
          }}
        >
          {/* Quick Links & Social */}
          <Grid item xs={12} md={4} minWidth={0}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 700,
                color: '#8B4513',
                mb: 2,
                letterSpacing: '1px',
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5} sx={{ mb: 3 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color='inherit'
                  sx={{
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    transition: 'color 0.3s',
                    color: '#8B4513',
                    '&:hover': { color: '#D4AF37' },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <IconButton
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    sx={{
                      color: '#8B4513',
                      background: 'rgba(139,69,19,0.08)',
                      border: '2px solid rgba(139,69,19,0.18)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #D4AF37, #8B4513)',
                        color: 'white',
                        border: '2px solid #D4AF37',
                        transform: 'scale(1.15)',
                      }
                    }}
                  >
                    <IconComponent fontSize='medium' />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4} minWidth={0}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 700,
                color: '#8B4513',
                mb: 2,
                letterSpacing: '1px',
              }}
            >
              Contact Information
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Box sx={{
                  p: 1,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #D4AF37, #F7E7B3)',
                  minWidth: 40,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <LocationOnIcon sx={{ fontSize: '1.4rem', color: '#8B4513' }} />
                </Box>
                <Typography variant='body2' sx={{ color: '#2D2D2D', fontSize: '1rem', lineHeight: 1.7 }}>
                  <strong style={{ color: '#8B4513' }}>LAVISH POLYPACK LLP</strong><br />
                  Survey No 199/P1/P3/P1<br />
                  Opp. Anjani Pipe<br />
                  At - Otala, Tankara - Latipar Road<br />
                  Tankara, Morbi - 363650
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{
                  p: 1,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #D4AF37, #F7E7B3)',
                  minWidth: 40,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <PhoneIcon sx={{ fontSize: '1.4rem', color: '#8B4513' }} />
                </Box>
                <Typography variant='body2' sx={{ color: '#2D2D2D', fontSize: '1rem' }}>
                  <Link
                    href="tel:8238420382"
                    sx={{
                      color: '#8B4513',
                      textDecoration: 'none',
                      fontWeight: 600,
                      '&:hover': { color: '#D4AF37' }
                    }}
                  >
                    +91 8238420382
                  </Link>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{
                  p: 1,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #D4AF37, #F7E7B3)',
                  minWidth: 40,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <EmailIcon sx={{ fontSize: '1.4rem', color: '#8B4513' }} />
                </Box>
                <Typography variant='body2' sx={{ color: '#2D2D2D', fontSize: '1rem' }}>
                  <Link
                    href="mailto:lavishpolypack@gmail.com"
                    sx={{
                      color: '#8B4513',
                      textDecoration: 'none',
                      fontWeight: 600,
                      '&:hover': { color: '#D4AF37' }
                    }}
                  >
                    lavishpolypack@gmail.com
                  </Link>
                </Typography>
              </Stack>
              <Box sx={{ mt: 2 }}>
                <GoogleTranslate />
                <Box sx={{ mt: 1 }}>
                  <LiveClock />
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Certifications */}
          <Grid item xs={12} md={4} minWidth={0}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 700,
                color: '#8B4513',
                mb: 2,
                letterSpacing: '1px',
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Certifications
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
              }}
            >
              {certifications.map((cert, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 1,
                    borderRadius: 2,
                    background: '#F3F3F3', // pastel gray
                    border: '1px solid #D7BFAE',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.08)',
                      boxShadow: '0 8px 25px #D7BFAE55',
                      border: '1px solid #D4AF37',
                    }
                  }}
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={70}
                    height={44}
                    style={{
                      filter: 'brightness(1.1)',
                      transition: 'filter 0.3s'
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{
          my: 4,
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)'
        }} />

        <Typography
          variant='body2'
          align='center'
          sx={{
            fontSize: { xs: '0.85rem', sm: '0.95rem' },
            color: '#8B4513',
            lineHeight: 1.7,
            letterSpacing: '0.5px',
            mb: 1,
          }}
        >
          © {new Date().getFullYear()} ALL RIGHTS RESERVED BY{' '}
          <span style={{ color: '#D4AF37', fontWeight: 600 }}>LAVISH POLYPACK LLP</span>
          <br />
          DESIGNED AND DEVELOPED BY{' '}
          <span style={{ color: '#8B4513', fontWeight: 600 }}>Swastik Tech Lab</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;