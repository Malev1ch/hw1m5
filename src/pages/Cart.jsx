import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "../store/actions";
import "../styles/Cart.css";
import RemoveShoppingCartRoundedIcon from "@mui/icons-material/RemoveShoppingCartRounded";
import { removeFromCart } from "../store/actions"; 

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const [itemQuantities, setItemQuantities] = useState({}); 

  const handleIncreaseQuantity = (item) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.id]: (prevQuantities[item.id] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (item) => {
    if (itemQuantities[item.id] > 1) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: prevQuantities[item.id] - 1,
      }));
    }
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item)); 
  };
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      dispatch(setCartItems(JSON.parse(storedCartItems)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="cart__main__page">
      <div className="header">
        <div className="cart__main__title">
          <h2>Cart</h2>
        </div>
        <div className="cart__main_items">
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart__items__info">
                  <img
                    className="cart__main_items-img"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <div className="cart__items_desc">
                    <h3>Название товара: {item.title}</h3>
                    <p>Описание товара: {item.description}</p>
                    <b>Цена товара: ${item.price}</b>
                  </div>
                </div>
                <div className="cart__items__dell">
                  <button
                    className="cart__items__quantity"
                    onClick={() => handleDecreaseQuantity(item)}>
                    -
                  </button>
                  <span>{itemQuantities[item.id] || 1}</span>
                  <button
                    className="cart__items__quantity btnPlus"
                    onClick={() => handleIncreaseQuantity(item)}>
                    +
                  </button>
                  <RemoveShoppingCartRoundedIcon
                    onClick={() => handleRemoveFromCart(item)}
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      height: "25px",
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
