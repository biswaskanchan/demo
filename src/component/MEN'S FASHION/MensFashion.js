import React, { Fragment } from "react";
import { Container, Row,Col,Button } from "react-bootstrap";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import formal from "../../images/formal.png"
import butt from "../../images/shos.png"
import menformal from "../../images/menformal.png"
import juta from "../../images/nike.png"
import meicon from "../../images/manfashonicon.png"
import { Rating } from "@mui/material";

function MenFashion (){
    return <Fragment>
        <Container className="mt-5 bagandShoseBorder">
            <Row>
                
                <h2 className="catagoriAndSellingHeading"><img className="brand-logo" src={meicon}/> MEN'S FASHION </h2>     
            </Row>

            <Row>
              
                <Col className="bagColum " lg={3} md={6} sm={12}>

                    <div className="mainBagcard ">
                            <div >
                                <img className="LatestCardImage" src={formal}/>
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

                    <Col className="bagColum" lg={3} md={6} sm={12}>
                        <div className="mainBagcard  ">
                            <div >
                                <img className="LatestCardImage" src={menformal}/>
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
                                <img className="LatestCardImage" src={juta}/>
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
}export default MenFashion;