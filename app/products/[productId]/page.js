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
            background: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
            color: '#fffaf3',
            p: 6,
            borderRadius: 4,
            boxShadow: '0 20px 60px rgba(17, 17, 17, 0.3)',
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

  const FeatureCard = ({ icon: IconComponent, title, children, color = '#757575' }) => (
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
              color: '#fffaf3',
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
              '&:hover': { color: '#bdbdbd' },
              transition: 'color 0.3s ease',
              cursor: 'pointer'
            }}>
              Home
            </Typography>
          </Link>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <Typography color="text.primary" sx={{
              '&:hover': { color: '#bdbdbd' },
              transition: 'color 0.3s ease',
              cursor: 'pointer'
            }}>
              Products
            </Typography>
          </Link>
          <Typography color="#111111" sx={{ fontWeight: 600 }}>
            {product.name}
          </Typography>
        </Breadcrumbs>

        {/* Back Button */}
        <Link href="/products" passHref>
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            sx={{
              borderColor: '#e0e0e0',
              color: '#111111',
              px: 3,
              py: 1,
              borderRadius: 3,
              fontWeight: 600,
              '&:hover': {
                borderColor: '#444444',
                backgroundColor: '#bdbdbd10',
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
        background: '#fffaf3', // cream
        borderRadius: 4,
        color: '#111111', // black text for contrast
        border: '1px solid #e0e0e0', // light gray border
        boxShadow: '0 4px 24px rgba(17, 17, 17, 0.1)', // soft shadow
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 20%, rgba(189, 189, 189, 0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        }
      }}>
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 800, mx: 'auto', px: 2 }}>
          <Chip
            label={product.category}
            sx={{
              mb: 3,
              bgcolor: '#e0e0e0', // light gray
              color: '#111111', // black text
              fontWeight: 600,
              fontSize: '1rem',
              px: 3,
              py: 1,
              borderRadius: 6,
              boxShadow: '0 2px 8px rgba(17, 17, 17, 0.1)',
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom sx={{
            fontWeight: 800,
            mb: 3,
            fontFamily: '"Playfair Display", serif',
            color: '#111111',
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
            color: '#111111',
            fontFamily: '"Inter", sans-serif',
            maxWidth: 600,
            mx: 'auto'
          }}>
            Premium Quality Packaging Solutions for Your Business Needs
          </Typography>
        </Box>
      </Box>

      {/* Main Content Grid */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, py: { xs: 4, md: 6 }, alignItems: 'flex-start', '@media (max-width: 960px)': { flexDirection: 'column' } }}>
        {/* Gallery Section */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box
            sx={{
              position: 'relative',
              cursor: 'pointer',
              borderRadius: 2,
              overflow: 'hidden',
              width: '100%',
              backgroundColor: '#fafafa',
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
            onClick={() => setImageDialog(true)}
          >
            {/* <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={350}
              style={{
                width: '100%',
                height: '30rem',
                objectFit: 'cover',
                display: 'block',
              }}
            /> */}
            <Image
              src={product.image}
              alt={product.name}
              width={450}
              height={350}
              style={{
                width: '100%',
                height: '30rem', 
                objectFit: 'cover', 
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                color: 'white',
                p: 1.5,
                textAlign: 'center',
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Click to enlarge
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Product Overview Section */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: 700, color: '#111111', position: 'relative', mb: 3 }}
          >
            Product Overview
            <Box
              sx={{
                position: 'absolute',
                bottom: -6,
                left: 0,
                width: 80,
                height: 3,
                background: '#bdbdbd',
                borderRadius: 2,
              }}
            />
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.7, textAlign: 'justify', mb: 2 }}>
            {product.description}
          </Typography>

          {product.longDescription && (
            <Typography variant="body1" sx={{ lineHeight: 1.7, textAlign: 'justify', mb: 2 }}>
              {product.longDescription}
            </Typography>
          )}

          {product.specifications.features && (
            <>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#bdbdbd', mb: 2 }}>
                Key Features
              </Typography>
              <Stack spacing={1}>
                {product.specifications.features.slice(0, 4).map((feature, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      p: 1.5,
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f5e8 100%)',
                      borderRadius: 2,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateX(4px)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      },
                    }}
                  >
                    <CheckCircle sx={{ mr: 1.5, color: '#757575', flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </>
          )}
        </Box>
      </Box>

      {/* Specifications Section */}
      <Paper elevation={0} sx={{
        p: { xs: 0, sm: 3, md: 6 },
        mb: 6,
        background: 'linear-gradient(135deg, #111111 0%, #444444 100%)',
        color: '#fffaf3',
        borderRadius: { xs: 0, sm: 2, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(17, 17, 17, 0.3)',
        maxWidth: '100%',
        width: '100%',
      }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom sx={{
            fontWeight: 700,
            color: "white",
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            fontSize: { xs: '2.5rem', md: '3rem' }
          }}>
            Technical Specifications
          </Typography>
          <Box sx={{
            width: 120,
            height: 4,
            background: 'linear-gradient(90deg, #bdbdbd, #757575)',
            borderRadius: 2,
            mx: 'auto',
            mt: 2
          }} />
        </Box>

        {/* Add responsive px here */}
        <Box sx={{
          overflowX: 'auto',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: { xs: 0, sm: 3, md: 3 },
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: 320,
            fontFamily: '"Inter", sans-serif',
            background: 'rgba(255,255,255,0.01)'
          }}>
            <thead>
              <tr>
                <th style={{
                  background: '#e0e0e0',
                  color: '#111111',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  padding: '14px 12px',
                  border: '1px solid #e0e0e0',
                  textAlign: 'left'
                }}>Specification</th>
                <th style={{
                  background: '#fffaf3',
                  color: '#111111',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  padding: '14px 12px',
                  border: '1px solid #e0e0e0',
                  textAlign: 'left'
                }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(product.specifications)
                .filter(([key]) => key !== 'features')
                .map(([key, value], idx) => (
                  <tr key={key} style={{
                    background: idx % 2 === 0 ? '#fffbe9' : '#f3f3f3'
                  }}>
                    <td style={{
                      padding: '12px 12px',
                      border: '1px solid #e0e0e0',
                      color: '#111111',
                      fontWeight: 600,
                      minWidth: 160
                    }}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </td>
                    <td style={{
                      padding: '12px 12px',
                      border: '1px solid #e0e0e0',
                      color: '#111111',
                      fontWeight: 500
                    }}>
                      {Array.isArray(value) ? value.join(', ') : value}
                    </td>
                  </tr>
                ))}
              {Object.entries(product.technicalDetails).map(([key, value], idx) => (
                <tr key={key} style={{
                  background: (Object.keys(product.specifications).length + idx) % 2 === 0 ? '#fffbe9' : '#f3f3f3'
                }}>
                  <td style={{
                    padding: '12px 12px',
                    border: '1px solid #e0e0e0',
                    color: '#111111',
                    fontWeight: 600,
                    minWidth: 160
                  }}>
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </td>
                  <td style={{
                    padding: '12px 12px',
                    border: '1px solid #e0e0e0',
                    color: '#111111',
                    fontWeight: 500
                  }}>
                    {Array.isArray(value) ? value.join(', ') : value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </Paper>

      {/* Applications Section */}
      <Paper elevation={0} sx={{
        p: 6,
        mb: 6,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        border: '2px solid #bdbdbd20',
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
          background: 'linear-gradient(90deg, #bdbdbd, #e0e0e0)',
        }
      }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" gutterBottom sx={{
            fontWeight: 700,
            color: '#111111',
            fontSize: { xs: '2.5rem', md: '3rem' }
          }}>
            Applications & Uses
          </Typography>
          <Box sx={{
            width: 120,
            height: 4,
            background: 'linear-gradient(90deg, #bdbdbd, #e0e0e0)',
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
                background: 'linear-gradient(135deg, #bdbdbd08 0%, #bdbdbd15 100%)',
                border: '2px solid #bdbdbd20',
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
                  border: '2px solid #bdbdbd40',
                  boxShadow: '0 15px 40px rgba(189, 189, 189, 0.2)',
                }
              }}>
                <Avatar sx={{
                  width: 70,
                  height: 70,
                  mb: 3,
                  background: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
                  color: '#fffaf3',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  boxShadow: '0 8px 25px rgba(189, 189, 189, 0.3)',
                }}>
                  {index + 1}
                </Avatar>
                <Typography variant="h6" sx={{
                  fontWeight: 600,
                  color: '#111111',
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
        background: 'linear-gradient(135deg, #757575 0%, #bdbdbd 100%)',
        color: '#fffaf3',
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(117, 117, 117, 0.3)',
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
        border: '2px solid #bdbdbd20',
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
          background: 'linear-gradient(90deg, #bdbdbd, #e0e0e0, #bdbdbd)',
        }
      }}>
        <Stack spacing={4} alignItems="center">
          <Avatar sx={{
            width: 90,
            height: 90,
            background: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
            boxShadow: '0 12px 40px rgba(189, 189, 189, 0.3)',
          }}>
            <ContactMail sx={{ fontSize: 45 }} />
          </Avatar>

          <Box>
            <Typography variant="h4" gutterBottom sx={{
              fontWeight: 700,
              color: '#111111',
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
                  background: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
                  boxShadow: '0 10px 30px rgba(189, 189, 189, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #444444 0%, #bdbdbd 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 40px rgba(189, 189, 189, 0.4)',
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
                  borderColor: '#bdbdbd',
                  color: '#bdbdbd',
                  borderWidth: 2,
                  '&:hover': {
                    borderColor: '#444444',
                    backgroundColor: '#bdbdbd10',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(189, 189, 189, 0.2)',
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
          bgcolor: '#fffaf3', // cream
          color: '#111111', // black text
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