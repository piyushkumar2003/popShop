import axios from "axios";
import { reduce } from "lodash";
import { createContext , useContext, useEffect, useReducer} from "react";
import reducer  from "../reducer/productreducer";
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading:false,
  singleProduct:{}
};

// useReducer HOOK
// initialState -> it is the inital state of the component
// state -> it is the current state of the component
// reducer(takes state,action as argument) -> it is the fuction which returns state(after changing it).
// dispatch -> it is a function which orders to change the value of state.
// action -> it will change the value of state when dispatch asks to do so.
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

// second api call for displaying product information page(singleProduct page).
const getSingleProduct = async (url) => {
  dispatch({ type: "SET_SINGLE_LOADING" });
  try {
    const res = await axios.get(url);
    const singleProduct = await res.data;
    dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
  } catch (error) {
    dispatch({ type: "SET_SINGLE_ERROR" });
  }
}



  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state ,getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};


export { AppProvider, AppContext, useProductContext };