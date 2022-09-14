import React, { Fragment, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function Sellerapplicate() {

    var sellereyes = false;
    const Sellereye = () => {
        if (sellereyes) {

            document.getElementById("password").setAttribute("type", "password")
            sellereyes = false;
        } else {
            document.getElementById("password").setAttribute("type", "text")
            sellereyes = true;
        }
    }

    var selconeyes = false;
    const Selleycon = () => {
        if (selconeyes) {

            document.getElementById("conpassword").setAttribute("type", "password")
            selconeyes = false;
        } else {
            document.getElementById("conpassword").setAttribute("type", "text")
            selconeyes = true;
        }
    }



    return <Fragment>
        <Container className="p-0 mt-5">
            <Row>
                <Col >
                    <Row className="from-sectionsignup">
                        <div><h2 className="shopeapplate-heading">Shop Application</h2></div>
                        <div><h2 className="from-heading">Seller info</h2></div>
                        <Col lg={6} md={12} sm={12}>

                            <form className="main-marginbottom">

                                <div className="from-inputleft">
                                    <div><span className="fild-name">First name </span></div>
                                    <input className="fild-input" type="text" placeholder="enter your first name" />
                                </div>

                                <div className="from-inputleft">
                                    <div><span className="fild-name">Email address </span></div>
                                    <input className="fild-input" type="email" placeholder="enter your first name" />
                                </div>

                                <div className="from-inputleft">
                                    <div><span className="fild-name">password </span></div>
                                    <input id="password" className="fild-input" type="password" placeholder="Minimum 6 characters logn" />
                                    <span onClick={Sellereye} id="eye" className="eye-sec"><VisibilityOutlinedIcon /></span>
                                </div>

                                <div>
                                    <div><span className="fild-name">Seller Profile </span></div>
                                    <input className="filupload-input2" type="file" />
                                </div>


                            </form>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <form className="main-marginbottom">

                                <div className="from-inputleft">
                                    <div><span className="fild-name">Last name </span></div>
                                    <input className="fild-input" type="text" placeholder="enter your first name" />
                                </div>

                                <div className="from-inputleft">
                                    <div><span className="fild-name">Phone number <sub className="country-code"> (* Country code is must Like for BD 880 )</sub></span> </div>
                                    <input className="fild-input" type="number" placeholder="enter your first name" />
                                </div>

                                <div className="from-inputleft">
                                    <div><span className="fild-name"> Confirm password </span></div>
                                    <input id="conpassword" className="fild-input" type="password" placeholder="Minimum 6 characters logn" />
                                    <span onClick={Selleycon} className="eye-sec"><VisibilityOutlinedIcon className="eyes" /></span>
                                </div>

                                <div className="signin-bottom">

                                    <img className="shope-image" src="" alt="Upload your Profile Picture " />
                                </div>

                            </form>

                        </Col>
                        <div><h2 className="from-heading">Shope info</h2></div>

                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <form className="main-marginbottom">

                                    <div className="from-inputleft">
                                        <div><span className="fild-name">First name </span></div>
                                        <input className="fild-input" type="text" placeholder="enter your first name" />
                                    </div>

                                    <div>
                                        <div><span className="fild-name">Upload Logo </span></div>
                                        <input className="filupload-input2" type="file" />
                                    </div>

                                    <div>
                                        <div><span className="fild-name">Upload Baner </span></div>
                                        <input className="filupload-input2" type="file" />
                                    </div>

                                    <div className="checkbox-section">
                                        <input className="check-box1" type="checkbox" /> <span className="check-boxtext1">I agree to Your terms Terms and condition</span>
                                    </div>

                                </form>

                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <form className="main-marginbottom">
                                    <div className="from-inputleft">
                                        <div><span className="fild-name">Last name </span></div>
                                        <input className="fild-input" type="text" placeholder="enter your last name" />
                                    </div>

                                    <div className="signin-bottom">
                                        <img className="shope-image" src="" alt="Upload Logo " />
                                    </div><br />


                                    <div className="signin-bottom">
                                        <img className="shope-banar" src="" alt="Upload Baner " />
                                    </div>


                                </form>
                            </Col>
                            
                        </Row>
                        <div className="button-margin1 "><Button className="signup-button wd-he">Sign up</Button></div>
                    </Row>
                   
                </Col>
            </Row>
        </Container>
    </Fragment>
}
export default Sellerapplicate