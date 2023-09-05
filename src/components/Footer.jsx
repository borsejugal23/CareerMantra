import { SimpleGrid,Box } from '@chakra-ui/react'
import React from 'react'
import {TiSocialFacebook,TiSocialTwitter} from 'react-icons/ti'
import { BsInstagram} from "react-icons/bs"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
  
      <div style={{width:"100%",backgroundColor:"#1E88E5",paddingTop:"50px",paddingBottom:"50px"}}>
        <h1 style={{textAlign:"center",color:"white",fontFamily:"sans-serif",fontSize:"24px"}}>Subscribe to our Newsletter</h1>
        <div style={{margin:"auto",height:"50px",width:"50%",marginTop:"10px"}}>
        <input type="email" placeholder='example@gmail.com' style={{border:"none",borderRadius:"3px",height:"40px",width:"70%",marginLeft:"20px"}}/>
        <button style={{height:"40px",backgroundColor:"#EEEEEE",width:"20%",borderRadius:"5px",color:"#039BE5"}}>subscribe</button>
        </div>
      </div>
      <div style={{width:"90%",margin:"auto",marginTop:"50px"}}>
        <SimpleGrid columns={[2,3,4]}  spacing={10}>
            <Box  >
                <p style={{fontFamily:"sans-serif",fontSize:"24px",color:"#1A237E",fontWeight:"bolder"}} >CareerMantra</p>
                <h2 className="Hover" style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>About Us</h2>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>select.study.apply</p>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>Meet the team</p>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>Privecy Policy</p>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>Disclaimer</p>
            </Box>
            <Box>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>School Finder Group</h2>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>studyinternational.com</p>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>scholarshipinternational.com</p>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>schoolinternational.com</p>
            </Box>
            <Box>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>College Finder Group</h2>
                <u style={{fontSize:"12px",fontFamily:"sans-serif",color:"#1DA1F2"}}><Link to="https://studyinternational.com/" >studyinternational.com</Link></u>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>scholarshipinternational.com</p>
                <u style={{fontSize:"12px",fontFamily:"sans-serif",color:"#1DA1F2"}}><Link to="https://sell.sawbrokers.com/domain/CollegeInternational.com/" >collegeinternational.com</Link></u>
            </Box>
            <Box>
                <h2 style={{fontFamily:"sans-serif",fontWeight:"bolder"}}>Let's connet</h2>
                <div style={{display:"flex",width:"100%",padding:"10px"}} >
                  <Link to="https://www.facebook.com/login/" >
                  <TiSocialFacebook size={"25px"} color='#166FE5' />
                  </Link>
                <Link to="https://twitter.com/i/flow/login" >
                <TiSocialTwitter size={"25px"} color='#1DA1F2' />
                </Link>
                <Link to="https://www.instagram.com/accounts/login/" >
                <BsInstagram  size={"25px"} color='#F0019C'  />
                </Link>
                </div>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>Ten:8(800)25325323</p>
                <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>Email:eduera@gmail.com</p>
                
                

            </Box>    
        </SimpleGrid>
      </div>
    </>
  )
}

export default Footer
