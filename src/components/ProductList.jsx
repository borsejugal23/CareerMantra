import { Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { Sidebar } from "./Sidebar"
import { useEffect, useState } from "react";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCart } from "./ProductCard";
import "../Styles/Products.css"
import { useLocation,useSearchParams } from "react-router-dom";
import Pagination from './Pagination';


export const ProductList=()=>{
    const {isLoading,products,isError,totalCount}=useSelector((store)=>{
        return {
        isLoading:store.productReducer.isLoading,
        products:store.productReducer.products,
        totalCount:store.productReducer.totalCount,
        isError:store.productReducer.isError
        }
    });
    const dispatch=useDispatch();
    const [serchparams]=useSearchParams();
    const location=useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    // const [pageSize, setPageSize] = useState(10);
    let queryparams={
        params:{
            country:serchparams.getAll("country"),
            category:serchparams.getAll("category"),
            place:serchparams.getAll("city"),
            ownership:serchparams.getAll("ownership"),
            _sort:serchparams.get("order")&&"rating",
            _order:serchparams.get("order"),
            _page: currentPage,
            //   _limit: 10,
        },
    }
    useEffect(()=>{
           console.log(totalCount)
        // console.log(location)
        dispatch(getProducts(queryparams))
    },[location.key,currentPage])
    const totalPages = Math.ceil(totalCount / 10);

    return <div className="combineofsidebarandproduct">
        <div className="Sidebar">
            <Sidebar/>
        </div>
        <div className="Product">
           
          {isLoading?<div className='spinner'><Spinner
                thickness='3px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
        /></div>:isError?<h1>Something Went Wrong</h1>:products?.map((e)=><ProductCart key={e.id} {...e}/>)}
        <br />
        <Pagination totalPages={totalPages} handlePageChange={(Page) => setCurrentPage(Page)} currentPage={currentPage} />
        <br /><br />
        </div>
    </div>
}