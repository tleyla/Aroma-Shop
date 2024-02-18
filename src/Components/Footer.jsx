import React from 'react';
import "../styles/Footer.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <Container fluid style={{backgroundColor:"#002347", padding:"30px"}}>
        <Row>
            <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='footer-about'>
                    <h4>
                        Our Mission
                    </h4>
                    <p>
                        So seed seed green that winged cattle in. 
                        Gathering thing made fly you're no divided 
                        deep moved us lan Gathering thing us land years 
                        living.
                    </p>
                    <p>
                        So seed seed green that winged cattle in. Gathering 
                        thing made fly you're no divided deep moved
                    </p>
                </div>
            </div>
            <div className='offset-lg-1 col-lg-2 col-md-6 col-sm-6'>
                <div className='footer-links'>
                    <h4>
                        Quick Links
                    </h4>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>Product</li>
                        <li>Brand</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-6'>
                <div className='footer-gallery'>
                    <h4>
                        Gallery
                    </h4>
                    <div style={{display:"flex"}}>
                        <ul>
                            <li><img src="./images/footer/r5.jpg" alt="gallery4" /></li>
                            <li><img src="./images/footer/r7.jpg" alt="gallery5" /></li>
                            <li><img src="./images/footer/r8.jpg" alt="gallery6" /></li>
                        </ul>
                        <ul>
                        <li><img src="./images/footer/r1.jpg" alt="gallery1" /></li>
                        <li><img src="./images/footer/r2.jpg" alt="gallery2" /></li>
                        <li><img src="./images/footer/r3.jpg" alt="gallery3" /></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='offset-lg-1 col-lg-3 col-md-6 col-sm-6'>
                <div className='footer-contact'>
                    <h4>
                        Contact Us
                    </h4>
                    <div className='ml-40'>
                        <h6 >
                            <div><FaLocationArrow style={{color:"#fff"}}/></div> Head Office
                        </h6>
                        <p>123, Main Street, Your City</p>

                        <h6><div><FaPhone style={{color:"#fff"}} /></div> Phone Number</h6>
                        <p>
                            +123 456 7890 
                            <br/>
                            +123 456 7890
                        </p>

                        <h6>
                        <div><MdEmail style={{color:"#fff"}}/> </div> Email
                        </h6>
                        <p>
                            free@infoexample.com
                            <br/>
                            www.infoexample.com
                        </p>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center",alignContent:"center", padding:"20px"}}>
                <p style={{color:"#fff"}}>
                     Copyright ©2024 All rights reserved | This template is made with <FaHeart />  by <span style={{color:"#384aeb"}}>Colorlib</span>
                 </p>
            </div>
        </Row>
    </Container>
  )
}
