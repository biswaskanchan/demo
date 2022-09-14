import React, { Fragment } from "react";
import { Col, Container, Row,Button } from "react-bootstrap";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Signin(){
    var seeeyes= false;
    const Toogle = () => {
        if (seeeyes) {

            document.getElementById("password").setAttribute("type", "password")
            seeeyes = false;
        } else {
            document.getElementById("password").setAttribute("type", "text")
            seeeyes = true;
        }
    }

    return <Fragment>
                <Container className="p-0 mt-5">
                    <Row className="from-sectionsignup">
                    <div><h2 className="from-heading"> Sign in </h2></div>
                        <Col>
                        
                            <from >
                            <div className="signin-bottom">
                            <div className="from-inputleft">
                                    <div><span className="fild-name">Email address / Phone </span></div>
                                    <input className="fild-input" type="text" placeholder="Email address or phone number" />
                                </div>

                                <div className="from-inputleft">
                                    <div><span className="fild-name">password </span></div>
                                    <input id="password" className="fild-input" type="password" placeholder="Minimum 6 characters logn" />
                                    <span onClick={Toogle } id="eye" className="eye-sec"><VisibilityOutlinedIcon /></span>
                                </div>

                                <div className="checkbox-section">
                                    <input className="check-box" type="checkbox" /> <span className="check-boxtext">Remember me</span>
                                    <div className="forgot-div"><a className="forgot-pass" href="#">Forgot password?</a></div>
                                </div>
                                <div className="signin-buttn">
                                    <Button className="gle-buttn" variant="outline-info" size="lg">Sign in</Button>
                                </div>
                            </div>
                                
                            </from>
                            <Row className="mt-2 row-border">
                                <Col lg={6} md={12} sm={12}>
                                <div><h2 className="fild-name"> No account Sign up now </h2></div>

                                <div className="google-button signin-tp"><Button className="gle-buttn" variant="outline-info"><GoogleIcon className="glg-coler" /> Sign in with google</Button>{' '}</div>

                                </Col>

                                <Col lg={6} md={12} sm={12}>
                                <div className="signin-buttn signupright-bttn">
                                    <Button className="gle-buttn " variant="outline-info" size="lg"><AccountCircleIcon/> Sign up</Button>
                                </div><br/>
                                  
                                  <div className="facebok-button signin-topface "> <Button className="gle-buttn" variant="outline-info"><FacebookOutlinedIcon /> Sign in with facebook</Button>{' '}</div>
                                </Col>
                            </Row>
                        
                        </Col>
                    </Row>
                </Container>
    </Fragment>
}
export default Signin;