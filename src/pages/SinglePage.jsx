import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import "../Styles/SinglePage.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from 'axios';



    const SinglePage = () => {
        const { id } = useParams(); 

        const [detail,setDetail]=useState("");
       
        const fechSingleproduct=async (id)=>{
            return axios.get(`https://deploy-json-t437.onrender.com/products/${id}`)
            .then((res)=>{
                setDetail(res.data)
                
            })
            }
            useEffect(()=>{
                fechSingleproduct(id)
                
             },[id])
    return (
        <div className='cont'>
            <img src={detail?detail.flag:""} alt="" className='flagimg'/>
        
        
                <div className='top'>
                <img width={"100%"} height={'300px'} src={detail?detail.images[0]:""} alt={detail.place}/>
               
                <p>{detail.name}</p>
                <h2><p>"Preparing Students For <span style={{color:"#CD201F"}}>Success</span></p> <p>In An Ever-Changing World"</p></h2>
                </div>
              <div className="midDiv_having_img_count_admission">
                   <div className="midDiv_img_only">
                   <img src={detail?detail.images[1]:""} alt="" />
                   <br />
                    <img src={detail?detail.images[2]:""} alt="" />
                   </div>
                   <div className="midDiv_count_admission">
                      <div className="midDiv_count">
                      <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50" fill="grey" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                            <p className="count">{detail.faculty}+</p>
                            <p>Faculty Members</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50" fill="grey" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                            </svg>
                            <p className="count">{detail.students}+</p>
                            <p>Students Enrolled</p>
                        </div>
                       
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50" fill="grey" class="bi bi-dropbox" viewBox="0 0 16 16">
                        <path d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2 8.01 4.555Zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555-4.006-2.555Zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555L8.01 9.651Z"/>
                        </svg>
                        <p className="count">{detail.courses}+</p>
                         <p >Courses Offered</p>
                        </div>
                      </div>
                      <div className="midDiv_admission">
                        <br />
                        <br />
                      <h1 className="Admission">Admission <span>2023</span></h1>
                      <br />
                      <p>Choose the right path towards Success, unravel Opportunities, secure your Future. Be an essential part of the wide repertoire of learning and research. Expand your vision, explore dimensions and bring about a change in society. We have both online and Physical admisison system to accomodate you for your desired course.</p>
                      </div>
                      <br />

                      <div className='tableDiv'>
                      <Table variant="simple" size="sm" overflowX="auto">
                            <Thead>
                                <Tr bg="#ECEFF1">
                                <Th>Branch</Th>
                                <Th>Sub-Branch</Th>
                                <Th>Specialization</Th>
                                <Th>Description</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                <Td>Computer Science</Td>
                                <Td>Artificial Intelligence</Td>
                                <Td>Natural Language Processing</Td>
                                <Td>
                                    Developing algorithms to analyze and generate human language
                                </Td>
                                </Tr>
                                <Tr>
                                <Td>Electrical Engineering</Td>
                                <Td>Power Systems</Td>
                                <Td>Renewable Energy</Td>
                                <Td>
                                    Designing, analyzing and implementing renewable energy systems
                                </Td>
                                </Tr>
                                <Tr>
                                <Td>Mechanical Engineering</Td>
                                <Td>Aerospace</Td>
                                <Td>Flight Dynamics</Td>
                                <Td>
                                    Studying and analyzing the motion of air and spacecraft
                                </Td>
                                </Tr>
                                <Tr>
                                <Td>Chemical Engineering</Td>
                                <Td>Process Engineering</Td>
                                <Td>Bioprocess Engineering</Td>
                                <Td>
                                    Applying biological principles to design and optimize processes
                                </Td>
                                </Tr>
                                <Tr>
                                <Td>Civil Engineering</Td>
                                <Td>Structural Engineering</Td>
                                <Td>Earthquake Engineering</Td>
                                <Td>
                                    Designing structures and systems that can withstand earthquakes
                                </Td>
                                </Tr>
                                <Tr>
                                <Td>Environmental Engineering</Td>
                                <Td>Water Resources</Td>
                                <Td>Waste Management</Td>
                                <Td>
                                    Designing and implementing systems for clean water and waste disposal
                                </Td>
                                </Tr>
                            </Tbody>
                            </Table>
  
                      </div>
                      
                   </div>
                   
              </div>
              <br />
              <div className='bottom'>
                <p className="adventure">Choose Your <span>Adventure</span></p>
                <br />
                <div className='bottom_description'>
                    <p>Accredited by UGC and approved by AICTE, Techno India University, West Bengal is a fully fledged university with numerous study</p>
                    <p>programmes in science, humanities, commerce, engineering, architecture, management, law and health sciences. The University</p>
                    <p>provides world class infrastructure equipped with modern technology enabled teaching- learning tools and vigorous industry-driven</p>
                    <p>curricula.</p>
                    <br />
                    <br />
                </div>
                <div className='bottom_education_div'>
                        <div className='education_div'>
                            <div className='education_div_img'>
                                <img src="https://plus.unsplash.com/premium_photo-1661490867606-1ac837f9748e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdmlsJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                            </div>
                            <div className='education_div_detail'>
                                <p className="stream">School of</p>
                                <span className="select_stream">Engineering</span>
                                <br /><br />
                                <p className='stream_desc'>The Department of Engineering at Techno India University India is a conglomeration of multiple disciplines with separate</p>
                                <br />
                                <br /><br />
                                <button className="apply_now">Apply Now</button>
                            </div>
                        </div>
                        <div className='education_div'>
                            <div className='education_div_img'>
                                <img src="https://plus.unsplash.com/premium_photo-1661281321367-2e2cc23c3255?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bnVyc2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                            </div>
                            <div className='education_div_detail'>
                                <p className="stream">School of</p>
                                <span className="select_stream">Nursing</span>
                                <br /><br />
                                <p className='stream_desc'>Nursing is a course to introduce students to all aspects of general healthcare and profiency</p>
                                <br />
                                <br /><br />
                                <button className="apply_now">Apply Now</button>
                            </div>
                        </div>
                        <div className='education_div'>
                            <div className='education_div_img'>
                                <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                            </div>
                            <div className='education_div_detail'>
                                <p className="stream">School of</p>
                                <span className="select_stream">Science</span>
                                <br />
                                <br />
                                <p className='stream_desc'>The Department of Science at Techno India University India is a conglomeration of multiple disciplines with separate</p>
                                <br />
                                <br /><br />
                                <button className="apply_now">Apply Now</button>
                            </div>
                        </div>
                    </div>
              </div>
        </div>
    )
    }

export default SinglePage