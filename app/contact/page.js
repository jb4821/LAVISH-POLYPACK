'use client';
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const contactDetails = [
  {
    icon: <LocationOnIcon />,
    text: 'LAVISH POLYPACK LLP, Tankara, Gujarat 363650, India',
  },
  { icon: <PhoneIcon />, text: '+91-9879260200' },
  { icon: <PhoneIcon />, text: '+91-9979466066' },
  { icon: <PhoneIcon />, text: 'Domestic Bag Inquiry: +91-9904972444' },
  { icon: <PhoneIcon />, text: 'Export Inquiry: +91-7567781212' },
  { icon: <EmailIcon />, text: 'info@lavishpolypack.com' },
  { icon: <EmailIcon />, text: 'exports@lavishpolypack.com' },
  { icon: <EmailIcon />, text: 'kushpolyflex@gmail.com' },
];

const ContactPage = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant='h2'
        component='h1'
        align='center'
        gutterBottom
        sx={{ fontWeight: 'bold' }}
      >
        Contact Us
      </Typography>
      <Grid container spacing={5} sx={{ mt: 4 }}>
        {/* Contact Details Column */}
        <Grid item xs={12} md={6}>
          <Typography
            variant='h4'
            component='h2'
            align='center'
            gutterBottom
            sx={{
              border: '1px solid grey',
              borderRadius: '20px',
              display: 'inline-block',
              px: 2,
              mb: 3,
            }}
          >
            CONTACT US
          </Typography>
          <List>
            {contactDetails.map((detail, index) => (
              <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                <Paper
                  elevation={2}
                  sx={{
                    width: '100%',
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {detail.icon}
                  </ListItemIcon>
                  <ListItemText primary={detail.text} />
                </Paper>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Form and Map Column */}
        <Grid item xs={12} md={6}>
          <Typography
            variant='h4'
            component='h2'
            align='center'
            gutterBottom
            sx={{
              border: '1px solid grey',
              borderRadius: '20px',
              display: 'inline-block',
              px: 2,
              mb: 3,
            }}
          >
            LEAVE A MESSAGE
          </Typography>
          <Paper elevation={3} sx={{ p: 4 }}>
            <form>
              <TextField
                label='Enter Product name'
                variant='outlined'
                fullWidth
                margin='normal'
              />
              <TextField
                label='Type Your Message'
                variant='outlined'
                fullWidth
                multiline
                rows={4}
                margin='normal'
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Name'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Email'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Mobile No.'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label='Enter Your Location'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                  />
                </Grid>
              </Grid>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                sx={{
                  mt: 2,
                  backgroundColor: '#c0392b',
                  '&:hover': { backgroundColor: '#a52c20' },
                }}
              >
                Send Inquiry
              </Button>
            </form>
          </Paper>
          <Box sx={{ mt: 4, height: '400px', width: '100%' }}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.81559806443!2d70.644480!3d22.596371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM1JzQ2LjkiTiA3MMKwMzgnNDAuMSJF!5e0!3m2!1sen!2sus!4v1626883271884!5m2!1sen!2sus'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
