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
  Breadcrumbs
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
  NavigateNext
} from '@mui/icons-material';
import Link from 'next/link';
import { products } from '../../../lib/products';

const ProductDetailsPage = () => {
  const params = useParams();
  const productId = params.productId;
  const product = products.find(p => p.id === productId);
  const [imageDialog, setImageDialog] = useState(false);

  if (!product) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Box sx={{
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
          color: 'white',
          p: 6,
          borderRadius: 3,
          boxShadow: '0 15px 35px rgba(230, 126, 34, 0.3)',
        }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            Product Not Found
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            The product you're looking for doesn't exist or may have been moved.
          </Typography>
          <Link href="/products" passHref>
            <Button 
              variant="contained" 
              size="large"
              startIcon={<ArrowBack />}
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
              }}
            >
              Back to Products
            </Button>
          </Link>
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
      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: `0 20px 40px ${color}25`,
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
      <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{
            width: 50,
            height: 50,
            mr: 2,
            background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
            color: 'white',
            boxShadow: `0 8px 25px ${color}30`,
          }}>
            <IconComponent />
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 600, color }}>
            {title}
          </Typography>
        </Box>
        {children}
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs 
        separator={<NavigateNext fontSize="small" />} 
        sx={{ mb: 3 }}
        aria-label="breadcrumb"
      >
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Typography color="text.primary" sx={{ '&:hover': { color: '#e67e22' } }}>
            Home
          </Typography>
        </Link>
        <Link href="/products" style={{ textDecoration: 'none' }}>
          <Typography color="text.primary" sx={{ '&:hover': { color: '#e67e22' } }}>
            Products
          </Typography>
        </Link>
        <Typography color="#e67e22" sx={{ fontWeight: 600 }}>
          {product.name}
        </Typography>
      </Breadcrumbs>

      {/* Back Button */}
      <Box sx={{ mb: 4 }}>
        <Link href="/products" passHref>
          <Button 
            variant="outlined" 
            startIcon={<ArrowBack />}
            sx={{
              borderColor: '#e67e22',
              color: '#e67e22',
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
          background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Chip 
            label={product.category} 
            sx={{
              mb: 3,
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              backdropFilter: 'blur(10px)',
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom sx={{
            fontWeight: 800,
            mb: 2,
            textShadow: '0 4px 8px rgba(0,0,0,0.2)',
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}>
            {product.name}
          </Typography>
          <Typography variant="h6" sx={{
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.95,
            fontWeight: 400,
            lineHeight: 1.4
          }}>
            Premium Quality Packaging Solutions for Your Business Needs
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={6} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* Product Image Section */}
        <Grid item xs={12} lg={6}>
          <Paper elevation={0} sx={{
            p: 4,
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
            <Typography variant="h5" gutterBottom sx={{
              fontWeight: 600,
              mb: 3,
              color: '#2c3e50',
              textAlign: 'center',
            }}>
              Product Gallery
            </Typography>
            <Box
              sx={{
                position: 'relative',
                cursor: 'pointer',
                borderRadius: 3,
                overflow: 'hidden',
                border: '3px solid #e67e2230',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                  border: '3px solid #e67e2260',
                  boxShadow: '0 15px 35px rgba(230, 126, 34, 0.2)',
                }
              }}
              onClick={() => setImageDialog(true)}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '450px',
                  objectFit: 'cover',
                }}
                onError={(e) => {
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
                  p: 1,
                  backdropFilter: 'blur(10px)',
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
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Click to enlarge image
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Product Details Section */}
        <Grid item xs={12} lg={6}>
          <Paper elevation={0} sx={{
            p: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            border: '2px solid #f39c1220',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden',
            height: 'fit-content',
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
            <Typography variant="h4" gutterBottom sx={{
              fontWeight: 700,
              mb: 3,
              color: '#2c3e50',
              position: 'relative',
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
            
            <Typography variant="body1" paragraph sx={{
              lineHeight: 1.8,
              mb: 3,
              fontSize: '1.1rem',
              color: 'text.primary',
              textAlign: 'justify'
            }}>
              {product.description}
            </Typography>
            
            {product.longDescription && (
              <Typography variant="body1" paragraph sx={{
                lineHeight: 1.8,
                mb: 4,
                fontSize: '1.1rem',
                color: 'text.primary',
                textAlign: 'justify'
              }}>
                {product.longDescription}
              </Typography>
            )}

            <Divider sx={{ my: 3, borderColor: '#e67e2230' }} />
            
            {/* Quick Features */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                mb: 3,
                color: '#e67e22'
              }}>
                <Star sx={{ mr: 1 }} />
                Key Features
              </Typography>
              <Grid container spacing={2}>
                {product.specifications.features && product.specifications.features.map((feature, index) => (
                  <Grid item xs={12} key={index}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 2,
                      background: 'linear-gradient(135deg, #27ae6008 0%, #27ae6015 100%)',
                      borderRadius: 2,
                      border: '1px solid #27ae6020',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        border: '1px solid #27ae6040',
                      }
                    }}>
                      <CheckCircle sx={{ mr: 2, color: '#27ae60', fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {feature}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Specifications Section */}
      <Paper elevation={0} sx={{
        p: 6,
        mt: 6,
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(44, 62, 80, 0.3)',
      }}>
        <Typography variant="h3" gutterBottom sx={{
          fontWeight: 700,
          mb: 5,
          textAlign: 'center',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}>
          Technical Specifications
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <FeatureCard
              icon={Settings}
              title="Product Specifications"
              color="#3498db"
            >
              <Box component="dl" sx={{ m: 0 }}>
                {Object.entries(product.specifications).map(([key, value]) => (
                  key !== 'features' && (
                    <Box key={key} sx={{ mb: 2 }}>
                      <Typography component="dt" variant="subtitle2" sx={{
                        fontWeight: 600,
                        color: '#3498db',
                        textTransform: 'capitalize'
                      }}>
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                      </Typography>
                      <Typography component="dd" variant="body2" sx={{
                        ml: 2,
                        color: 'white',
                        mt: 0.5
                      }}>
                        {Array.isArray(value) ? value.join(', ') : value}
                      </Typography>
                    </Box>
                  )
                ))}
              </Box>
            </FeatureCard>
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <FeatureCard
              icon={Info}
              title="Technical Details"
              color="#9b59b6"
            >
              <Box component="dl" sx={{ m: 0 }}>
                {Object.entries(product.technicalDetails).map(([key, value]) => (
                  <Box key={key} sx={{ mb: 2 }}>
                    <Typography component="dt" variant="subtitle2" sx={{
                      fontWeight: 600,
                      color: '#9b59b6',
                      textTransform: 'uppercase'
                    }}>
                      {key}:
                    </Typography>
                    <Typography component="dd" variant="body2" sx={{
                      ml: 2,
                      color: 'white',
                      mt: 0.5
                    }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </FeatureCard>
          </Grid>
        </Grid>
      </Paper>

      {/* Applications Section */}
      <Paper elevation={0} sx={{
        p: 6,
        mt: 6,
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
        <Typography variant="h3" gutterBottom sx={{
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
            background: 'linear-gradient(90deg, #e67e22, #f39c12)',
            borderRadius: 2,
          }
        }}>
          Applications & Uses
        </Typography>
        <Grid container spacing={3}>
          {product.applications.map((application, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{
                p: 3,
                background: 'linear-gradient(135deg, #e67e2208 0%, #e67e2215 100%)',
                border: '2px solid #e67e2220',
                borderRadius: 3,
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  border: '2px solid #e67e2240',
                  boxShadow: '0 12px 30px rgba(230, 126, 34, 0.15)',
                }
              }}>
                <Avatar sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                }}>
                  {index + 1}
                </Avatar>
                <Typography variant="h6" sx={{
                  fontWeight: 600,
                  color: '#2c3e50',
                  lineHeight: 1.4
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
        mt: 6,
        background: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
        color: 'white',
        borderRadius: 3,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(39, 174, 96, 0.3)',
      }}>
        <Typography variant="h3" gutterBottom sx={{
          fontWeight: 700,
          mb: 5,
          textAlign: 'center',
          textShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}>
          Key Advantages
        </Typography>
        <Grid container spacing={3}>
          {product.advantages.map((advantage, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                p: 3,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 3,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  background: 'rgba(255,255,255,0.15)',
                }
              }}>
                <CheckCircle sx={{
                  mr: 3,
                  mt: 0.5,
                  fontSize: '1.5rem',
                  color: 'rgba(255,255,255,0.9)'
                }} />
                <Typography variant="body1" sx={{
                  lineHeight: 1.6,
                  fontSize: '1.1rem',
                  opacity: 0.95
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
        mt: 6,
        textAlign: 'center',
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
        <Avatar sx={{
          width: 80,
          height: 80,
          mx: 'auto',
          mb: 3,
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
          boxShadow: '0 10px 30px rgba(230, 126, 34, 0.3)',
        }}>
          <ContactMail sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h4" gutterBottom sx={{
          fontWeight: 700,
          mb: 2,
          color: '#2c3e50'
        }}>
          Interested in this Product?
        </Typography>
        <Typography variant="h6" paragraph sx={{
          mb: 4,
          color: 'text.secondary',
          maxWidth: '600px',
          mx: 'auto'
        }}>
          Contact us for pricing, customization options, bulk orders, and technical specifications.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" passHref>
            <Button
              variant="contained"
              size="large"
              startIcon={<ContactMail />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                boxShadow: '0 8px 25px rgba(230, 126, 34, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 35px rgba(230, 126, 34, 0.4)',
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
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderColor: '#e67e22',
                color: '#e67e22',
                '&:hover': {
                  borderColor: '#d35400',
                  backgroundColor: '#e67e2210',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              View All Products
            </Button>
          </Link>
        </Box>
      </Paper>

      {/* Image Dialog */}
      <Dialog
        open={imageDialog}
        onClose={() => setImageDialog(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
          color: 'white'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>
          <IconButton
            onClick={() => setImageDialog(false)}
            sx={{ color: 'white' }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/products/pp-bag.jpg';
            }}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ProductDetailsPage;