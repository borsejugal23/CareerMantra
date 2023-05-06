import React, { useEffect } from 'react'
import Carousel from '../components/carousel/carousel1'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action'
import "../Styles/SinglePage.css"




const SinglePage = () => {
    const {products} = useSelector((store)=>store.productReducer)
    const dispatch=useDispatch();
    console.log('before effect triggered 1')
    useEffect(()=>{
        dispatch(getProducts)
        console.log('effect triggered')
        console.log(products)
    },[])
    console.log('before effect triggered 2')
    console.log(products)
  return (
    <div className='cont'>
       
     
            <div className='top'>
            <img width={"100%"} height={'300px'} src={'https://cdn.pixabay.com/photo/2016/08/13/15/29/johns-hopkins-university-1590925_1280.jpg'} alt="" />
            <p>Universities</p>
            <h2>Tagline</h2>
            </div>
            <div className='mid'>
                <div className='mid-img'>
                    <img src="https://cdn.pixabay.com/photo/2016/11/14/05/15/academic-1822683__480.jpg" alt="" />
                    {/* <img src="https://www.topuniversities.com/sites/default/files/college-of-william-and-mary_0.jpg" alt="" /> */}
                </div>
                <div className='mid-desc'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, beatae? Quibusdam voluptatem facere unde numquam error sed amet ipsam, aspernatur velit sunt optio modi officia iure corporis quis recusandae natus!</p>
                </div>
            </div>
          
    </div>
  )
}

export default SinglePage