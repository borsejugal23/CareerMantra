import { Routes,Route } from "react-router-dom"

import { ProductList } from "./ProductList"
import CartPage from "../pages/CartPage"
import SinglePage from "../pages/SinglePage"

import HomePage from "../pages/HomePage"

import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import AdminUserList from "../pages/AdminPages/AdminUserList"
import AdminNewUser from "../pages/AdminPages/AdminNewUser"
import AdminUser from "../pages/AdminPages/AdminUser"
import { Adminpage } from "../pages/AdminPages/AdminPage"


export const MainRoutes=()=>{
 return   <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="/product" element={<ProductList/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/product/:id" element={<SinglePage/>}/>
    <Route path="/admin" element={<Adminpage/>} />
    <Route path="/users" element={<AdminUserList />} />
    <Route path="/user/:id" element={<AdminUser />} />
    <Route path="/newUser" element={<AdminNewUser />} />
        
     

 </Routes>
}