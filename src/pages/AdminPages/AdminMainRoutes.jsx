import React from "react";
//import { BrowserRouter as Router,Route } from "react-router-dom"
//import {AdminSidebar} from "../../components/AdminParts/AdminSidebar"
import { Navbar } from "../../components/AdminParts/Navbar";
import {AdminHomePage} from "./AdminHomePage"
import AdminUserList from "./AdminUserList";
import AdminUser from "./AdminUser";
import NewUAdminNewUserser from "./AdminNewUser";
import AdminProductList from "./AdminProductList";
import AdminProduct from "./AdminProduct";
import AdminNewProduct from "./AdminNewProduct";
import { ProductList } from "../../components/ProductList";
import CartPage from "../CartPage";
import SignUp from "../SignUp";
import Login from "../Login";
import SinglePage from "../SinglePage";
import { Switch } from "@mui/material";
import { Routes ,Route } from "react-router-dom";

export const AdminMainRoutes = () =>{
   return (  <Routes>
        {/* <Navbar /> */}

    <div className="container">
      {/* <AdminSidebar /> */}
      <Switch>
        <Route exact path="/">
        <AdminHomePage />
        </Route>
        <Route path="/product" element={<ProductList/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/single/:id" element={<SinglePage/>}/>
       <Route path="/users">
         <AdminUserList />
       </Route>
       <Route path="/user/:id">
        <AdminUser />
       </Route>
       <Route path="/newUser">
        <NewUAdminNewUserser />
       </Route>
       <Route to="/products">
        <AdminProductList />
       </Route>
       <Route to="/product/:productId">
        <AdminProduct />
       </Route>
       <Route to="/newproduct">
         <AdminNewProduct />
       </Route>
      </Switch>
    </div>
    </Routes>

   )
};