import React, { Fragment } from "react";
import { Col, Container,Row } from "react-bootstrap";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AnchorIcon from '@mui/icons-material/Anchor';
import Brand from "../../images/top1.jpg";
import Adidas from "../../images/adidas.jpg";
import Nike from "../../images/nike.jpg"
import red from "../../images/red.jpg";
import coca from "../../images/coca.png";
import pepsi from "../../images/download.jpg"
function Secondbrand(){
    return <Fragment>
        <Container className="p-0 mt-4">
            <h1 className='brandsHeading'><AnchorIcon className="branding-logo"/> Brands</h1>
            <a className='brandViewbutton' href=''>View All <KeyboardDoubleArrowRightIcon/> </a>
            <Row className='brandsMainRow'>
                
                    <div className="second-brandwrap">
                        <div className="second-brandcontain" >
                        <img className="second-brand" src={red}/>
                        <img className="second-brand" src={Adidas}/>
                        <img className="second-brand" src={coca}/>
                        <img className="second-brand" src={Brand}/>
                        <img className="second-brand" src={Nike}/>
                        <img className="second-brand" src={pepsi}/>
                        </div>

                    </div>
                
            </Row>
        </Container>
    </Fragment>
}
export default Secondbrand;