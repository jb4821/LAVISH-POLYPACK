'use client';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import GoogleTranslate from './GoogleTranslate';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LiveClock = dynamic(() => import('./LiveClock'), { ssr: false });

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' gutterBottom>
              Quick Links
            </Typography>
            <Link href='/' color='inherit' display='block'>
              Home
            </Link>
            <Link href='/about' color='inherit' display='block'>
              About Us
            </Link>
            <Link href='/contact' color='inherit' display='block'>
              Contact Us
            </Link>
            <Box sx={{ mt: 2 }}>
              <IconButton
                href='https://facebook.com'
                target='_blank'
                color='inherit'
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href='https://instagram.com'
                target='_blank'
                color='inherit'
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href='https://linkedin.com'
                target='_blank'
                color='inherit'
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
            <GoogleTranslate />
            <LiveClock />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' gutterBottom>
              Chairman&apos;s Word
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Image
                src='https://via.placeholder.com/80'
                alt='Chairman'
                width={80}
                height={80}
                style={{ borderRadius: '50%' }}
              />
              <Typography variant='body2' sx={{ ml: 2 }}>
                &quot;Honesty is very expensive Gift, Don&apos;t expect it from
                Cheap People.&quot;
                <br />- Vivek kasundra
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' gutterBottom>
              Contact Us
            </Typography>
            <Typography variant='body2'>
              LAVISH POLYPACK LLP
              <br />
              survey no 199/p1/p3/p1
              <br />
              opp. Anjani pipe
              <br />
              At - otala, tankara - latipar road
              <br />
              tankara , morbi - 363650
            </Typography>
            <Typography variant='body2' sx={{ mt: 1 }}>
              Mo no - 8238420382
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 4,
            gap: 2,
          }}
        >
          {/* Placeholder for certification logos */}
          <Image
            src='/isi-1.jpg'
            alt='Certification 1'
            width={80}
            height={50}
          />
          <Image
            src='/isi-2.jpg'
            alt='Certification 2'
            width={80}
            height={50}
          />
          <Image src='/iso.png' alt='Certification 3' width={80} height={50} />
          <Image
            src='/madeinindia.png'
            alt='Certification 3'
            width={80}
            height={50}
          />
          <Image src='/BIS.png' alt='Certification 3' width={80} height={50} />
          <Image
            src='/9eadae44-9f1f-44ac-a846-bb78a605e3fe.jpg'
            alt='Certification 3'
            width={80}
            height={50}
          />
        </Box>
        <Typography variant='body2' align='center' sx={{ mt: 4 }}>
          © {new Date().getFullYear()} ALL RIGHTS RESERVED BY LAVISH POLYPACK,
          DESIGNED AND DEVELOPED BY Swastik Tech Lab
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
