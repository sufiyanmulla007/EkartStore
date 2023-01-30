// create a context
//provider
// comsumer => usecontext hook

import axios from "axios";
import reducer from "../reducer/productReducer";
import { createContext,useContext, useEffect, useReducer } from "react";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
 isLoading: false,
 isError: false,
 products: [],
 featureProducts: [],
 isSingleLoading: false, //single page
  singleProduct: {}, //single page
};
const AppProvider = ({ children })=>{

const [state, dispatch]=useReducer(reducer, initialState);
const getProducts= async (url)=>{
 dispatch({ type: "SET_LOADING" });
try {
const res = await axios.get(url);
// console.log(res); api check
const products = await res.data;
// console.log(products); //data check
dispatch({type: "SET_API_DATA", payload: products });
} catch (error){
dispatch({ type: "API_ERROR" });
}
};
// my 2nd api call for single product
const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  //end single product
    useEffect(()=>{
    getProducts(API);
 },[]);
 return(
 <AppContext.Provider value={{...state,getSingleProduct }}>
    {children}
 </AppContext.Provider>
 );
};
// custom hooks
const useProductContext =()=>{
    return  useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext};