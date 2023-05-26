import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <section>
      <h1>Product-detail</h1>
      <p>product Detail of {params.productId}</p>
    </section>
  );
};

export default ProductDetail;
