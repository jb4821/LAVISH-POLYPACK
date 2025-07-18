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
} from '@mui/material';
import ImageSlider from '../components/ImageSlider';
import Link from 'next/link';
import { products } from '../lib/products';
import Stats from '../components/Stats';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

export default function Home() {
  const displayedProducts = products.slice(0, 12);
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  return (
    <Container>
      <ImageSlider />
      <Typography
        variant='h2'
        component='h1'
        gutterBottom
        align='center'
        sx={{ mt: 4 }}
      >
        Welcome to LAVISH POLYPACK LLP
      </Typography>
      <Typography
        variant='body1'
        align='center'
        color='text.secondary'
        sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}
      >
        LAVISH POLYPACK LLP has come up with a huge range of excellent quality
        plastic products. Our vision is futuristic, and we stand as a recognized
        brand in today's competitive corporate world. This is due to tremendous
        effort & excellent input to attain quality & effective products. We have
        a fully integrated, well-built manufacturing facility with in-house
        designing and R&D. Our infrastructure houses raw material, production,
        and packing departments. The success of our company is driven by our
        management, which coordinates perfectly to understand customer needs,
        manufacturing, packing, and dispatch. We have a robust network of
        dealers throughout the country and aim to meet customer expectations
        through them.
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Link href='/about' passHref>
          <Button variant='contained' size='large'>
            Read More
          </Button>
        </Link>
      </Box>

      <Typography
        variant='h2'
        component='h2'
        gutterBottom
        align='center'
        sx={{ mt: 8, mb: 4 }}
      >
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {displayedProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component='img'
                sx={{
                  height: 200,
                  width: '100%',
                  objectFit: 'contain',
                  pt: 2,
                  cursor: 'pointer',
                }}
                image={product.image}
                alt={product.name}
                onClick={() => handleImageClick(product.image)}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h5' component='div' noWrap>
                  {product.name}
                </Typography>
                <Link href={`/products/${product.id}`} passHref>
                  <Button size='small'>View More</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        <Link href='/products' passHref>
          <Button variant='contained' size='large'>
            View All Products
          </Button>
        </Link>
      </Box>
      <Stats />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: currentImage }]}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 500,
          doubleClickMaxStops: 2,
        }}
        carousel={{ finite: true }} // Prevents slideshow behavior
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </Container>
  );
}
