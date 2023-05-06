import { Route, Routes } from "react-router-dom"
import { ProductList } from "./ProductList"
import CartPage from "../pages/CartPage"
import SinglePage from "../pages/SinglePage"
import { AdminEditTable } from "./AdminParts/AdminEditTable"
import { AdminForm } from "./AdminParts/AdminForm"
import { AdminList } from "./AdminParts/AdminList"

export const MainRoutes=()=>{
 return   <Routes>
    <Route path="/" element={<ProductList/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/single" element={<SinglePage/>}/>
    <Route path="/admin/${id}" element={<AdminEditTable />}/>
    <Route path="/add-new" component={<AdminForm />} />
    <Route path="/dashboard" component={<AdminList />} />
    {/* <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>
    <Route path="/" element={}/>  */}
 </Routes>
}