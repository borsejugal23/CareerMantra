import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import {AdminSidebar} from "../../components/AdminParts/AdminSidebar"
import { Navbar } from "../Components/Navbar";
import {AdminHomePage} from "./AdminHomePage"
import AdminUserList from "./AdminUserList";
import AdminUser from "./AdminUser";
import NewUAdminNewUserser from "./AdminNewUser";
import AdminProductList from "./AdminProductList";
import AdminProduct from "./AdminProduct";
import AdminNewProduct from "./AdminNewProduct";


export const AdminMainRoutes = () =>{
   return (  <Router>
        <Navbar />
    <div className="container">
      <AdminSidebar />
      <Switch>
        <Route exact path="/">
        <AdminHomePage />
        </Route>
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
    </Router>

   )
};