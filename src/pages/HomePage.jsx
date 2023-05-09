import React from 'react'
import Carousel from '../components/carousel/carousel1'
import { SimpleGrid,Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <>
      <Carousel />
      <div style={{width:"100%",display:"flex",margin:"auto",marginTop:"20px"}}>
            <div style={{width:"50%",backgroundColor:"#3D5AFE"}} >
                <ul style={{marginLeft:"100px",marginTop:"50px",color:"white"}}><h1 style={{fontFamily:"sans-serif",fontSize:"24px"}}>Advantages of Career Mantra</h1>
                    
                    <li style={{fontFamily:"serif",wordSpacing:"0.5"}}>1 application at the same time in 7 Universities</li>
                    <li style={{fontFamily:"serif",wordSpacing:"0.5"}}>Free online support</li>
                    <li style={{fontFamily:"serif",wordSpacing:"0.5"}}>free verfication of documents and questionnaires</li>
                    <li style={{fontFamily:"serif",wordSpacing:"0.5"}}>all registration remotely</li>
                </ul>
            </div>
            <div style={{width:"100%"}}>
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXZlcnNpdHl8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" style={{width:"100%"}} />
            </div>
      </div>
      <div style={{marginTop:"50px"}}>
        <h1 style={{marginRight:"25%",marginLeft:"5%",fontFamily:"sans-serif",fontSize:"24px",fontWeight:"bolder"}}>4 steps for admission</h1>
        
            <span style={{marginRight:"25%",marginLeft:"5%",fontFamily:"sans-serif"}}>1. Choose</span> 
            <span style={{marginRight:"25%",fontFamily:"sans-serif"}}>2. Get Ready</span>
            <span style={{marginRight:"25%",fontFamily:"sans-serif"}}>3. Register</span>
            
        
      </div>
      <div style={{display:"flex",width:"100%"}}>
      <div style={{marginTop:"50px",marginLeft:"5%",fontFamily:"sans-serif",fontSize:"12px",width:"50%"}}>
      <h2 style={{fontSize:"20px"}}>Choosing an educational institution</h2>
      <h3>Before you start choosing an educational institution,you should</h3>
      <h3>critically assess the level of your academic achievements and success.</h3>
      <h3>if you want to enter a prestigious university, you must have an </h3>
      <h3>appropriately high academic level if you feel that your knowledge is</h3>
      <h3>not enough you can choose preparatory courses or college. it is important</h3>
      <h3>not ot overestimae your knowledge, because the load will be huge</h3>
      <h3>in an unfamiliar country, in an unusual environment another</h3>
      <h3>language</h3>
      </div>
      <div style={{marginTop:"50px",marginLeft:"180px"}}>
        <button style={{height:"40px",width:"200px",fontSize:"15px",color:"white",backgroundColor:"#1565C0",display:"block",marginTop:"10px",cursor:"pointer"}}>Higher image</button>
        <button style={{height:"40px",width:"200px",fontSize:"15px",border:"1px solid gray",display:"block",marginTop:"10px"}}> Secondary education</button>
        <button style={{height:"40px",width:"200px",fontSize:"15px",border:"1px solid gray",display:"block",marginTop:"10px"}}>Language classes</button>
      </div>
      </div>
      <SimpleGrid columns={3} spacing={10} marginLeft={85} marginTop={50} fontWeight={500}>
        <Box >Higher education</Box>
        <Box>Secondary education</Box>
        <Box>Language classes</Box>
      </SimpleGrid>
      <SimpleGrid columns={4} spacing={5} marginLeft={85} marginTop={20} fontWeight={400}>

        <Link to="https://www.mq.edu.au/">
        <Box boxShadow='md'rounded='md' width={200} textAlign={"center"}>

       

            <img src="https://images.unsplash.com/photo-1583373834259-46cc92173cb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
            <h1 >Austria</h1>
            <h5 >27 faculties</h5>
        </Box>
        </Link>
        <Link to="https://www.unimelb.edu.au/">
        <Box boxShadow='md'rounded='md' width={200} textAlign={"center"} >
        <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
            <h1 >Australia</h1>
            <h5 >34 faculties</h5>
        </Box>
        </Link>
        <Box boxShadow='md'rounded='md' width={200} textAlign={"center"}>
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
            <h1 >Belgium</h1>
            <h5 >28 faculties</h5>
        </Box>
        <Box boxShadow='md'rounded='md' width={200} textAlign={"center"}>
        <img src="https://images.unsplash.com/photo-1542868796-20f2ddc9d41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHN0dWRlbnRzJTIwdGFsa2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
            <h1 >United Kingdom</h1>
            <h5 >43 faculties</h5>
        </Box>
        <Box boxShadow='md'rounded='md' width={200} textAlign={"center"}>
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
            <h1 >Germany</h1>
            <h5 >56 faculties</h5>
        </Box>
        <Box boxShadow='md'rounded='md' width={200} textAlign={"center"}>
        <img src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
            <h1 >Denmark</h1>
            <h5 >42 faculties</h5>
        </Box>
        <Box boxShadow='md'rounded='md' width={200} textAlign={"center"}>
        <img src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
            <h1 >Italy</h1>
            <h5 >40 faculties</h5>
        </Box>
        <Box boxShadow='md'rounded='md' width={200} textAlign={"center"}>
        <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
            <h1 >Spain</h1>
            <h5 >52 faculties</h5>
        </Box>
      </SimpleGrid>
      <div style={{display:"flex",width:"100%",marginTop:"50px",}}>
        <div style={{width:"30%",height:"100%",justifyContent:"space-around"}}>
            <img src="https://images.unsplash.com/photo-1634087990018-415aeb951215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHN0dWRlbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" style={{height:"100%",marginTop:"10%",marginLeft:"25px"}}/>
        </div>
        <div style={{width:"70%"}}>
            <h1 style={{fontFamily:"sans-serif",fontSize:"24px",fontWeight:"bolder",textAlign:"center"}}>Choose your Faculties</h1>
            <SimpleGrid columns={2} spacing={4} marginLeft={125} marginTop={5} fontWeight={400}>
                <Box>Art and design</Box>
                <Box>Business and management</Box>
                <Box>Natural and exact science</Box>
                <Box>Jurisprudence</Box>
                <Box>Tourism and hospitality</Box>
                <Box>Economy</Box>
                <Box>International reletionships</Box>
                <Box>Media and communications</Box>
                <Box>Humanitarian sciences</Box>
                <Box>Biology and Biomedicine</Box>
                <Box>IT, Computer science</Box>
                <Box>Social science</Box>
            </SimpleGrid>
            
        </div>
      </div>
      <div>
                <p style={{fontFamily:"sans-serif",fontSize:"24px",fontWeight:"bolder",marginTop:"50px",marginLeft:"100px"}}>Our Services</p>
                
                <SimpleGrid columns={3} spacing={5} marginLeft={100} marginTop={5} fontWeight={400}>
                    <Box height="150px" border="1px" borderColor="lightblue" color="#03A9F4" padding="3px">
                        <p style={{color:"black",marginLeft:"40%",fontSize:"20px"}}>VISA</p>
                        <p style={{marginLeft:"5%"}}>A visa is issued for the purpose of obtaining</p>
                        <p style={{marginLeft:"5%"}}>Secondary,general or vocational education abroad</p>
                        <p style={{marginLeft:"5%"}}>Also on a student visa, you can take language courses</p>
                        <p style={{marginLeft:"5%"}}>or advance training courses</p>
                    </Box>
                    <Box height="150px" border="1px" borderColor="lightblue" color="#03A9F4" padding="3px">
                    <p style={{color:"black",marginLeft:"40%",fontSize:"20px"}}>Insurance</p>
                        <p style={{marginLeft:"5%"}}>Insurance in the State line Company</p>
                        <p style={{marginLeft:"5%"}}>Provides an opportunity to pay</p>
                        <p style={{marginLeft:"5%"}}>Hospital and healthcare facility, analysis</p>
                        <p style={{marginLeft:"5%"}}>and diagnostics</p>
                    </Box>
                    <Box height="150px" border="1px" borderColor="lightblue" color="#03A9F4" padding="3px">
                    <p style={{color:"black",marginLeft:"20%",fontSize:"20px"}}>Accompanying a student</p>
                        <p style={{marginLeft:"5%"}}>Full support of the student in the process </p>
                        <p style={{marginLeft:"5%"}}>of admission from the selection of an educational</p>
                        <p style={{marginLeft:"5%"}}>institution for the graduation to the receipt</p>
                        <p style={{marginLeft:"5%"}}>of a student visa</p>
                    </Box>
                    <Box height="150px" border="1px" borderColor="lightblue" color="#03A9F4" padding="3px">
                    <p style={{color:"black",marginLeft:"15%",fontSize:"20px"}}>Admission to Top Universities</p>
                        <p style={{marginLeft:"5%"}}>all stages of admission are more important from</p>
                        <p style={{marginLeft:"5%"}}>the choice of educational qualification to the </p>
                        <p style={{marginLeft:"5%"}}>issuance of a visa. Therefore, we want to go </p>
                        <p style={{marginLeft:"5%"}}>through Foodie numbers with you, ecomona</p>
                    </Box>
                    <Box height="150px" border="1px" borderColor="lightblue" color="#03A9F4" padding="3px">
                    <p style={{color:"black",marginLeft:"40%",fontSize:"20px"}}>Preparation for exam</p>
                        <p style={{marginLeft:"5%"}}>A visa is issued for the purpose of obtaining</p>
                        <p style={{marginLeft:"5%"}}>Secondary,general or vocational education abroad</p>
                        <p style={{marginLeft:"5%"}}>Also on a student visa, you can take language courses</p>
                        <p style={{marginLeft:"5%"}}>or advance training courses</p>
                    </Box>
                    <Box height="150px" border="1px" borderColor="lightblue" color="#03A9F4" padding="3px">
                    <p style={{color:"black",marginLeft:"40%",fontSize:"20px"}}>Writing an Essay</p>
                        <p style={{marginLeft:"5%"}}>A visa is issued for the purpose of obtaining</p>
                        <p style={{marginLeft:"5%"}}>Secondary,general or vocational education abroad</p>
                        <p style={{marginLeft:"5%"}}>Also on a student visa, you can take language courses</p>
                        <p style={{marginLeft:"5%"}}>or advance training courses</p>
                    </Box>
                </SimpleGrid>

            </div>

            <div style={{width:"60%",margin:"auto",marginTop:"50px"}}>
                <SimpleGrid columns={2} spacing={5} cursor={"pointer"}>
                    <Box>
                        <img src="https://images.unsplash.com/photo-1581093577421-f561a654a353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhYnxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                    </Box>
                    <Box>
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    </Box>
                    <Box><img src="https://plus.unsplash.com/premium_photo-1679922389798-8b38c78b5670?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZpbmFuY2lhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" /></Box>
                    <Box><img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjaGFuaWNhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" /></Box>
                </SimpleGrid>
            </div>
    </>
  )
}

export default HomePage

