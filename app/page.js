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
} from '@mui/icons-material';
import ImageSlider from '../components/ImageSlider';
import Link from 'next/link';
import { products } from '../lib/products';
import Stats from '../components/Stats';
import { useState, useEffect } from 'react';
import 'yet-another-react-lightbox/styles.css';

export default function Home() {
  const displayedProducts = products.slice(0, 6);
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

  return (
    <Box sx={{ overflow: 'hidden', backgroundColor: '#FEFEFE' }}>
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
        <Container sx={{ px: { xs: 2, sm: 4, md: 6 }, position: 'relative', zIndex: 1 }}>
          <ImageSlider />

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
              elevation={0}
              sx={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(139, 69, 19, 0.1)',
                borderRadius: 2,
                p: { xs: 3, md: 4 },
                mb: 6,
                maxWidth: '900px',
                mx: 'auto',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 2px 40px rgba(139, 69, 19, 0.08)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #8B4513, #D4AF37, #8B4513)',
                },
              }}
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
          <Paper
            elevation={0}
            sx={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(139, 69, 19, 0.1)',
              borderRadius: 2,
              p: 3,
              mb: 8,
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 2px 40px rgba(139, 69, 19, 0.08)',
            }}
          >
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="stretch"
            >
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                      minHeight: { xs: 140, sm: 160, md: 180 },
                      width: '100%',
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
          </Paper>
        </Container>
      </Box>

      {/* Enhanced Products Section with Brown/Gold Theme */}
      <Container sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Box sx={{ py: { xs: 6, sm: 8 } }}>
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              Our Premium Products
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
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {displayedProducts.map((product, index) => (
              <Grid item key={product.id} xs={12} sm={6} lg={4}>
                {isLoading ? (
                  <Card sx={{ height: 520, borderRadius: 2 }}>
                    <Skeleton variant="rectangular" height={240} />
                    <CardContent>
                      <Skeleton variant="text" height={40} />
                      <Skeleton variant="text" height={20} />
                      <Skeleton variant="text" height={20} />
                      <Box sx={{ mt: 3 }}>
                        <Skeleton variant="rectangular" height={45} />
                      </Box>
                    </CardContent>
                  </Card>
                ) : (
                  <Card
                    sx={{
                      height: 520,
                      maxWidth: 380,
                      mx: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      border: product.bestSeller
                        ? '2.5px solid #D4AF37'
                        : '1px solid rgba(139, 69, 19, 0.1)',
                      boxShadow: product.bestSeller
                        ? '0 8px 32px rgba(212, 175, 55, 0.25)'
                        : '0 2px 20px rgba(139, 69, 19, 0.08)',
                      border: '1px solid rgba(139, 69, 19, 0.1)',
                      boxShadow: '0 2px 20px rgba(139, 69, 19, 0.08)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'rgba(255, 255, 255, 0.98)',
                      backdropFilter: 'blur(20px)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #8B4513, #D4AF37, #8B4513)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(139, 69, 19, 0.15)',
                        borderColor: '#8B4513',
                        '&::before': {
                          opacity: 1,
                        },
                        '& .product-image': {
                          transform: 'scale(1.05)',
                        },
                        '& .product-overlay': {
                          opacity: 1,
                        },
                        '& .product-badge': {
                          opacity: 1,
                          transform: 'translateY(0)',
                        },
                      },
                    }}
                  >
                    {/* Enhanced Image Container */}
                    <Box
                      sx={{
                        width: '100%',
                        height: 240,
                        position: 'relative',
                        background: '#F8F6F3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Best Seller Badge */}
                      {product.bestSeller && (
                        <Chip
                          label="Best Seller"
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 18,
                            left: 18,
                            background: 'linear-gradient(90deg, #D4AF37, #FFD700)',
                            color: '#8B4513',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            zIndex: 3,
                            boxShadow: '0 2px 8px #D4AF3722',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                          }}
                        />
                      )}
                      {/* Quality Badge */}
                      <Chip
                        icon={<Star sx={{ fontSize: '16px !important' }} />}
                        label="Premium"
                        size="small"
                        className="product-badge"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          background: '#D4AF37',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          fontFamily: '"Inter", sans-serif',
                          opacity: product.bestSeller ? 1 : 0,
                          transform: product.bestSeller ? 'translateY(0)' : 'translateY(-10px)',
                          transition: 'all 0.3s ease',
                          zIndex: 2,
                        }}
                      />

                      <CardMedia
                        component="img"
                        className="product-image"
                        sx={{
                          maxHeight: '80%',
                          maxWidth: '80%',
                          objectFit: 'contain',
                          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          filter: 'drop-shadow(0 8px 16px rgba(139, 69, 19, 0.1))',
                        }}
                        image={product.image}
                        alt={product.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/products/pp-bag.jpg';
                        }}
                        onClick={() => handleImageClick(product.image)}
                      />

                      {/* Enhanced Overlay */}
                      <Box
                        className="product-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out',
                        }}
                      />
                    </Box>

                    {/* Enhanced Divider */}
                    <Divider
                      sx={{
                        width: '90%',
                        mx: 'auto',
                        my: 2,
                        background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                        height: '1px',
                        borderRadius: '0.5px',
                      }}
                    />

                    {/* Enhanced Content Section */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{
                            fontWeight: 600,
                            fontSize: '1.2rem',
                            mb: 2,
                            color: '#2D2D2D',
                            lineHeight: 1.3,
                            letterSpacing: '0.5px',
                            minHeight: '1.6em',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            fontFamily: '"Inter", sans-serif',
                          }}
                        >
                          {product.name}
                        </Typography>

                        {product.description && (
                          <Typography
                            variant="body2"
                            sx={{
                              lineHeight: 1.6,
                              color: '#666',
                              fontSize: '0.9rem',
                              minHeight: '3.2em',
                              overflow: 'hidden',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              mb: 2,
                              fontFamily: '"Inter", sans-serif',
                            }}
                          >
                            {truncateDescription(product.description, 100)}
                          </Typography>
                        )}

                        {/* Feature Tags */}
                        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
                          <Chip
                            label="Durable"
                            size="small"
                            sx={{
                              background: 'rgba(139, 69, 19, 0.1)',
                              color: '#8B4513',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              fontFamily: '"Inter", sans-serif',
                            }}
                          />
                          <Chip
                            label="Eco-Friendly"
                            size="small"
                            sx={{
                              background: 'rgba(212, 175, 55, 0.1)',
                              color: '#D4AF37',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              fontFamily: '"Inter", sans-serif',
                            }}
                          />
                        </Stack>
                      </Box>

                      {/* Enhanced CTA Button */}
                      <Box sx={{ width: '100%', mt: 'auto' }}>
                        <Link href={`/products/${product.id}`} passHref>
                          <Button
                            variant="contained"
                            fullWidth
                            endIcon={<ArrowForward />}
                            sx={{
                              fontWeight: 500,
                              borderRadius: 1,
                              fontSize: '0.9rem',
                              py: 1.5,
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              background: '#8B4513',
                              color: 'white',
                              boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3)',
                              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                              fontFamily: '"Inter", sans-serif',
                              position: 'relative',
                              overflow: 'hidden',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: '-100%',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                transition: 'left 0.5s',
                              },
                              '&:hover': {
                                background: '#6D3410',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(139, 69, 19, 0.4)',
                                '&::before': {
                                  left: '100%',
                                },
                              },
                            }}
                          >
                            View Details
                          </Button>
                        </Link>
                      </Box>
                    </CardContent>
                  </Card>
                )}
              </Grid>
            ))}
          </Grid>

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