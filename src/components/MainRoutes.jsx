import { Route, Routes } from "react-router-dom"
import { ProductList } from "./ProductList"
import CartPage from "../pages/CartPage"
import SinglePage from "../pages/SinglePage"

export const MainRoutes=()=>{
 return   <Routes>
    <Route path="/" element={<ProductList/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/single" element={<SinglePage/>}/>
    {/* <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/> */}
 </Routes>
}