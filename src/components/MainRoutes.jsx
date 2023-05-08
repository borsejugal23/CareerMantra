import { Routes,Route } from "react-router-dom"

import { ProductList } from "./ProductList"
// import CartPage from "../pages/CartPage";
import SinglePage from "../pages/SinglePage"

import HomePage from "../pages/HomePage"




export const MainRoutes=()=>{
 return   <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="/product" element={<ProductList/>}/>
    {/* <Route path="/cart" element={<CartPage />}/> */}

   
   


    <Route path="/single/:id" element={<SinglePage/>}/>

   
    <Route path="/admin/${id}" element={<AdminEditTable />}/>
    <Route path="/add-new" component={<AdminForm />} />
    <Route path="/dashboard" component={<AdminList />} />

 

 </Routes>
}