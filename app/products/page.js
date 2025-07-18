'use client';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import Link from 'next/link';
import { products } from '../../lib/products';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant='h2' component='h1' gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
              onClick={() => {
                setCurrentImage(product.image);
                setOpen(true);
              }}
            >
              <CardMedia
                component='img'
                sx={{
                  height: 200,
                  width: '100%',
                  objectFit: 'contain',
                  pt: 2,
                }}
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h5' component='div' noWrap>
                  {product.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {product.description}
                </Typography>
                <Link href={`/products/${product.id}`} passHref>
                  <Button size='small' sx={{ mt: 2 }}>
                    View More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: currentImage }]}
        plugins={[Zoom]}
      />
    </Container>
  );
};

export default ProductsPage;
