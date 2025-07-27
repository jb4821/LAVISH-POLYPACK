'use client';
import { Container, Typography, Paper, Grid, Box, Card, CardContent, Avatar, Chip } from '@mui/material';
import { Factory, Business, EmojiEvents, Security, TrendingUp, Group, Science, Public } from '@mui/icons-material';

const AboutPage = () => {
  const companyStats = [
    { icon: Factory, title: 'Years of Experience', value: '10+', description: 'In manufacturing excellence', color: '#e67e22' },
    { icon: Public, title: 'Global Reach', value: '25+', description: 'Countries served worldwide', color: '#3498db' },
    { icon: EmojiEvents, title: 'Quality Certifications', value: '5+', description: 'International standards', color: '#f39c12' },
    { icon: Security, title: 'Customer Satisfaction', value: '98%', description: 'Client retention rate', color: '#27ae60' },
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

  const StatCard = ({ stat, index }) => {
    const IconComponent = stat.icon;
    return (
      <Card sx={{ 
        height: '100%', 
        position: 'relative',
        background: `linear-gradient(135deg, ${stat.color}15 0%, ${stat.color}25 100%)`,
        border: `2px solid ${stat.color}30`,
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: `0 15px 35px ${stat.color}40`,
          border: `2px solid ${stat.color}60`,
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: `linear-gradient(90deg, transparent, ${stat.color}20, transparent)`,
          transition: 'left 0.6s ease',
        },
        '&:hover::before': {
          left: '100%',
        }
      }}>
        <CardContent sx={{ py: 3, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Avatar sx={{ 
            width: 70, 
            height: 70, 
            mx: 'auto', 
            mb: 2,
            background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}cc 100%)`,
            color: 'white',
            boxShadow: `0 8px 25px ${stat.color}40`,
          }}>
            <IconComponent sx={{ fontSize: 35 }} />
          </Avatar>
          <Typography variant="h3" component="div" sx={{ 
            fontWeight: 800, 
            color: stat.color, 
            mb: 1,
            textShadow: `0 2px 4px ${stat.color}30`,
          }}>
            {stat.value}
          </Typography>
          <Typography variant="h6" component="div" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
            {stat.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {stat.description}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const ValueCard = ({ value, index }) => {
    const IconComponent = value.icon;
    return (
      <Card sx={{ 
        height: '100%',
        position: 'relative',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        border: '2px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: `0 20px 40px ${value.color}30`,
          border: `2px solid ${value.color}50`,
          background: `linear-gradient(135deg, #ffffff 0%, ${value.color}08 100%)`,
        }
      }}>
        <CardContent sx={{ py: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Avatar sx={{ 
            width: 80, 
            height: 80, 
            mx: 'auto', 
            mb: 3,
            background: `linear-gradient(135deg, ${value.color} 0%, ${value.color}dd 100%)`,
            color: 'white',
            boxShadow: `0 10px 30px ${value.color}40`,
            transition: 'all 0.3s ease',
          }}>
            <IconComponent sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h5" component="div" sx={{ 
            fontWeight: 700, 
            mb: 2, 
            color: value.color,
            textShadow: `0 1px 3px ${value.color}20`,
          }}>
            {value.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ 
            lineHeight: 1.7,
            fontSize: '0.95rem'
          }}>
            {value.description}
          </Typography>
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
          background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Chip 
            label="Industry Leader" 
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
            About Lavish Polypack LLP
          </Typography>
          <Typography variant="h5" sx={{ 
            maxWidth: '800px', 
            mx: 'auto',
            opacity: 0.95,
            fontWeight: 400,
            lineHeight: 1.4
          }}>
            Leading the Future of Packaging Solutions with Innovation &amp; Excellence
          </Typography>
        </Box>
      </Box>

      {/* Company Statistics */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        {companyStats.map((stat, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <StatCard stat={stat} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Company Overview */}
      <Paper elevation={0} sx={{ 
        p: 6, 
        mb: 6,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        border: '2px solid #e67e2220',
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
          background: 'linear-gradient(90deg, #e67e22, #f39c12, #e67e22)',
        }
      }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ 
          fontWeight: 700, 
          mb: 4,
          color: '#2c3e50',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #e67e22, #f39c12)',
            borderRadius: 2,
          }
        }}>
          Company Overview
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              color: 'text.primary',
              textAlign: 'justify'
            }}>
               At Lavish Polypack LLP, we are a leading manufacturer of high-quality PP Woven Fabrics and PP Woven Bags, 
    proudly serving a wide range of industries across India and abroad. With a strong commitment to innovation, 
    durability, and eco-friendly practices, we deliver packaging solutions that are tailored to meet the evolving 
    needs of our clients.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              color: 'text.primary',
              textAlign: 'justify'
            }}>
              Equipped with modern machinery and a skilled workforce, our facility ensures consistent quality, timely delivery, 
    and custom production capabilities. From agriculture to industrial packaging, we&apos;re trusted for strength, 
    reliability, and service excellence worldwide.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Mission & Vision */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ 
            p: 5, 
            height: '100%', 
            background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)', 
            color: 'white',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(230, 126, 34, 0.3)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: -50,
              right: -50,
              width: 150,
              height: 150,
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            }
          }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h4" component="h3" gutterBottom sx={{ 
                fontWeight: 700, 
                mb: 3,
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.8,
                opacity: 0.95
              }}>
                To be the most trusted and preferred packaging solutions provider globally, delivering innovative, 
                sustainable, and high-quality products that exceed customer expectations while contributing positively 
                to the environment and society.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ 
            p: 5, 
            height: '100%', 
            background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)', 
            color: 'white',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(243, 156, 18, 0.3)',
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: -50,
              left: -50,
              width: 150,
              height: 150,
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              borderRadius: '50%',
            }
          }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h4" component="h3" gutterBottom sx={{ 
                fontWeight: 700, 
                mb: 3,
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.8,
                opacity: 0.95
              }}>
                To lead the packaging industry through technological innovation, sustainable practices, and unwavering 
                commitment to quality, becoming the global benchmark for excellence in PP woven packaging solutions.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Core Values */}
      <Paper elevation={0} sx={{ 
        p: 6, 
        mb: 6,
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
        <Typography variant="h3" component="h2" gutterBottom sx={{ 
          fontWeight: 700, 
          mb: 5, 
          textAlign: 'center',
          color: '#2c3e50',
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
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {coreValues.map((value, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <ValueCard value={value} index={index} />
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Manufacturing Excellence */}
      <Paper elevation={0} sx={{ 
        p: 6, 
        mb: 6,
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(44, 62, 80, 0.3)',
      }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ 
          fontWeight: 700, 
          mb: 4,
          textAlign: 'center',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}>
          Manufacturing Excellence
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600, 
                color: '#f39c12',
                mb: 2
              }}>
                State-of-the-Art Infrastructure
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, opacity: 0.9 }}>
                Our manufacturing facility is equipped with the latest technology and modern machinery, ensuring 
                consistent quality and high production capacity. We maintain strict quality control measures at 
                every stage of production.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600, 
                color: '#f39c12',
                mb: 2
              }}>
                Skilled Workforce
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, opacity: 0.9 }}>
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
                color: '#f39c12',
                mb: 2
              }}>
                Quality Assurance
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, opacity: 0.9 }}>
                We follow international quality standards and have obtained various certifications including ISO, 
                BIS, and other relevant quality certifications. Our quality control team ensures that every 
                product meets our high standards before reaching customers.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600, 
                color: '#f39c12',
                mb: 2
              }}>
                Research & Development
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, opacity: 0.9 }}>
                Our dedicated R&D team continuously works on developing innovative products and improving 
                existing ones to meet the evolving needs of our customers and stay ahead in the competitive market.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Global Presence */}
      <Paper elevation={0} sx={{ 
        p: 6,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        border: '2px solid #e67e2220',
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
          background: 'linear-gradient(90deg, #e67e22, #f39c12, #e67e22)',
        }
      }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ 
          fontWeight: 700, 
          mb: 4,
          color: '#2c3e50',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '120px',
            height: '4px',
            background: 'linear-gradient(90deg, #e67e22, #f39c12)',
            borderRadius: 2,
          }
        }}>
          Global Presence & Export Excellence
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              color: 'text.primary',
              textAlign: 'justify'
            }}>
              We have successfully established a strong global presence, exporting our products to over 25 countries 
              across Asia, Africa, the Middle East, and Europe. Our international clientele trusts us for our 
              consistent quality, timely delivery, and excellent customer service.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              color: 'text.primary',
              textAlign: 'justify'
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