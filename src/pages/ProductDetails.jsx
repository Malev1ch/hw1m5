import React from 'react';
import { api } from '../api/axios.api';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = React.useState({});
  React.useEffect(() => {
    const fetchProductById = async () => {
      const responce = await api.get(`/product/${id}`);
      setProduct(responce.data);
    };
    fetchProductById();
  }, []);

  return (
    <div>
      <div className="product-desc">
        <img src={product?.thumbnail} className="main-img" alt="" />
        <div className="screenshots">
          {product?.images?.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
        <h2>
          <b>Title</b>: {product?.title}
        </h2>
        <p>
          <b>Category</b>: {product?.category}
        </p>
        <b>Price: ${product?.price}</b>
        <p>
          <b>Description:</b> {product?.description}
        </p>
        <p>
          <b>Rating</b>: {product?.rating}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
