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
    {
      src: '/9eadae44-9f1f-44ac-a846-bb78a605e3fe.jpg',
      alt: 'Additional Certification',
    },
  ];

  return (
    <Box
      component='footer'
      sx={{
        background: '#fffaf3',
        color: '#111111',
        mt: 'auto',
        borderTop: '4px solid #bdbdbd',
        py: { xs: 4, md: 6 },
        px: { xs: 0, md: 0 },
        boxShadow: '0 -2px 24px rgba(17, 17, 17, 0.1)',
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={4}
          justifyContent='space-between'
          alignItems='flex-start'
          sx={{
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 2 }}>
              <Image
                src='/pollypack.jpeg'
                alt='Lavish Polypack LLP'
                width={140}
                height={40}
                style={{ marginBottom: 8 }}
              />
              <Typography
                variant='body2'
                sx={{ color: '#111111', fontWeight: 600, mb: 1 }}
              >
                LAVISH POLYPACK LLP
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: '#757575', fontSize: '0.97rem' }}
              >
                Best Manufacturer of Packaging Solutions.
                <br />
                With More Than 10 Years Of Experience.
              </Typography>
            </Box>
          </Grid>

          {/* Contacts */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant='h6'
              sx={{
                color: '#111111',
                fontWeight: 700,
                mb: 2,
                fontSize: '1.1rem',
              }}
            >
              Contacts
            </Typography>
            <Typography
              variant='subtitle2'
              sx={{ color: '#bdbdbd', fontWeight: 600, mb: 1 }}
            >
              Domestic
            </Typography>
            <Stack
              direction='row'
              alignItems='center'
              spacing={1}
              sx={{ mb: 0.5 }}
            >
              <EmailIcon sx={{ fontSize: 18, color: '#111111' }} />
              <Typography variant='body2' sx={{ color: '#111111' }}>
                lavishpolypack@gmail.com
              </Typography>
            </Stack>
            <Stack
              direction='row'
              alignItems='center'
              spacing={1}
              sx={{ mb: 0.5 }}
            >
              <PhoneIcon sx={{ fontSize: 18, color: '#111111' }} />
              <Typography variant='body2' sx={{ color: '#111111' }}>
                +91 82384 20382
              </Typography>
            </Stack>
            <Typography
              variant='subtitle2'
              sx={{ color: '#bdbdbd', fontWeight: 600, mt: 2, mb: 1 }}
            >
              Export
            </Typography>
            <Stack
              direction='row'
              alignItems='center'
              spacing={1}
              sx={{ mb: 0.5 }}
            >
              <EmailIcon sx={{ fontSize: 18, color: '#111111' }} />
              <Typography variant='body2' sx={{ color: '#111111' }}>
                export@lavishpolypack.com
              </Typography>
            </Stack>
            <Stack direction='row' alignItems='center' spacing={1}>
              <PhoneIcon sx={{ fontSize: 18, color: '#111111' }} />
              <Typography variant='body2' sx={{ color: '#111111' }}>
                +91 82384 20382
              </Typography>
            </Stack>
          </Grid>

          {/* Address */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant='h6'
              sx={{
                color: '#111111',
                fontWeight: 700,
                mb: 2,
                fontSize: '1.1rem',
              }}
            >
              Address
            </Typography>
            <Stack direction='row' alignItems='flex-start' spacing={1}>
              <LocationOnIcon
                sx={{ fontSize: 20, color: '#111111', mt: 0.5 }}
              />
              <Typography variant='body2' sx={{ color: '#111111' }}>
                Survey No 199/P1/P3/P1
                <br />
                Opp. Anjani Pipe
                <br />
                At - Otala, Tankara - Latipar Road
                <br />
                Tankara, Morbi - 363650
              </Typography>
            </Stack>
          </Grid>

          {/* Social */}
          {/* <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "#8B4513", fontWeight: 700, mb: 2, fontSize: "1.1rem" }}>
              Follow us
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#8B4513", "&:hover": { color: "#D4AF37" } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#8B4513", "&:hover": { color: "#D4AF37" } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "#8B4513", "&:hover": { color: "#D4AF37" } }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
            <Stack spacing={0.5}>
              <Typography variant="body2" sx={{ color: "#2D2D2D" }}>Facebook</Typography>
              <Typography variant="body2" sx={{ color: "#2D2D2D" }}>Instagram</Typography>
              <Typography variant="body2" sx={{ color: "#2D2D2D" }}>LinkedIn</Typography>
            </Stack>
          </Grid> */}
          {/* Certifications */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant='h6'
              sx={{
                color: '#111111',
                fontWeight: 700,
                mb: 2,
                fontSize: '1.1rem',
              }}
            >
              Certifications
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 1,
                maxWidth: '200px',
              }}
            >
              {certifications.map((cert, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'relative',
                    width: '60px',
                    height: '60px',
                    border: '2px solid #D4AF37',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)',
                    },
                  }}
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    style={{
                      objectFit: 'contain',
                      padding: '4px',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 4,
            background:
              'linear-gradient(90deg, transparent, #D4AF37, transparent)',
          }}
        />

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
          <span style={{ color: '#D4AF37', fontWeight: 600 }}>
            LAVISH POLYPACK LLP
          </span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
