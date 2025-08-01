'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Card, 
  CardContent, 
  Paper, 
  Chip, 
  Button,
  Avatar,
  Divider,
  IconButton,
  Zoom,
  Dialog,
  DialogContent,
  DialogTitle,
  Breadcrumbs,
  Stack
} from '@mui/material';
import { 
  ArrowBack, 
  CheckCircle, 
  Info, 
  Settings, 
  Star, 
  ZoomIn,
  Close,
  Business,
  ContactMail,
  NavigateNext,
  PhotoLibrary,
  Verified
} from '@mui/icons-material';
import Link from 'next/link';
import { products } from '../../../lib/products';
import Image from 'next/image';

const ProductDetailsPage = () => {
  const params = useParams();
  const productId = params.productId;
  const product = products.find(p => p.id === productId);
  const [imageDialog, setImageDialog] = useState(false);

  if (!product) {
    return (
      <Container sx={{ py: 8 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: '60vh',
        }}>
          <Box sx={{
            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
            color: 'white',
            p: 6,
            borderRadius: 4,
            boxShadow: '0 20px 60px rgba(230, 126, 34, 0.3)',
            maxWidth: 600,
            width: '100%',
          }}>
            <Typography variant="h3" gutterBottom sx={{ 
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' }
            }}>
              Product Not Found
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}>
              The product you&apos;re looking for doesn&apos;t exist or may have been moved.
            </Typography>
            <Link href="/products" passHref>
              <Button 
                variant="contained" 
                size="large"
                startIcon={<ArrowBack />}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.3)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Back to Products
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    );
  }

  const FeatureCard = ({ icon: IconComponent, title, children, color = '#e67e22' }) => (
    <Card sx={{
      height: '100%',
      position: 'relative',
      background: `linear-gradient(135deg, ${color}08 0%, ${color}15 100%)`,
      border: `2px solid ${color}20`,
      borderRadius: 3,
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-8px) scale(1.02)',
        boxShadow: `0 25px 50px ${color}25`,
        border: `2px solid ${color}40`,
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: `linear-gradient(90deg, transparent, ${color}10, transparent)`,
        transition: 'left 0.6s ease',
      },
      '&:hover::before': {
        left: '100%',
      }
    }}>
      <CardContent sx={{ p: 4, position: 'relative', zIndex: 1, height: '100%' }}>
        <Stack spacing={3} sx={{ height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{
              width: 56,
              height: 56,
              mr: 2,
              background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
              color: 'white',
              boxShadow: `0 8px 25px ${color}30`,
            }}>
              <IconComponent sx={{ fontSize: 28 }} />
            </Avatar>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              color,
              fontSize: '1.25rem'
            }}>
              {title}
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            {children}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4, overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      {/* Breadcrumbs */}
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs 
          separator={<NavigateNext fontSize="small" />} 
          sx={{ mb: 3 }}
          aria-label="breadcrumb"
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography color="text.primary" sx={{ 
              '&:hover': { color: '#e67e22' },
              transition: 'color 0.3s ease',
              cursor: 'pointer'
            }}>
              Home
            </Typography>
          </Link>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <Typography color="text.primary" sx={{ 
              '&:hover': { color: '#e67e22' },
              transition: 'color 0.3s ease',
              cursor: 'pointer'
            }}>
              Products
            </Typography>
          </Link>
          <Typography color="#8B4513" sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>
        </Breadcrumbs>

        {/* Back Button */}
        <Link href="/products" passHref>
          <Button 
            variant="outlined" 
            startIcon={<ArrowBack />}
            sx={{
              borderColor: '#D7BFAE',
              color: '#8B4513',
              px: 3,
              py: 1,
              borderRadius: 3,
              fontWeight: 600,
              '&:hover': {
                borderColor: '#d35400',
                backgroundColor: '#e67e2210',
                transform: 'translateX(-4px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Back to Products
          </Button>
        </Link>
      </Box>

      {/* Product Header */}
      <Box sx={{
        textAlign: 'center',
        mb: 6,
        position: 'relative',
        py: { xs: 4, md: 6 },
        background: '#F7E7B3', // pastel gold
        borderRadius: 4,
        color: '#2D2D2D', // dark text for contrast
        border: '1px solid #D7BFAE', // pastel brown border
        boxShadow: '0 4px 24px #D7BFAE33', // soft shadow
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 20%, #D7BFAE22 0%, transparent 60%)',
          pointerEvents: 'none',
        }
      }}>
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 800, mx: 'auto', px: 2 }}>
          <Chip 
            label={product.category} 
            sx={{
              mb: 3,
              bgcolor: '#D7BFAE', // pastel brown
              color: '#8B4513', // brown text
              fontWeight: 600,
              fontSize: '1rem',
              px: 3,
              py: 1,
              borderRadius: 6,
              boxShadow: '0 2px 8px #D7BFAE22',
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom sx={{
            fontWeight: 800,
            mb: 3,
            fontFamily: '"Playfair Display", serif',
            color: '#8B4513',
            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
            lineHeight: 1.2,
            letterSpacing: '1px',
          }}>
            {product.name}
          </Typography>
          <Typography variant="h6" sx={{
            opacity: 0.95,
            fontWeight: 400,
            lineHeight: 1.6,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            color: '#2D2D2D',
            fontFamily: '"Inter", sans-serif',
            maxWidth: 600,
            mx: 'auto'
          }}>
            Premium Quality Packaging Solutions for Your Business Needs
          </Typography>
        </Box>
      </Box>

      {/* Main Content Grid */}
      <Grid container spacing={6} sx={{ mb: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
        {/* Product Image Section */}
        <Grid item xs={12} lg={6} sx={{ width: '100%', maxWidth: '100%' }}>
          <Paper elevation={0} sx={{
            p: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            border: '2px solid #e67e2220',
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden',
            height: 'fit-content',
            maxWidth: '100%',
            width: '100%',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '6px',
               background: 'linear-gradient(135deg, #8B4513 0%, #D4AF37 100%)',
            }
          }}>
            <Stack spacing={3} alignItems="center">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhotoLibrary sx={{ color: '#e67e22', fontSize: 28 }} />
                <Typography variant="h5" sx={{
                  fontWeight: 600,
                  color: '#2c3e50',
                }}>
                  Product Gallery
                </Typography>
              </Box>
              
              <Box
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '3px solid #e67e2230',
                  transition: 'all 0.4s ease-in-out',
                  maxWidth: '100%',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    border: '3px solid #e67e2260',
                    boxShadow: '0 20px 50px rgba(230, 126, 34, 0.25)',
                  }
                }}
                onClick={() => setImageDialog(true)}
              >
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={500} 
                  height={400} 
                  style={{ 
                    width: '100%', 
                    maxWidth: '100%',
                    height: 'auto', 
                    display: 'block',
                    objectFit: 'contain',
                  }} 
                  onError={e => { 
                    e.target.onerror = null; 
                    e.target.src = '/products/pp-bag.jpg'; 
                  }} 
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    bgcolor: 'rgba(230, 126, 34, 0.9)',
                    color: 'white',
                    borderRadius: '50%',
                    p: 1.5,
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(230, 126, 34, 1)',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <ZoomIn />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    color: 'white',
                    p: 3,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Click to enlarge image
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        {/* Product Details Section */}
        <Grid item xs={12} lg={6} sx={{ width: '100%', maxWidth: '100%' }}>
          <Paper elevation={0} sx={{
            p: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            border: '2px solid #f39c1220',
            borderRadius: 4,
            position: 'relative',
            overflow: 'hidden',
            height: 'fit-content',
            maxWidth: '100%',
            width: '100%',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '6px',
              background: 'linear-gradient(135deg, #8B4513 0%, #D4AF37 100%)',
            }
          }}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h4" gutterBottom sx={{
                  fontWeight: 700,
                  color: '#2c3e50',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #f39c12, #e67e22)',
                    borderRadius: 2,
                  }
                }}>
                  Product Overview
                </Typography>
              </Box>
              
              <Typography variant="body1" sx={{
                lineHeight: 1.8,
                fontSize: '1.1rem',
                color: 'text.primary',
                textAlign: 'justify'
              }}>
                {product.description}
              </Typography>
              
              {product.longDescription && (
                <Typography variant="body1" sx={{
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                  color: 'text.primary',
                  textAlign: 'justify'
                }}>
                  {product.longDescription}
                </Typography>
              )}
              
              <Divider sx={{ borderColor: '#e67e2230' }} />
              
              {/* Quick Features */}
              {product.specifications.features && (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Star sx={{ mr: 1, color: '#e67e22' }} />
                    <Typography variant="h6" sx={{
                      fontWeight: 600,
                      color: '#e67e22'
                    }}>
                      Key Features
                    </Typography>
                  </Box>
                  <Stack spacing={2}>
                    {product.specifications.features.map((feature, index) => (
                      <Box key={index} sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        p: 2.5,
                        background: 'linear-gradient(135deg, #27ae6008 0%, #27ae6015 100%)',
                        borderRadius: 3,
                        border: '1px solid #27ae6020',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(8px)',
                          border: '1px solid #27ae6040',
                          boxShadow: '0 4px 12px rgba(39, 174, 96, 0.15)',
                        }
                      }}>
                        <CheckCircle sx={{ 
                          mr: 2, 
                          color: '#27ae60', 
                          fontSize: '1.3rem',
                          mt: 0.2,
                          flexShrink: 0
                        }} />
                        <Typography variant="body1" sx={{ 
                          fontWeight: 500,
                          lineHeight: 1.6
                        }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* Specifications Section */}
      <Paper elevation={0} sx={{
        p: 6,
        mb: 6,
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(44, 62, 80, 0.3)',
        maxWidth: '100%',
        width: '100%',
      }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom sx={{
            fontWeight: 700,
            color:"white",
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontSize: { xs: '2.5rem', md: '3rem' }
          }}>
            Technical Specifications
          </Typography>
          <Box sx={{
            width: 120,
            height: 4,
            background: 'linear-gradient(90deg, #3498db, #9b59b6)',
            borderRadius: 2,
            mx: 'auto',
            mt: 2
          }} />
        </Box>
        
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'space-around' ,alignItems:"center" }}>
          <Grid item xs={12} lg={6}>
            <FeatureCard
              icon={Settings}
              title="Product Specifications"
              color="#3498db"
            >
              <Stack spacing={2.5}>
                {Object.entries(product.specifications).map(([key, value]) => (
                  key !== 'features' && (
                    <Box key={key}>
                      <Typography variant="subtitle1" sx={{
                        fontWeight: 700,
                        color: '#3498db',
                        textTransform: 'capitalize',
                        mb: 0.5,
                        fontSize: '1.1rem'
                      }}>
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </Typography>
                      <Typography variant="body1" sx={{
                        color: 'white',
                        fontWeight: 500,
                        pl: 2,
                        borderLeft: '3px solid #3498db',
                        lineHeight: 1.6
                      }}>
                        {Array.isArray(value) ? value.join(', ') : value}
                      </Typography>
                    </Box>
                  )
                ))}
              </Stack>
            </FeatureCard>
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <FeatureCard
              icon={Info}
              title="Technical Details"
              color="#9b59b6"
            >
              <Stack spacing={2.5}>
                {Object.entries(product.technicalDetails).map(([key, value]) => (
                  <Box key={key}>
                    <Typography variant="subtitle1" sx={{
                      fontWeight: 700,
                      color: '#9b59b6',
                      textTransform: 'uppercase',
                      mb: 0.5,
                      fontSize: '1.1rem',
                      letterSpacing: 0.5
                    }}>
                      {key}
                    </Typography>
                    <Typography variant="body1" sx={{
                      color: 'white',
                      fontWeight: 500,
                      pl: 2,
                      borderLeft: '3px solid #9b59b6',
                      lineHeight: 1.6
                    }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </FeatureCard>
          </Grid>
        </Grid>
      </Paper>

      {/* Applications Section */}
      <Paper elevation={0} sx={{
        p: 6,
        mb: 6,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        border: '2px solid #e67e2220',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100%',
        width: '100%',
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
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom sx={{
            fontWeight: 700,
            color: '#2c3e50',
            fontSize: { xs: '2.5rem', md: '3rem' }
          }}>
            Applications & Uses
          </Typography>
          <Box sx={{
            width: 120,
            height: 4,
            background: 'linear-gradient(90deg, #e67e22, #f39c12)',
            borderRadius: 2,
            mx: 'auto',
            mt: 2
          }} />
        </Box>
        
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {product.applications.map((application, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{
                p: 4,
                background: 'linear-gradient(135deg, #e67e2208 0%, #e67e2215 100%)',
                border: '2px solid #e67e2220',
                borderRadius: 4,
                textAlign: 'center',
                transition: 'all 0.4s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.03)',
                  border: '2px solid #e67e2240',
                  boxShadow: '0 15px 40px rgba(230, 126, 34, 0.2)',
                }
              }}>
                <Avatar sx={{
                  width: 70,
                  height: 70,
                  mb: 3,
                  background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                  color: 'white',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  boxShadow: '0 8px 25px rgba(230, 126, 34, 0.3)',
                }}>
                  {index + 1}
                </Avatar>
                <Typography variant="h6" sx={{
                  fontWeight: 600,
                  color: '#2c3e50',
                  lineHeight: 1.5,
                  textAlign: 'center'
                }}>
                  {application}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Advantages Section */}
      <Paper elevation={0} sx={{
        p: 6,
        mb: 6,
        background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
        color: 'white',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(39, 174, 96, 0.3)',
        maxWidth: '100%',
        width: '100%',
      }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <Verified sx={{ fontSize: 40, mr: 2 }} />
            <Typography variant="h3" sx={{
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              fontSize: { xs: '2.5rem', md: '3rem' }
            }}>
              Key Advantages
            </Typography>
          </Box>
          <Box sx={{
            width: 120,
            height: 4,
            background: 'rgba(255,255,255,0.3)',
            borderRadius: 2,
            mx: 'auto'
          }} />
        </Box>
        
        <Grid container spacing={3}>
          {product.advantages.map((advantage, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                p: 3,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 4,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  background: 'rgba(255,255,255,0.15)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                }
              }}>
                <CheckCircle sx={{
                  mr: 3,
                  mt: 0.5,
                  fontSize: '1.8rem',
                  color: 'rgba(255,255,255,0.9)',
                  flexShrink: 0
                }} />
                <Typography variant="body1" sx={{
                  lineHeight: 1.7,
                  fontSize: '1.1rem',
                  opacity: 0.95,
                  fontWeight: 400
                }}>
                  {advantage}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Contact Section */}
      <Paper elevation={0} sx={{
        p: 6,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        border: '2px solid #f39c1220',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100%',
        width: '100%',
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
        <Stack spacing={4} alignItems="center">
          <Avatar sx={{
            width: 90,
            height: 90,
            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
            boxShadow: '0 12px 40px rgba(230, 126, 34, 0.3)',
          }}>
            <ContactMail sx={{ fontSize: 45 }} />
          </Avatar>
          
          <Box>
            <Typography variant="h4" gutterBottom sx={{
              fontWeight: 700,
              color: '#2c3e50',
              mb: 2
            }}>
              Interested in this Product?
            </Typography>
            <Typography variant="h6" sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}>
              Contact us for pricing, customization options, bulk orders, and technical specifications.
            </Typography>
          </Box>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ pt: 2 }}>
            <Link href="/contact" passHref>
              <Button
                variant="contained"
                size="large"
                startIcon={<ContactMail />}
                sx={{
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                  boxShadow: '0 10px 30px rgba(230, 126, 34, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 40px rgba(230, 126, 34, 0.4)',
                  }
                }}
              >
                Get Quote Now
              </Button>
            </Link>
            <Link href="/products" passHref>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Business />}
                sx={{
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  borderColor: '#e67e22',
                  color: '#e67e22',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: '#d35400',
                    backgroundColor: '#e67e2210',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(230, 126, 34, 0.2)',
                  }
                }}
              >
                View All Products
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Paper>

      {/* Image Dialog */}
      <Dialog
        open={imageDialog}
        onClose={() => setImageDialog(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            overflow: 'hidden',
            maxHeight: '90vh'
          }
        }}
      >
        <DialogTitle sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          bgcolor: '#D7BFAE', // pastel brown
          color: '#8B4513', // brown text
          py: 3
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.25rem' }}>
            {product.name}
          </Typography>
          <IconButton
            onClick={() => setImageDialog(false)}
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'scale(1.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, backgroundColor: '#f8f9fa', overflowX: 'hidden' }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            p: 2,
            backgroundColor: '#ffffff',
            width: '100%',
            maxWidth: '100%',
            overflowX: 'hidden',
          }}>
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={600}
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: 8
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/products/pp-bag.jpg';
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ProductDetailsPage;