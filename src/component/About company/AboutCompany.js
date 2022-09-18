import React, { Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
//import aboutcompany from "../../images/about company.png"
//import contuctus from "../../images/contact us.png"
//import question from "../../images/faq.png"
//import appstore from "../../images/apple_app.png"
//import playstore from "../../images/google_app.png"

import payments from "../../images/payment (1).png"
import mainlogo from "../../images/company.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';


function AboutCompany() {
    return <Fragment>
        <Container fluid={true} className="p-0 mt-5 aboutCompanyBox" >

            <Row className="bg-color">
                <Col>
                    <div className="lefheading-top">
                        <h3 className="quicley-section">Quickly</h3>
                        <span className="signup-section">Sign Up</span>
                        <h3 className="newsleater-section">to Newsletter</h3>
                    </div>

                </Col>

                <Col>
                    <div className="middle-news">
                        <span className="newsletter-section">...& Receive $10 coupon for first shopping.</span>
                    </div>
                </Col>

                <Col>
                    <div className="from-section">
                        <form action="">
                            <input className="input-section" type="text" placeholder="Enter your email adress...." />
                            <Button className="subscribe-section" >Subscribe</Button>
                        </form>
                    </div>
                </Col>
            </Row>



            <Row className="footerRowcolor">
                <Col lg={3} md={4} sm={12}>
                    <img className="footerMinlogo" src={mainlogo} />
                    <h4 className="footerHeadingHorijontal">Address <hr className="footerHorijental" /> </h4>
                    <p className="footerPragraph"><LocationOnIcon className="footerLocationicon" />#House,6-b Road-5 Dhanmondi Dhaka-1216</p>
                    <p className="footertext email-section"><EmailIcon /> kanchanbiswas379754@gmail.com</p>

                </Col>

                <Col lg={3} md={4} sm={12}>
                    <h3 className="footerHeading">SPECIAL</h3>
                    <h4 className="footertext">FLASH DEAL</h4>
                    <h4 className="footertext">Featured Products</h4>
                    <h4 className="footertext">Latest Products</h4>
                    <h4 className="footertext">Best-Selling Products</h4>
                    <h4 className="footertext">Top-Rated Products</h4>

                    <h3 className="footerHeadingfirst">Start a conversation</h3>
                    <p className="footertext"><SettingsPhoneIcon /> 0000000 </p>

                </Col>

                <Col lg={3} md={4} sm={12}>
                    <h3 className="footerHeading">ACCOUNT & SHIPPING INFO</h3>
                    <h4 className="footertext">Profile Info</h4>
                    <h4 className="footertext">Wish List</h4>
                    <h4 className="footertext">Track order</h4>
                    <h4 className="footertext">Address</h4>

                    <hr className="footerHorijentalmiddle"></hr>
                    <p className="footertext"><SupportAgentIcon /> Support Ticket</p>



                </Col>

                <Col lg={3} md={4} sm={12}>
                    <h3 className="footerHeading">Features</h3>
                    {/*<img className="footerDownloadpic footerMarginPic" src={appstore}/>
                    <img className="footerDownloadpic" src={playstore}/> */}
                    <h4 className="footertext">Super Fast Ecommerce Store</h4>
                    <h4 className="footertext">Free Shiping Returns</h4>
                    <h4 className="footertext">Money Back Guarantees</h4>
                    <h4 className="footertext">1st Fully Secure Payment</h4>
                    <h4 className="footertext">Online Support 24/7</h4>

                </Col>
            </Row>

            <Row>
                <Col lg={4} md={6} sm={12}>
                    <h3 className="footerCoppyRight"> &copy;Right HKTech@ 2022</h3>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <p ><FacebookIcon className="footerSocalIcon facebook-icon" />
                        <InstagramIcon className="footerSocalIcon instagram-icon" />
                        <TwitterIcon className="footerSocalIcon twiter-icon" />
                        <LinkedInIcon className="footerSocalIcon linkdin-icon" />
                        <GoogleIcon className="footerSocalIcon google-icon" />
                        <PinterestIcon className="footerSocalIcon pintarest-icon" /> </p>
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <div>
                        <h3 className="footerPrivecy">Tram & Condtion</h3>
                        <h3 className="footerPolicy">Privacy Policy</h3>
                        <div>
                            <img className="visacard-master" src={payments}/>
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </Fragment>
} export default AboutCompany;