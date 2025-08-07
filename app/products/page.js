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
  Chip,
  Stack,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Visibility,
  Share,
  Star,
  ArrowForward,
} from '@mui/icons-material';
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
    <Container
      maxWidth='xl'
      sx={{ py: { xs: 3, sm: 5 }, px: { xs: 1, sm: 2, md: 3 } }}
    >
      {/* Enhanced Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant='h2'
          component='h1'
          sx={{
            fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
            fontWeight: 700,
            background: 'linear-gradient(135deg, #bdbdbd 0%, #e0e0e0 100%)',
            color: '#fffaf3',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          Our Products
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: '#757575',
            fontWeight: 400,
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.6,
          }}
        >
          Discover our premium collection of high-quality products designed for
          your needs
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={4} xl={3}>
            <Card
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              sx={{
                height: 520,
                maxWidth: 380,
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                border: product.bestSeller
                  ? '2.5px solid #bdbdbd'
                  : '1px solid rgba(17, 17, 17, 0.1)',
                boxShadow: product.bestSeller
                  ? '0 8px 32px rgba(189, 189, 189, 0.25)'
                  : '0 2px 20px rgba(17, 17, 17, 0.08)',
                border: '1px solid rgba(17, 17, 17, 0.1)',
                boxShadow: '0 2px 20px rgba(17, 17, 17, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                background: '#fffaf3',
                backdropFilter: 'blur(20px)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background:
                    'linear-gradient(90deg, #111111, #bdbdbd, #111111)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                },
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(17, 17, 17, 0.15)',
                  borderColor: '#111111',
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
                  background: '#fffaf3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* Best Seller Badge */}
                {product.bestSeller && (
                  <Chip
                    label='Best Seller'
                    size='small'
                    sx={{
                      position: 'absolute',
                      top: 18,
                      left: 18,
                      background: 'linear-gradient(90deg, #bdbdbd, #e0e0e0)',
                      color: '#111111',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      zIndex: 3,
                      boxShadow: '0 2px 8px rgba(189, 189, 189, 0.2)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  />
                )}
                {/* Quality Badge */}
                <Chip
                  icon={<Star sx={{ fontSize: '16px !important' }} />}
                  label='Premium'
                  size='small'
                  className='product-badge'
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: '#bdbdbd',
                    color: '#fffaf3',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    fontFamily: '"Inter", sans-serif',
                    opacity: product.bestSeller ? 1 : 0,
                    transform: product.bestSeller
                      ? 'translateY(0)'
                      : 'translateY(-10px)',
                    transition: 'all 0.3s ease',
                    zIndex: 2,
                  }}
                />

                <CardMedia
                  component='img'
                  className='product-image'
                  sx={{
                    maxHeight: '80%',
                    maxWidth: '80%',
                    objectFit: 'contain',
                    transition:
                      'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    filter: 'drop-shadow(0 8px 16px rgba(17, 17, 17, 0.1))',
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
                  className='product-overlay'
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(135deg, rgba(17, 17, 17, 0.1) 0%, rgba(189, 189, 189, 0.05) 100%)',
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
                  background:
                    'linear-gradient(90deg, transparent, #bdbdbd, transparent)',
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
                    variant='h6'
                    component='div'
                    sx={{
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      mb: 2,
                      color: '#111111',
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
                      variant='body2'
                      sx={{
                        lineHeight: 1.6,
                        color: '#757575',
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
                  <Stack
                    direction='row'
                    spacing={1}
                    justifyContent='center'
                    sx={{ mb: 2 }}
                  >
                    <Chip
                      label='Durable'
                      size='small'
                      sx={{
                        background: 'rgba(17, 17, 17, 0.1)',
                        color: '#111111',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        fontFamily: '"Inter", sans-serif',
                      }}
                    />
                    <Chip
                      label='Eco-Friendly'
                      size='small'
                      sx={{
                        background: 'rgba(189, 189, 189, 0.1)',
                        color: '#bdbdbd',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        fontFamily: '"Inter", sans-serif',
                      }}
                    />
                  </Stack>
                </Box>

                <Box sx={{ width: '100%', mt: 'auto' }}>
                  <Link href={`/products/${product.id}`} passHref>
                    <Button
                      variant='contained'
                      fullWidth
                      endIcon={<ArrowForward />}
                      sx={{
                        fontWeight: 500,
                        borderRadius: 1,
                        fontSize: '0.9rem',
                        py: 1.5,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        background: '#111111',
                        color: '#fffaf3',
                        boxShadow: '0 4px 15px rgba(17, 17, 17, 0.3)',
                        transition:
                          'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
                          background:
                            'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          transition: 'left 0.5s',
                        },
                        '&:hover': {
                          background: '#444444',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(17, 17, 17, 0.4)',
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsPage;
