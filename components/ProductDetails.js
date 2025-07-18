'use client';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import Link from 'next/link';

const ProductDetails = ({ product }) => {
  if (!product) {
    return (
      <Container sx={{ py: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Product not found
        </Typography>
        <Link href='/products' passHref>
          <Button variant='contained'>Back to Products</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Card>
        <CardMedia
          component='img'
          height='400'
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h3' component='div'>
            {product.name}
          </Typography>
          <Typography variant='body1' color='text.secondary'>
            {product.description}
          </Typography>
          <Link href='/products' passHref>
            <Button variant='contained' sx={{ mt: 4 }}>
              Back to Products
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;
