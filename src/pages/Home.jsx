import { useContext, useEffect } from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../context/ProductContext";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../store/actions";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { addToCart } from "../store/actions";

const Home = () => {
  const { fetchProducts, items } = useContext(ContextProvider);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categoryFilter);
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCategoryChange = (event) => {
    dispatch(setCategoryFilter(event.target.value));
  };

  const handleAddToCart = (event, item) => {
    event.stopPropagation();
    dispatch(addToCart(item)); 
  };

  return (
    <div>
      <div className="header">{/*  */}</div>

      <div className="categories">
        <label htmlFor="categorySelect">Filter: </label>
        <select
          id="categorySelect"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">All</option>
          <option value="smartphones">smartphones</option>
          <option value="laptops">laptops</option>
          <option value="fragrances">fragrances</option>
          {/* Демо категории. При необходимости, можно добавить все категории <option value="catName">Category Name</option> */}
        </select>
      </div>

      <div className="products">
        {items &&
          items
            .filter(
              (item) =>
                selectedCategory === "" || item.category === selectedCategory
            )
            .map((item) => (
              <div
                key={item.id}
                className="product"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img src={item.thumbnail} alt="" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <b>${item.price}</b>
                <AddShoppingCartRoundedIcon
                  onClick={(event) => handleAddToCart(event, item)}
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
