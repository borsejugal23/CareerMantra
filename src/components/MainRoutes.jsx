import { Route, Routes } from "react-router-dom"
import { ProductList } from "./ProductList"
import CartPage from "../pages/CartPage"
import SinglePage from "../pages/SinglePage"

import HomePage from "../pages/HomePage"

import { AdminEditTable } from "./AdminParts/AdminEditTable"

import SignUp from "../pages/SignUp"
import Login from "../pages/Login"


export const MainRoutes=()=>{
 return   <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="/product" element={<ProductList/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/single/:id" element={<SinglePage/>}/>
    <Route path="/admin/${id}" element={<AdminEditTable />}/>
    {/* <Route path="/add-new" element={<AdminForm />} />
    <Route path="/dashboard" element={<AdminList />} /> */}

 

 </Routes>
}