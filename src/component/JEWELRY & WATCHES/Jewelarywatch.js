import React, { Fragment } from "react";
import { Container, Row,Col,Button } from "react-bootstrap";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import rolex from "../../images/rolex.png"
import saban from "../../images/saban.png"
import applewatch from "../../images/applewatch.png"
import handbag from "../../images/ba.png"
import jwicon from "../../images/jwelari.png"
import { Rating } from "@mui/material";

function JewelaryWatch (){
    return <Fragment>
        <Container className="mt-5 bagandShoseBorder">
            <Row>
                
                <h2 className="catagoriAndSellingHeading"><img className="brand-logo" src={jwicon}/> JEWELRY & WATCHES </h2>   
            </Row>

            <Row>
              
                <Col className="bagColum " lg={3} md={6} sm={12}>

                    <div className="mainBagcard ">
                            <div >
                                <img className="LatestCardImage" src={rolex}/>
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
                                <img className="LatestCardImage" src={saban}/>
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
                                <img className="LatestCardImage" src={applewatch}/>
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
                                <img className="LatestCardImage" src={handbag}/>
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
}export default JewelaryWatch;