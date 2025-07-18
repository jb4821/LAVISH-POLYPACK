import { products } from '../../../lib/products';
import ProductDetails from '../../../components/ProductDetails';

const ProductDetailsPage = ({ params }) => {
  const product = products.find((p) => p.id === params.productId);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
