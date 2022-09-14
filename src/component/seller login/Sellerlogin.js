import React, { Fragment } from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function Sellerlogin(){


    var selogyes= false;
    const Toogle2 = () => {
        if (selogyes) {

            document.getElementById("password").setAttribute("type", "password")
            selogyes = false;
        } else {
            document.getElementById("password").setAttribute("type", "text")
            selogyes = true;
        }
    }


    return <Fragment>
    <Container className="p-0 mt-5">
        <Row className="from-sectionsignup">
        <div><h2 className="from-heading2"> Sign in </h2></div>
        <div><h5 className="seller-loginheading"> Welcome back to seller login</h5></div>
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
                        <span onClick={Toogle2 } id="eye" className="eye-sec"><VisibilityOutlinedIcon /></span>
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
                
            
            </Col>
        </Row>
    </Container>
</Fragment>
}
export default Sellerlogin