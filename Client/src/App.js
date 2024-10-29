import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ProductDetails } from "./Pages/ProductDetails";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import { createContext, useState } from 'react'
import axios from 'axios'
import { Cart } from "./Pages/Cart";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import Listing from "./Pages/Listing";
import ProductModel from "./Components/ProductModel";


const myContext = createContext()

const App = () => {

  const [countryList, setcountryList] = useState([])
  const [selectedCountry, setselectedCountry] = useState('')
  const [isOpenProductModel, setisOpenProductModel] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url)
      .then((res) => {
        setcountryList(res.data.data)
        console.log(res.data.data)
      })
  };

  const values = {
    countryList,
    setselectedCountry,
    selectedCountry,
    isOpenProductModel,
    setisOpenProductModel,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin,
  }
  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={values}>

          {
            isHeaderFooterShow === true && <Header />
          }



          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/cat/:id" exact={true} element={<Listing />} />
            <Route path="/product/1" exact={true} element={<ProductDetails />} />
            <Route path="/cart" exact={true} element={<Cart />} />
            <Route path="/signIn" exact={true} element={<SignIn />} />
            <Route path="/signUp" exact={true} element={<SignUp />} />
          </Routes>


          {
            isHeaderFooterShow === true && <Footer />
          }

          {
            isOpenProductModel === true && <ProductModel />
          }
        </myContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
export { myContext }