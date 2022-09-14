import React, { Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ApiSharpIcon from '@mui/icons-material/ApiSharp';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Rating } from "@mui/material";
import bag from "../../images/4.jpg"
import ladis from "../../images/1.jpg"
import watch from "../../images/2.jpg"
import men from "../../images/3.jpg"

function Bestsellreting() {
    return <Fragment>
        <Container className="mt-5 p-0">
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <div className="brandAndSelling ">
                        <h2 className="catagoriAndSellingHeading"> <ApiSharpIcon className="bestSellingIcon" /> BEST SELLINGS</h2>


                        <Container className="CardBotom" >
                            <Row className="bestSellingCard">
                                <Col lg={4} md={4} sm={4}>
                                    <img className="bestSellingImge" src={bag} />
                                </Col>

                                <Col lg={8} md={8} sm={8}>
                                    <h3 className="cardTitleHeadingmax bestSellingHeading"> Bags & Shoes </h3>
                                    <h3 className="bestSellingRating"><Rating name="size-small" defaultValue={3} size="small" /></h3>
                                    <p className="cardPrice bestSellingRating"> $450.0 </p>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="CardBotom">
                            <Row className="bestSellingCard">
                                <Col lg={4} md={4} sm={4}>
                                    <img className="bestSellingImge" src={ladis} />
                                </Col>

                                <Col lg={8} md={8} sm={8}>
                                    <h3 className="cardTitleHeadingmax bestSellingHeading"> Ladies Winter Long Sleeve Sweater </h3>
                                    <h3 className="bestSellingRating"><Rating name="size-small" defaultValue={3} size="small" /></h3>
                                    <p className="cardPrice bestSellingRating"> $450.0 </p>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="CardBotom">
                            <Row className="bestSellingCard">
                                <Col lg={4} md={4} sm={4}>
                                    <img className="bestSellingImge" src={watch} />
                                </Col>

                                <Col lg={8} md={8} sm={8}>
                                    <h3 className="cardTitleHeadingmax bestSellingHeading"> Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac </h3>
                                    <h3 className="bestSellingRating"><Rating name="size-small" defaultValue={3} size="small" /></h3>
                                    <p className="cardPrice bestSellingRating"> $450.0 </p>
                                </Col>
                                <Button variant="outline-primary" size="lg"> View All <KeyboardDoubleArrowRightIcon /></Button>{' '}
                            </Row>
                        </Container>


                    </div>

                </Col>

                <Col lg={6} md={12} sm={12}>
                    <div className="brandAndSelling ">
                        <h2 className="catagoriAndSellingHeading"> <BrightnessHighIcon className="bestSellingIcon" /> TOP RATED</h2>
                        <Container className="CardBotom">
                            <Row className="bestSellingCard">
                                <Col lg={4} md={4} sm={4}>
                                    <img className="bestSellingImge" src={ladis} />
                                </Col>

                                <Col lg={8} md={8} sm={8}>
                                    <h3 className="cardTitleHeadingmax bestSellingHeading"> Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac </h3>
                                    <h3 className="bestSellingRating"><Rating name="size-small" defaultValue={3} size="small" /></h3>
                                    <p className="cardPrice bestSellingRating"> $450.0 </p>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="CardBotom">
                            <Row className="bestSellingCard">
                                <Col lg={4} md={4} sm={4}>
                                    <img className="bestSellingImge" src={men} />
                                </Col>

                                <Col lg={8} md={8} sm={8}>
                                    <h3 className="cardTitleHeadingmax bestSellingHeading"> Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac </h3>
                                    <h3 className="bestSellingRating"><Rating name="size-small" defaultValue={3} size="small" /></h3>
                                    <p className="cardPrice bestSellingRating"> $450.0 </p>
                                </Col>
                            </Row>
                        </Container>

                        <Container className="CardBotom">
                            <Row className="bestSellingCard">
                                <Col lg={4} md={4} sm={4}>
                                    <img className="bestSellingImge" src={watch} />
                                </Col>

                                <Col lg={8} md={8} sm={8}>
                                    <h3 className="cardTitleHeadingmax bestSellingHeading"> Simple Mobile Carrier-Locked Galaxy A50 4G LTE Prepaid Smartphone - Blac </h3>
                                    <h3 className="bestSellingRating"><Rating name="size-small" defaultValue={3} size="small" /></h3>
                                    <p className="cardPrice bestSellingRating"> $450.0 </p>
                                </Col>
                                <Button variant="outline-primary" size="lg"> View All <KeyboardDoubleArrowRightIcon /></Button>{' '}
                            </Row>
                        </Container>



                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
} export default Bestsellreting