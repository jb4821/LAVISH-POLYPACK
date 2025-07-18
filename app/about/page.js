'use client';
import { Container, Typography, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        About Us
      </Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="body1" paragraph>
          LAVISH POLYPACK LLP is a leading manufacturer and supplier of
          high-quality packaging solutions. We are committed to providing our
          customers with innovative and reliable products that meet their
          specific needs. Our state-of-the-art infrastructure and experienced
          team enable us to deliver exceptional value and service.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to be the preferred packaging partner for businesses
          across various industries by consistently delivering excellence in
          everything we do.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutPage;
