import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext = createContext();
//local data save
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("ekart");
  //   if (localCartData === []) {
  //     return [];
  //   } else {
  //     return JSON.parse(localCartData);
  //   }
  // sort cut local store
  const parsedData = JSON.parse(localCartData);
  if(!Array.isArray(parsedData)) return [];
  return parsedData;
};
const initialState = {
    // cart: [],
    //data save local storege
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
  };

const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);

const addToCart = (id, color, amount, product) => {
dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
};
// increment and decrement the product

const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  
  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

//to remove the individual item from cart
const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // to clear the cart
const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // to add the data in localStorage
  // get vs set
  useEffect(()=>{
    // dispatch({ type: "CART_TOTAL_ITEM" });  // only card bage
    // dispatch({ type: "CART_TOTAL_PRICE" }); // only total
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" }); //card bage
     localStorage.setItem("ekart",JSON.stringify(state.cart));
  },[state.cart]);

    return(
    <CartContext.Provider 
    value={{ ...state, addToCart,removeItem, clearCart, 
        setDecrease,
        setIncrement,
    }}>
        {children}
    </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider,useCartContext};