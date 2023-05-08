import { Routes,Route } from "react-router-dom"

import { ProductList } from "./ProductList"
// import CartPage from "../pages/CartPage";
import SinglePage from "../pages/SinglePage"

import HomePage from "../pages/HomePage"
import AdminUserList from "../pages/AdminPages/AdminUserList"




export const MainRoutes=()=>{
 return   <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="/product" element={<ProductList/>}/>
    {/* <Route path="/cart" element={<CartPage />}/> */}

   <Route path="/admin" element={<AdminUserList/>}/>
   


    <Route path="/single/:id" element={<SinglePage/>}/>

   
 

 </Routes>
}