import React, { Fragment } from "react";
import { Container, Row,Col,Button } from "react-bootstrap";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import phone from "../../images/phone.png"
import cover from "../../images/cover.png"
import headph from "../../images/headph.png"
import hedp from "../../images/hedp.png"
import phonetel from "../../images/phone and telecom.png"
import { Rating } from "@mui/material";

function PhoneTelecom (){
    return <Fragment>
        <Container className="mt-5 bagandShoseBorder">
        <Row>
                <h2 className="catagoriAndSellingHeading"><img className="brand-logo" src={phonetel}/> PHONES & TELECOM </h2>
                 
             <Row/>
            
              
            <Col className="bagColum " lg={3} md={6} sm={12}>

                <div className="mainBagcard ">
                        <div >
                            <img className="LatestCardImage" src={phone}/>
                        </div>
                        <div className="conteintSection">

                        <a className="cardLink" href="#">
                            <h3 className="cardTitleHeadingmax cardLatestHeading" > Ladies' Three Pcs Maroon </h3>
                        </a>
                            <Rating name="size-small" defaultValue={3} size="small" />
                        <a className="cardLink" href="#">
                            <p className="cardPrice"> $450.0 </p>
                        </a>
                        </div>

                    </div>
            </Col>
            <Col className="bagColum" lg={3} md={6} sm={12}>
              <div className="mainBagcard ">
                        <div >
                            <img className="LatestCardImage" src={cover}/>
                        </div>
                        <div className="conteintSection">

                        <a className="cardLink" href="#">
                            <h3 className="cardTitleHeadingmax cardLatestHeading" > Ladies' Three Pcs Maroon </h3>
                        </a>
                            <Rating name="size-small" defaultValue={3} size="small" />
                        <a className="cardLink" href="#">
                            <p className="cardPrice"> $450.0 </p>
                        </a>
                        </div>

                    </div>
                </Col>

                <Col className="bagColum" lg={3} md={6} sm={12}>
                    <div className="mainBagcard  ">
                        <div >
                            <img className="LatestCardImage" src={headph}/>
                        </div>
                        <div className="conteintSection">

                        <a className="cardLink" href="#">
                            <h3 className="cardTitleHeadingmax cardLatestHeading" > Ladies' Three Pcs Maroon </h3>
                        </a>
                            <Rating name="size-small" defaultValue={3} size="small" />
                        <a className="cardLink" href="#">
                            <p className="cardPrice"> $450.0 </p>
                        </a>
                        </div>

                    </div>
                </Col>

                <Col className="bagColum" lg={3} md={6} sm={12}>
                    <div className="mainBagcard ">
                        <div >
                            <img className="LatestCardImage" src={hedp}/>
                        </div>
                        <div className="conteintSection">

                        <a className="cardLink" href="#">
                            <h3 className="cardTitleHeadingmax cardLatestHeading" > Ladies' Three Pcs Maroon </h3>
                        </a>
                            <Rating name="size-small" defaultValue={3} size="small" />
                        <a className="cardLink" href="#">
                            <p className="cardPrice"> $450.0 </p>
                        </a>
                        </div>

                    </div>
                 </Col>
                    
                 <Button variant="outline-primary" size="lg"> View All <KeyboardDoubleArrowRightIcon/></Button>{' '}   
        </Row>

                        
           
            
        </Container>
    </Fragment>
}export default PhoneTelecom;