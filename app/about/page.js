'use client';
import logo from '../../public/bgg-image.jpeg';
import { Container, Typography, Paper, Grid, Box, Card, CardContent, Avatar, Chip } from '@mui/material';
import { Factory, Public, EmojiEvents, Security, TrendingUp, Group, Science } from '@mui/icons-material';

const AboutPage = () => {
  const companyStats = [
    { icon: Factory, title: 'Years of Experience', value: '5+', description: 'In manufacturing excellence', color: '#8B4513' },
    { icon: Public, title: 'Global Reach', value: '25+', description: 'Countries served worldwide', color: '#D4AF37' },
    { icon: EmojiEvents, title: 'Quality Certifications', value: '5+', description: 'International standards', color: '#8B4513' },
    { icon: Security, title: 'Customer Satisfaction', value: '98%', description: 'Client retention rate', color: '#D4AF37' },
  ];

  const coreValues = [
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuously improving our products and processes to meet evolving market demands.',
      color: '#9b59b6'
    },
    {
      icon: Security,
      title: 'Quality',
      description: 'Maintaining the highest standards in every product we manufacture and deliver.',
      color: '#e74c3c'
    },
    {
      icon: Group,
      title: 'Customer Focus',
      description: 'Building long-term partnerships through exceptional service and reliability.',
      color: '#1abc9c'
    },
    {
      icon: Science,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and responsible manufacturing.',
      color: '#2ecc71'
    }
  ];

  const StatCard = ({ stat }) => {
    const IconComponent = stat.icon;
    return (
      <Card sx={{
        height: '100%',
        background: `linear-gradient(135deg, #FEFEFE 0%, ${stat.color}10 100%)`,
        border: `1px solid ${stat.color}20`,
        borderRadius: 2,
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.02)',
          boxShadow: `0 10px 25px ${stat.color}30`,
          border: `1px solid ${stat.color}50`,
        },
      }}>
        <CardContent sx={{ py: 4, textAlign: 'center' }}>
          <Avatar sx={{
            width: 64,
            height: 64,
            mx: 'auto',
            mb: 2,
            background: stat.color,
            color: 'white',
            boxShadow: `0 6px 20px ${stat.color}30`,
          }}>
            <IconComponent sx={{ fontSize: 32 }} />
          </Avatar>
          <Typography variant="h3" component="div" sx={{
            fontWeight: 700,
            color: stat.color,
            mb: 1,
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '2rem', md: '2.5rem' },
          }}>
            {stat.value}
          </Typography>
          <Typography variant="h6" component="div" sx={{
            fontWeight: 600,
            mb: 1,
            color: '#2D2D2D',
            fontFamily: '"Inter", sans-serif',
          }}>
            {stat.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
            lineHeight: 1.6,
            fontFamily: '"Inter", sans-serif',
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}>
            {stat.description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const ValueCard = ({ value }) => {
    const IconComponent = value.icon;
    return (
      <Card sx={{
        height: '100%',
        width: "100%",
        maxWidth: "300px",
        background: `linear-gradient(135deg, #FEFEFE 0%, ${value.color}08 100%)`,
        border: `1px solid ${value.color}20`,
        borderRadius: 2,
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: `0 12px 30px ${value.color}30`,
          border: `1px solid ${value.color}50`,
        },
      }}>
        <CardContent sx={{ py: 4, textAlign: 'center' }}>
          <Avatar sx={{
            width: 72,
            height: 72,
            mx: 'auto',
            mb: 3,
            background: value.color,
            color: 'white',
            boxShadow: `0 8px 25px ${value.color}30`,
          }}>
            <IconComponent sx={{ fontSize: 36 }} />
          </Avatar>
          <Typography variant="h5" component="div" sx={{
            fontWeight: 600,
            mb: 2,
            color: value.color,
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: '1.3rem', md: '1.5rem' },
          }}>
            {value.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
            lineHeight: 1.7,
            fontSize: { xs: '0.9rem', md: '0.95rem' },
            fontFamily: '"Inter", sans-serif',
          }}>
            {value.description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
      <Box sx={{
        textAlign: 'center',
        mb: 8,
        position: 'relative',
        py: { xs: 6, md: 8 },
        background: '#F7E7B3', // pastel gold
        borderRadius: 3,
        color: '#2D2D2D', // dark text for contrast
        border: '1px solid #D7BFAE', // pastel brown border
        boxShadow: '0 2px 12px #D7BFAE33', // very soft shadow
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, #D7BFAE22 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}>
        <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 0 } }}>
          <Chip
            label="Industry Leader"
            sx={{
              mb: 3,
              bgcolor: '#D7BFAE', // pastel brown
              color: '#8B4513', // brown text
              fontWeight: 500,
              fontSize: '0.9rem',
              fontFamily: '"Inter", sans-serif',
              boxShadow: '0 2px 8px #D7BFAE22',
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
            fontFamily: '"Playfair Display", serif',
            color: '#8B4513',
            letterSpacing: '2px',
          }}>
            About Lavish Polypack LLP
          </Typography>
          <Typography variant="h5" sx={{
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.95,
            fontWeight: 400,
            lineHeight: 1.5,
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontFamily: '"Inter", sans-serif',
            color: '#2D2D2D',
          }}>
            Leading the Future of Packaging Solutions with Innovation & Excellence
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: 8, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        {companyStats.map((stat, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <StatCard stat={stat} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          width: '100%',
          mb: 6,
          height: { xs: '200px', md: '300px' },
           backgroundImage: `url(${logo.src})`, // Fixed the typo in extension
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // position: 'relative',
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
          // '&::before': {
          //   content: '""',
          //   position: 'absolute',
          //   top: 0,
          //   left: 0,
          //   width: '100%',
          //   height: '100%',
          //   background: 'rgba(0, 0, 0, 0.3)', // Dark overlay for better text readability
          //   borderRadius: 'inherit',
          // },
        }}
      >
        {/* Optional: You can add text overlay on the image */}
        {/* <Typography
          variant="h2"
          sx={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            fontWeight: 700,
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontSize: { xs: '2rem', md: '3rem' },
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Welcome to Our Company
        </Typography> */}
      </Box>

      <Paper elevation={0} sx={{
        p: { xs: 4, md: 6 },
        mb: 6,
        background: 'linear-gradient(135deg, #FEFEFE 0%, #F8F6F3 100%)',
        border: '1px solid #F0F0F0',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'linear-gradient(90deg, #8B4513, #D4AF37)',
        },
      }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{
          fontWeight: 700,
          mb: 4,
          color: '#2D2D2D',
          fontFamily: '"Playfair Display", serif',
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #8B4513, #D4AF37)',
            borderRadius: 2,
          },
        }}>
          Company Overview
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.8,
              color: '#555',
              textAlign: 'justify',
              fontFamily: '"Inter", sans-serif',
            }}>
              At Lavish Polypack LLP, we are a leading manufacturer of high-quality PP Woven Fabrics and PP Woven Bags,
              proudly serving a wide range of industries across India and abroad. With a strong commitment to innovation,
              durability, and eco-friendly practices, we deliver packaging solutions that are tailored to meet the evolving
              needs of our clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.8,
              color: '#555',
              textAlign: 'justify',
              fontFamily: '"Inter", sans-serif',
            }}>
              Equipped with modern machinery and a skilled workforce, our facility ensures consistent quality, timely delivery,
              and custom production capabilities. From agriculture to industrial packaging, we&apos;re trusted for strength,
              reliability, and service excellence worldwide.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: { xs: 4, md: 5 },
              background: '#F7E7B3', // pastel gold
              borderRadius: 3,
              border: '1px solid #D7BFAE', // pastel brown border
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              boxShadow: 'none', // remove heavy shadow
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 2,
                color: '#8B4513',
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '1.3rem', md: '1.6rem' },
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                lineHeight: 1.8,
                color: '#2D2D2D',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              To be the most trusted and preferred packaging solutions provider globally, delivering innovative,
              sustainable, and high-quality products that exceed customer expectations while contributing positively
              to the environment and society.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: { xs: 4, md: 5 },
              background: '#F3F3F3', // pastel gray
              borderRadius: 3,
              border: '1px solid #D7BFAE', // pastel brown border
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              boxShadow: 'none',
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 2,
                color: '#8B4513',
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '1.3rem', md: '1.6rem' },
              }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                lineHeight: 1.8,
                color: '#2D2D2D',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              To lead the packaging industry through technological innovation, sustainable practices, and unwavering
              commitment to quality, becoming the global benchmark for excellence in PP woven packaging solutions.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Paper elevation={0} sx={{
        p: { xs: 4, md: 6 },
        mb: 6,
        background: 'linear-gradient(135deg, #FEFEFE 0%, #F8F6F3 100%)',
        border: '1px solid #F0F0F0',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'linear-gradient(90deg, #8B4513, #D4AF37)',
        },
      }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{
          fontWeight: 700,
          mb: 5,
          textAlign: 'center',
          color: '#2D2D2D',
          fontFamily: '"Playfair Display", serif',
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #8B4513, #D4AF37)',
            borderRadius: 2,
          },
        }}>
          Our Core Values
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {coreValues.map((value, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <ValueCard value={value} />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper elevation={0} sx={{
        p: { xs: 4, md: 6 },
        mb: 6,
        background: 'linear-gradient(135deg, #2D2D2D 0%, #444 100%)',
        color: 'white',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{
          fontWeight: 700,
          mb: 4,
          color: "white",
          textAlign: 'center',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          fontFamily: '"Playfair Display", serif',
          fontSize: { xs: '1.8rem', md: '2.2rem' },
        }}>
          Manufacturing Excellence
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{
                fontWeight: 600,
                color: '#D4AF37',
                mb: 2,
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '1.3rem', md: '1.5rem' },
              }}>
                State-of-the-Art Infrastructure
              </Typography>
              <Typography variant="body1" paragraph sx={{
                lineHeight: 1.8,
                opacity: 0.9,
                color: "white",
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.95rem', md: '1.1rem' },
              }}>
                Our manufacturing facility is equipped with the latest technology and modern machinery, ensuring
                consistent quality and high production capacity. We maintain strict quality control measures at
                every stage of production.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" gutterBottom sx={{
                fontWeight: 600,
                color: '#D4AF37',
                mb: 2,
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '1.3rem', md: '1.5rem' },
              }}>
                Skilled Workforce
              </Typography>
              <Typography variant="body1" paragraph sx={{
                lineHeight: 1.8,
                opacity: 0.9,
                color: "white",
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.95rem', md: '1.1rem' },
              }}>
                Our team consists of experienced professionals and skilled workers who are committed to delivering
                excellence in every product. Continuous training and development programs ensure our workforce
                stays updated with the latest industry practices.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{
                fontWeight: 600,
                color: '#D4AF37',
                mb: 2,
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '1.3rem', md: '1.5rem' },
              }}>
                Quality Assurance
              </Typography>
              <Typography variant="body1" paragraph sx={{
                lineHeight: 1.8,
                opacity: 0.9,
                color: "white",
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.95rem', md: '1.1rem' },
              }}>
                We follow international quality standards and have obtained various certifications including ISO,
                BIS, and other relevant quality certifications. Our quality control team ensures that every
                product meets our high standards before reaching customers.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" gutterBottom sx={{
                fontWeight: 600,
                color: '#D4AF37',
                mb: 2,
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: '1.3rem', md: '1.5rem' },
              }}>
                Research & Development
              </Typography>
              <Typography variant="body1" paragraph sx={{
                lineHeight: 1.8,
                opacity: 0.9,
                color: "white",
                fontFamily: '"Inter", sans-serif',
                fontSize: { xs: '0.95rem', md: '1.1rem' },
              }}>
                Our dedicated R&D team continuously works on developing innovative products and improving
                existing ones to meet the evolving needs of our customers and stay ahead in the competitive market.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={0} sx={{
        p: { xs: 4, md: 6 },
        background: 'linear-gradient(135deg, #FEFEFE 0%, #F8F6F3 100%)',
        border: '1px solid #F0F0F0',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: 'linear-gradient(90deg, #8B4513, #D4AF37)',
        },
      }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{
          fontWeight: 700,
          mb: 4,
          color: '#2D2D2D',
          fontFamily: '"Playfair Display", serif',
          fontSize: { xs: '1.8rem', md: '2.2rem' },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #8B4513, #D4AF37)',
            borderRadius: 2,
          },
        }}>
          Global Presence & Export Excellence
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.8,
              color: '#555',
              textAlign: 'justify',
              fontFamily: '"Inter", sans-serif',
            }}>
              We have successfully established a strong global presence, exporting our products to over 25 countries
              across Asia, Africa, the Middle East, and Europe. Our international clientele trusts us for our
              consistent quality, timely delivery, and excellent customer service.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.8,
              color: '#555',
              textAlign: 'justify',
              fontFamily: '"Inter", sans-serif',
            }}>
              Our export operations are backed by a dedicated team that handles international logistics, documentation,
              and compliance requirements, ensuring smooth and hassle-free delivery to our global customers.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutPage;