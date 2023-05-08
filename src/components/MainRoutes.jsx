import { Route, Routes } from "react-router-dom"
import { ProductList } from "./ProductList"
import CartPage from "../pages/CartPage"
import SinglePage from "../pages/SinglePage"

import HomePage from "../pages/HomePage"

import { AdminEditTable } from "./AdminParts/AdminEditTable"

import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
import AdminProductList from "../pages/AdminPages/AdminProductList"
import AdminUserList from "../pages/AdminPages/AdminUserList"
import { AdminHomePage } from "../pages/AdminPages/AdminHomePage"


export const MainRoutes=()=>{
 return   <Routes>
   {/* <Route path="/" element={<HomePage />} /> */}
    <Route path="/product" element={<ProductList/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/single/:id" element={<SinglePage/>}/>
    <Route path="/admin/${id}" element={<AdminEditTable />}/>
    {/* <Route  path="/adhome">
        <AdminHomePage />
        </Route> */}
    {/* <Route to="/products">
        <AdminProductList />
       </Route> */}
   {/* <Route path="/users">
         <AdminUserList />
       </Route>    */}
    {/* <Route path="/add-new" element={<AdminForm />} />
    <Route path="/dashboard" element={<AdminList />} /> */}

 

 </Routes>
}