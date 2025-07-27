'use client';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Divider,
  IconButton,
  Fade,
} from '@mui/material';
import { Favorite, FavoriteBorder, Visibility, Share } from '@mui/icons-material';
import Link from 'next/link';
import { products } from '../../lib/products';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ProductsPage = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleProductClick = (productId) => {
    router.push(`/products/${productId}`);
  };

  const toggleFavorite = (productId, e) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  // Function to truncate description
  const truncateDescription = (text, maxLength = 80) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 3, sm: 5 }, px: { xs: 1, sm: 2, md: 3 } }}>
      {/* Enhanced Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant='h2'
          component='h1'
          sx={{ 
            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' }, 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
            color: 'white',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          Our Products
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#666',
            fontWeight: 400,
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Discover our premium collection of high-quality products designed for your needs
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={4} xl={3}>
            <Card
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                height: 480,
                maxWidth: 360,
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 4,
                border: '1px solid #ecf0f1',
                boxShadow: '0 2px 12px rgba(52, 73, 94, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#fff',
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: '0 20px 40px rgba(52, 73, 94, 0.12)',
                  borderColor: '#e67e22',
                  '& .product-image': {
                    transform: 'scale(1.08)',
                  },
                  '& .product-overlay': {
                    opacity: 1,
                  },
                  '& .quick-actions': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
              onClick={() => handleProductClick(product.id)}
            >
              {/* Image Container */}
              <Box
                sx={{
                  width: '100%',
                  height: 220,
                  position: 'relative',
                  backgroundColor: '#f8f9fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <CardMedia
                  component='img'
                  className="product-image"
                  sx={{
                    maxHeight: '85%',
                    maxWidth: '85%',
                    objectFit: 'contain',
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                  }}
                  image={product?.image}
                  alt={product.name}
                  onError={e => { 
                    e.target.onerror = null; 
                    e.target.src = '/products/pp-bag.jpg'; 
                  }}
                />
                
                {/* Overlay with gradient */}
                <Box
                  className="product-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(230, 126, 34, 0.1) 0%, rgba(243, 156, 18, 0.05) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                />
              </Box>

              {/* Divider */}
              <Divider 
                sx={{ 
                  width: '85%', 
                  mx: 'auto', 
                  my: 1.5,
                  background: 'linear-gradient(90deg, transparent, #ecf0f1, transparent)',
                  height: '2px',
                }} 
              />

              {/* Content Section */}
              <CardContent 
                sx={{ 
                  flexGrow: 1, 
                  textAlign: 'center', 
                  p: 2.5, 
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography 
                    gutterBottom 
                    variant='h6' 
                    component='div' 
                    sx={{ 
                      fontWeight: 700, 
                      fontSize: '1.2rem', 
                      mb: 1.5,
                      color: '#2c3e50',
                      lineHeight: 1.3,
                      letterSpacing: '-0.02em',
                      minHeight: '1.5em',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {product?.name}
                  </Typography>
                  
                  {product.description && (
                    <Typography 
                      variant='body2' 
                      color='text.secondary' 
                      sx={{
                        lineHeight: 1.5,
                        color: '#7f8c8d',
                        fontSize: '0.9rem',
                        minHeight: '3em',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {truncateDescription(product.description, 80)}
                    </Typography>
                  )}
                </Box>

                {/* VIEW MORE Button */}
                {hoveredCard === product.id && (
                  <Fade in={true} timeout={300}>
                  <Box sx={{ width: '100%', mt: 'auto' }}>
                    <Link href={`/products/${product.id}`} passHref>
                      <Button
                        variant='contained'
                        size='medium'
                        sx={{
                          width: '100%',
                          fontWeight: 600,
                          borderRadius: 3,
                          fontSize: '0.95rem',
                          py: 1.2,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          background: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)',
                          color: '#fff',
                          boxShadow: '0 4px 15px rgba(230, 126, 34, 0.3)',
                          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
                            boxShadow: '0 6px 20px rgba(230, 126, 34, 0.4)',
                            transform: 'translateY(-2px)',
                          },
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
                          '&:hover::before': {
                            left: '100%',
                          },
                        }}
                      >
                        View Details
                      </Button>
                    </Link>
                  </Box>
                </Fade>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;