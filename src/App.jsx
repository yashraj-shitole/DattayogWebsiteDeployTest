
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout';
import AboutUs from './Pages/AboutUs';
import Blogs from './Pages/Blogs';
import Certificates from './Pages/Certificates';
import ContactUs from './Pages/ContactUs';

import Error from "./Pages/Error";

import Home from './Pages/Home';
import Products from "./Pages/Products";

import BlogDetails from "./Pages/Subpages/BlogDetails";

import AgriculturalProducts from "./Pages/Subpages/AgriculturalProducts";
import DairyProducts from "./Pages/Subpages/DairyProducts";
import Tomatoprocessedproducts from "./Pages/Subpages/Tomatoprocessedproducts";
import ProductDetails from "./Pages/Subpages/ProductDetails";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout/>}>
          <Route path="/" element={<Home/>} />

            <Route path="/blogs" >
              <Route path="" element={<Blogs/>}/>

              <Route path="/blogs/:blogid" element={<BlogDetails/>}/>


            </Route>



          <Route path="about" element={<AboutUs/>} />
          <Route path="contact" element={<ContactUs/>} />
          <Route path="certificates" element={<Certificates/>} />

          <Route path="/products">
            <Route path="" element={<Products/>} />

                <Route path="/products/agriculturalproducts" element={<AgriculturalProducts/>}/>
                <Route path="/products/dairyproducts" element={<DairyProducts/>} />
                <Route path="/products/tomatoprocessedproducts" element={<Tomatoprocessedproducts/>}/>


                <Route
                  path="/products/agriculturalproducts/:productname"
                  element={<ProductDetails/>}
                />
                <Route
                  path="/products/dairyproducts/:productname"
                  element={<ProductDetails/>}
                />
                <Route
                  path="/products/tomatoprocessedproducts/:productname"
                  element={<ProductDetails />}
                />

          </Route>




          <Route path="*" element={<Error/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
