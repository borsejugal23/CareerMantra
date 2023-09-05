import { Routes,Route } from "react-router-dom"

import { ProductList } from "./ProductList"
import SinglePage from "../pages/SinglePage"
import HomePage from "../pages/HomePage"
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import { Adminpage } from "../pages/AdminPages/AdminPage";
import  AdminUserList  from "../pages/AdminPages/AdminUserList";
import  AdminUser  from "../pages/AdminPages/AdminUser";
import  AdminNewUser  from "../pages/AdminPages/AdminNewUser";
import {PrivateRoute} from "./PrivateRoute"


export const MainRoutes=()=>{
 return   <Routes>
    <Route path="/" element={<HomePage />} /> 
    <Route path="/product" element={
     
        <ProductList/>
   }/>
    <Route path="/product/:id" element={
    <PrivateRoute>
      <SinglePage/>
    </PrivateRoute>
    }/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/single/:id" element={
    //  <PrivateRoute>
    // </PrivateRoute>
    <SinglePage/>
    }/>
    <Route path="/admin" element={
    //   <PrivateRoute>
    // </PrivateRoute>
    <Adminpage />
    } />
    <Route path="/users" element={<AdminUserList />} />
    <Route path="/user/:id" element={<AdminUser />} />
    <Route path="/newUser" element={<AdminNewUser />} />
        
     

 </Routes>
}