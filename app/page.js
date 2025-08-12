'use client';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  CardMedia,
  Divider,
  Fade,
  Chip,
  Stack,
  IconButton,
  Paper,
  Skeleton,
} from '@mui/material';
import {
  ArrowForward,
  Star,
  Verified,
  TrendingUp,
  LocalShipping,
  Security,
  Support,
  PlayArrow,
  Phone,
  Email,
  LocationOn,
  Eco,
} from '@mui/icons-material';
import ImageSlider from '../components/ImageSlider';
import Link from 'next/link';
import { products } from '../lib/products';
import Stats from '../components/Stats';
import { useState, useEffect } from 'react';
import 'yet-another-react-lightbox/styles.css';
import AboutVideoSection from '@/components/AboutVideoSection';
import { ChevronRight, Leaf, Shield } from 'lucide-react';

export default function Home() {
  const displayedProducts = products.slice(0, 4);
  const [hoveredProduct, setHoveredProduct] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFeature, setActiveFeature] = useState(0);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to truncate description
  const truncateDescription = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const handleImageClick = (image) => {
    console.log('Image clicked:', image);
  };

  const features = [
    {
      icon: <PlayArrow />,
      title: 'Custom Solutions',
      description: 'Tailored packaging for your needs',
      color: '#8B4513'
    },
    {
      icon: <Security />,
      title: 'Quality Assured',
      description: 'ISO certified products',
      color: '#D4AF37'
    },
    {
      icon: <Support />,
      title: '24/7 Support',
      description: 'Expert technical support',
      color: '#8B4513'
    }
  ];

  // Use first product as default background
  const backgroundImage = hoveredProduct !== null ? products[hoveredProduct].image : products[0].image;
  return (
    <Box sx={{ backgroundColor: '#FEFEFE' }}>
      {/* Enhanced Hero Section with Brown/Gold Theme */}
      <Box
        sx={{
          position: 'relative',
          background: `linear-gradient(135deg, 
            rgba(139, 69, 19, 0.03) 0%, 
            rgba(212, 175, 55, 0.02) 50%, 
            rgba(254, 254, 254, 1) 100%)`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse at top right, 
              rgba(139, 69, 19, 0.08) 0%, 
              transparent 50%), 
            radial-gradient(ellipse at bottom left, 
              rgba(212, 175, 55, 0.06) 0%, 
              transparent 50%)`,
            pointerEvents: 'none',
          },
        }}
      >
        <ImageSlider />
        <Container
          sx={{ px: { xs: 2, sm: 4, md: 6 }, position: 'relative', zIndex: 1 }}
        >

          {/* Hero Content */}
          <Box sx={{ textAlign: 'center', py: { xs: 6, sm: 8, md: 10 } }}>
            {/* Brand Badge */}
            <Box sx={{ mb: 4 }}>
              <Chip
                icon={<Verified sx={{ fontSize: '18px !important' }} />}
                label="Trusted Since 2020"
                variant="outlined"
                sx={{
                  background: 'rgba(139, 69, 19, 0.08)',
                  borderColor: '#8B4513',
                  color: '#8B4513',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  py: 2,
                  px: 1,
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '0.5px',
                  '& .MuiChip-icon': {
                    color: '#8B4513',
                  },
                  '&:hover': {
                    background: 'rgba(139, 69, 19, 0.12)',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(139, 69, 19, 0.2)',
                  },
                }}
              />
            </Box>

            {/* Main Heading with Brown/Gold Gradient */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                fontWeight: 300,
                mb: 3,
                lineHeight: { xs: 1.2, md: 1.1 },
                letterSpacing: { xs: '2px', md: '3px' },
                background: 'linear-gradient(135deg, #8B4513 0%, #D4AF37 50%, #8B4513 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 20px rgba(139, 69, 19, 0.1)',
                position: 'relative',
                fontFamily: '"Playfair Display", serif',
                textTransform: 'uppercase',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -15,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '2px',
                  background: '#D4AF37',
                  borderRadius: '1px',
                },
              }}
            >
              LAVISH POLYPACK LLP
            </Typography>

            {/* Subtitle with Elegant Styling */}
            <Typography
              variant="h4"
              sx={{
                color: '#666',
                fontWeight: 400,
                mb: 4,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                letterSpacing: '1px',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Premium Quality Plastic Products & Solutions
            </Typography>

            {/* Enhanced Description Card */}
            <Paper
              sx={
                {
                  mb: 4,
                }
              }
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  color: '#2D2D2D',
                  textAlign: 'left',
                  fontFamily: '"Inter", sans-serif',
                  '& strong': {
                    color: '#8B4513',
                    fontWeight: 600,
                  },
                }}
              >
                <strong>LAVISH POLYPACK LLP</strong> has established itself as a leader in manufacturing
                excellent quality plastic products. Our <strong>futuristic vision</strong> and commitment
                to innovation have made us a recognized brand in today&apos;s competitive market. Through tremendous
                effort and excellent input, we consistently deliver quality and effective products with our
                <strong> fully integrated manufacturing facility</strong> featuring in-house designing and R&amp;D capabilities.
              </Typography>
            </Paper>

            {/* CTA Buttons with Brown/Gold Theme */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link href="/about" passHref>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    minWidth: { xs: '100%', sm: '220px' },
                    fontSize: '0.95rem',
                    py: 2,
                    px: 4,
                    borderRadius: 1,
                    background: '#8B4513',
                    color: 'white',
                    boxShadow: '0 4px 20px rgba(139, 69, 19, 0.3)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: '"Inter", sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: 'left 0.6s',
                    },
                    '&:hover': {
                      background: '#6D3410',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 32px rgba(139, 69, 19, 0.4)',
                      '&::before': {
                        left: '100%',
                      },
                    },
                  }}
                >
                  Discover Our Story
                </Button>
              </Link>
            </Stack>
          </Box>

          {/* Enhanced Features Bar with Brown/Gold Theme */}
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="stretch"
          >
            {features.map((feature, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    position: 'relative',
                    p: 2,
                    borderRadius: 1,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    background: activeFeature === index
                      ? 'rgba(139, 69, 19, 0.06)'
                      : 'transparent',
                    border: activeFeature === index
                      ? '1px solid rgba(139, 69, 19, 0.15)'
                      : '1px solid transparent',
                    width: { xs: 260, sm: 280, md: 300 }, // fixed width for all
                    height: { xs: 200, sm: 220, md: 240 }, // fixed height for all
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                      background: 'rgba(139, 69, 19, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 20px rgba(139, 69, 19, 0.1)',
                    },
                  }}
                  onClick={() => setActiveFeature(index)}
                >
                  <IconButton
                    sx={{
                      background: index === 1 ? '#D4AF37' : '#8B4513',
                      color: 'white',
                      mb: 2,
                      '&:hover': {
                        background: index === 1 ? '#B8941F' : '#6D3410',
                      },
                    }}
                  >
                    {feature.icon}
                  </IconButton>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    gutterBottom
                    sx={{
                      color: '#2D2D2D',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

        </Container>
      </Box>
      <AboutVideoSection text='Lavish Polypack LLP stands at the forefront of PP Woven Fabric and bag manufacturing, delivering unmatched quality and strength in every product. Powered by our own Solar energy plant, we produce with minimal environmental impact, ensuring our operations remain both efficient and eco-conscious. Each fabric and bag is crafted with precision, offering durability and performance that meet the toughest demands. By merging innovative technology with sustainable Solar-powered manufacturing, Lavish Polypack LLP delivers packaging solutions that protect products, preserve resources, and promote a cleaner future.' />

      {/* Enhanced Products Section with Brown/Gold Theme */}
      <Container >
        <Box >
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                fontWeight: 300,
                color: '#2D2D2D',
                mb: 2,
                letterSpacing: '2px',
                fontFamily: '"Playfair Display", serif',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -15,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '2px',
                  background: '#D4AF37',
                  borderRadius: '1px',
                },
              }}
            >
              What We Offer
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: '#666',
                fontWeight: 400,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                mt: 4,
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '0.5px',
              }}
            >
              Discover our carefully crafted collection of high-quality plastic products,
              designed with precision and built to last.
            </Typography>
          </Box>

          {/* Enhanced Product Grid */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100vh',
              overflow: 'hidden',
            }}
          >
            {/* Background Image */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'all 0.8s ease-in-out',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }
              }}
            />

            <Container
              maxWidth="lg"
              sx={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >

              {/* Mobile Layout */}
              <Box sx={{ display: { xs: 'block', lg: 'none' }, width: '100%' }}>
                {displayedProducts.map((product, index) => (
                  <Box
                    key={product.id}
                    onClick={() => setHoveredProduct(hoveredProduct === index ? null : index)}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      p: 3,
                      mb: 2,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.5s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        transform: 'scale(1.02)',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                        {product.name}
                      </Typography>
                      {displayedProducts.bestSeller && (
                        <Chip
                          icon={<Star sx={{ fontSize: '16px !important', color: '#000' }} />}
                          label="Best Seller"
                          size="small"
                          sx={{
                            backgroundColor: '#FFD700',
                            color: '#000',
                            fontWeight: 600,
                            fontSize: '0.7rem'
                          }}
                        />
                      )}
                    </Box>

                    <Box
                      sx={{
                        maxHeight: hoveredProduct === index ? '200px' : '0px',
                        overflow: 'hidden',
                        transition: 'all 0.5s ease',
                        opacity: hoveredProduct === index ? 1 : 0,
                      }}
                    >
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2, lineHeight: 1.6 }}>
                        {product.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Desktop Layout */}
              <Box sx={{ display: { xs: 'none', lg: 'flex' }, width: '100%', height: '100%' }}>
                {displayedProducts.map((product, index) => (
                  <Box
                    key={product.id}
                    onMouseEnter={() => setHoveredProduct(index)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    sx={{
                      flex: hoveredProduct === index ? '2.5' : hoveredProduct !== null ? '0.3' : '1',
                      height: '100%',
                      backgroundColor: 'transparent',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRight: index === products.length - 1 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        backgroundColor: 'transparent',
                      }
                    }}
                  >
                    {/* Collapsed State - Product Name */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        // p: 2,
                        opacity: hoveredProduct === index ? 0 : 1,
                        transition: 'opacity 0.3s ease',
                        position: hoveredProduct === index ? 'absolute' : 'relative',
                        width: '100%',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 600,
                          textAlign: 'center',
                          lineHeight: 1.3,
                          transform: hoveredProduct !== null && hoveredProduct !== index ? 'rotate(-90deg)' : 'none',
                          transition: 'transform 0.7s ease',
                          whiteSpace: hoveredProduct !== null && hoveredProduct !== index ? 'nowrap' : 'normal',
                          fontSize: hoveredProduct !== null && hoveredProduct !== index ? '1rem' : '1.25rem',
                        }}
                      >
                        {product.name}
                      </Typography>
                    </Box>

                    {/* Expanded State - Full Content */}
                    <Box
                      sx={{
                        opacity: hoveredProduct === index ? 1 : 0,
                        transform: hoveredProduct === index ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'all 0.5s ease 0.2s',
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: hoveredProduct === index ? 'relative' : 'absolute',
                        width: '100%',
                        top: 0,
                      }}
                    >
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                          <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
                            {product.name}
                          </Typography>
                          {product.bestSeller && (
                            <Chip
                              icon={<Star sx={{ fontSize: '18px !important' }} />}
                              label="Best Seller"
                              sx={{
                                backgroundColor: '#FFD700',
                                color: '#000',
                                fontWeight: 600,
                                fontSize: '0.75rem'
                              }}
                            />
                          )}
                        </Box>

                        <Chip
                          label={product.category}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            mb: 3,
                            fontSize: '0.7rem'
                          }}
                        />

                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            lineHeight: 1.6,
                            mb: 4,
                            fontSize: '0.95rem'
                          }}
                        >
                          {product.description}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', color: '#4CAF50' }}>
                            <Security sx={{ fontSize: '20px', mr: 1 }} />
                            <Typography variant="body2" sx={{ fontWeight: 500, color: '#D4AF37' }}>
                              Eco-Friendly
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', color: '#2196F3' }}>
                            <Security sx={{ fontSize: '20px', mr: 1 }} />
                            <Typography variant="body2" sx={{ fontWeight: 500, color: '#D4AF37' }}>
                              Durable
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>

          {/* Enhanced View All Products Button */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Link href="/products" passHref>
              <Button
                variant="contained"
                size="large"
                endIcon={<TrendingUp />}
                sx={{
                  minWidth: { xs: '100%', sm: '280px' },
                  fontSize: '0.95rem',
                  py: 2,
                  px: 6,
                  borderRadius: 1,
                  background: '#D4AF37',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontFamily: '"Inter", sans-serif',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transition: 'left 0.6s',
                  },
                  '&:hover': {
                    background: '#B8941F',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4)',
                    '&::before': {
                      left: '100%',
                    },
                  },
                }}
              >
                Explore All Products
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Enhanced Stats Section */}
        <Box sx={{ py: 4 }}>
          <Stats />
        </Box>
      </Container>
    </Box>
  );
}