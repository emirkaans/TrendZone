import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ProductDetail from "../components/ProductDetail";
import ProductDetailReviews from "../components/ProductDetailReviews";
import { useProductContext } from "../contexts/ProductContext";

function ProductPage() {
  const [product, setProduct] = useState({});
  const { getProduct } = useProductContext();
  const { id } = useParams();

  const getMyProduct = async () => {
    const data = await getProduct(id);

    setProduct(data);
  };

  useEffect(() => {
    getMyProduct();
  }, []);

  if (!product.id) {
    return <Spinner />;
  }

  return (
    <>
      <ProductDetail product={product} />
      <ProductDetailReviews product={product} />
    </>
  );
}

export default ProductPage;
