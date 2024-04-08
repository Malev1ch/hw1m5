import { useContext, useEffect } from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { ContextProvider } from '../context/ProductContext';

const Home = () => {
  const { fetchProducts, items } = useContext(ContextProvider);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="header">
        {/*  */}
      </div>
      
      <div className="products">
        
        {items &&
          items.map((item) => (
            <div
              key={item.id}
              className="product"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img src={item.thumbnail} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <b>${item.price}</b>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
