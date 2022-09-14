import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
function Signup() {

    var eyes = false;
    const Seeye = () => {
        if (eyes) {

            document.getElementById("password").setAttribute("type", "password")
            eyes = false;
        } else {
            document.getElementById("password").setAttribute("type", "text")
            eyes = true;
        }
    }

    var coneyes = false;
    const Seeycon = () => {
        if (coneyes) {

            document.getElementById("conpassword").setAttribute("type", "password")
            coneyes = false;
        } else {
            document.getElementById("conpassword").setAttribute("type", "text")
            coneyes = true;
        }
    }
    return <Fragment>
        <Container className="p-0 mt-5">
            <Row>
                <Col >
                    <Row className="from-sectionsignup">
                        <div><h2 className="from-heading">Register control your order</h2></div>
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
                                    <span onClick={Seeye} id="eye" className="eye-sec"><VisibilityOutlinedIcon /></span>
                                </div>

                                <div className="checkbox-section">
                                    <input className="check-box" type="checkbox" /> <span className="check-boxtext">I agree to Your terms Terms and condition</span>
                                </div>


                            </form>
                            <div className="google-button"><Button className="gle-buttn" variant="outline-info"><GoogleIcon className="glg-coler" /> Sign up with google</Button>{' '}</div>
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
                                    <span onClick={Seeycon} className="eye-sec"><VisibilityOutlinedIcon className="eyes" /></span>
                                </div>

                                <div className="button-margin"><Button className="signup-button">Sign up</Button></div>


                            </form>
                            <div className="facebok-button"> <Button className="gle-buttn" variant="outline-info"><FacebookOutlinedIcon /> Sign up with facebook</Button>{' '}</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Fragment>
}
export default Signup;