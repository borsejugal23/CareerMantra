import { Routes,Route } from "react-router-dom"

import { ProductList } from "./ProductList"
import CartPage from "../pages/CartPage"
import SinglePage from "../pages/SinglePage"

import HomePage from "../pages/HomePage"

import SignUp from "../pages/SignUp"
import Login from "../pages/Login"



export const MainRoutes=()=>{
 return   <Routes>
    <Route path="/" element={<HomePage />} /> 
    <Route path="/product" element={<ProductList/>}/>

    

   <Route path="/admin" element={<AdminUserList/>}/>
  


    <Route path="/product/:id" element={<SinglePage/>}/>

   

  
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    
  

 
 </Routes>
}