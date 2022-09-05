import React, { Fragment } from "react";
import { Container, Row,Col,Button } from "react-bootstrap";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import bagg from "../../images/bag.png"
import bag1 from "../../images/ba.png"
import nike from "../../images/nike.png"
import butt from "../../images/shos.png"
import bagands from "../../images/bagicon.png"
import { Rating } from "@mui/material";

function Bagshose (){
    return <Fragment>
        <Container className="mt-5">
        <Row>
            <h2 className="catagoriAndSellingHeading"><img className="brand-logo" src={bagands}/> BAGS & SHOES </h2>
            
        </Row>
            <Row>
            
                
                <Col className="bagColum " lg={3} md={6} sm={12}>

                    <div className="mainBagcard ">
                            <div >
                                <img className="LatestCardImage" src={bagg}/>
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
                                <img className="LatestCardImage" src={bag1}/>
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
                                <img className="LatestCardImage" src={nike}/>
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
                                <img className="LatestCardImage" src={butt}/>
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
}export default Bagshose;