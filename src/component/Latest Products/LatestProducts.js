import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Rating } from "@mui/material";
import Shoes from "../../images/1.jpg";
import ladis from "../../images/1.jpg"
import watch from "../../images/2.jpg"
import men from "../../images/3.jpg"
import bag from "../../images/4.jpg"
import newarivals from "../../images/new-arrivals.png"

function LatestProducts() {

    return <Fragment>


        <Container className='mt-5 p-0 fetureProductRow'>

            <Row>
                <Col className="fetureProductLeft" lg={4} md={12} sm={12}>



                    <h2 className="RecommendedFroduct">Recommended product</h2>

                    <a className="cardLink " href="#">
                        <Card className="cardAnimationFetureProduct mt-3 fetureProductCardCantring" style={{ width: '14rem' }}>
                            <Card.Img className="cardImage" variant="top" src={Shoes} />
                            <Card.Body>
                                <Card.Title className="cardTitleHeadingmax">Exclusive & Fashionable Suit For Men</Card.Title>
                                <Rating name="size-small" defaultValue={3} size="small" />

                                <div>

                                    <del className="sliderDeletprice"> $500.0 </del>

                                    <p className="cardPrice"> $450.0 </p>
                                </div>


                            </Card.Body>
                        </Card>
                        <Button className="fetureProductLeftButton" variant="primary">Buy Now</Button>
                    </a>
                </Col>


                <Col lg={8} md={6} sm={12}>
                    <Container>
                        <Row>
                            <h1 className='latestProductHeading'><img className="new-aravel" src={newarivals} alt="logo" />Latest Products</h1>

                            <Col lg={4} md={6} sm={12}>
                                <div className="cardLatest">
                                    <div >
                                        <img className="LatestCardImage" src={ladis} />
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

                            <Col lg={4} md={6} sm={12}>

                                <div className="cardLatest">
                                    <div >
                                        <img className="LatestCardImage" src={watch} />
                                    </div>
                                    <div className="conteintSection">
                                        <a className="cardLink" href="#">
                                            <h3 className="cardTitleHeadingmax cardLatestHeading">Skmei Men's Quartz Wrist Watch 1676BB</h3>
                                        </a>
                                        <Rating name="size-small" defaultValue={3} size="small" />
                                        <a className="cardLink" href="#">
                                            <p className="cardPrice"> $450.0 </p>
                                        </a>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <div className="cardLatest">
                                    <div >
                                        <img className="LatestCardImage" src={men} />
                                    </div>
                                    <div className="conteintSection">
                                        <a className="cardLink" href="#">
                                            <h3 className="cardTitleHeadingmax cardLatestHeading">Exclusive & Fashionable Suit For Men</h3>
                                        </a>
                                        <Rating name="size-small" defaultValue={3} size="small" />
                                        <a className="cardLink" href="#">
                                            <p className="cardPrice"> $450.0 </p>
                                        </a>
                                    </div>

                                </div>

                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <div className="cardLatest">
                                    <div >
                                        <img className="LatestCardImage" src={bag} />
                                    </div>
                                    <div className="conteintSection">
                                        <a className="cardLink" href="#">
                                            <h3 className="cardTitleHeadingmax cardLatestHeading">hi i am kanchan</h3>
                                        </a>
                                        <Rating name="size-small" defaultValue={3} size="small" />
                                        <a className="cardLink" href="#">
                                            <p className="cardPrice"> $450.0 </p>
                                        </a>
                                    </div>

                                </div>

                            </Col>


                            <Col lg={4} md={6} sm={12}>
                                <div className="cardLatest">
                                    <div >
                                        <img className="LatestCardImage" src={ladis} />
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

                            <Col lg={4} md={6} sm={12}>

                                <div className="cardLatest">
                                    <div >
                                        <img className="LatestCardImage" src={watch} />
                                    </div>
                                    <div className="conteintSection">
                                        <a className="cardLink" href="#">
                                            <h3 className="cardTitleHeadingmax cardLatestHeading">Skmei Men's Quartz Wrist Watch 1676BB</h3>
                                        </a>
                                        <Rating name="size-small" defaultValue={3} size="small" />
                                        <a className="cardLink" href="#">
                                            <p className="cardPrice"> $450.0 </p>
                                        </a>
                                    </div>

                                </div>

                            </Col>


                            <a className='latestProductViewButton' href=''>View All <KeyboardDoubleArrowRightIcon /> </a>

                        </Row>


                    </Container>
                </Col>
            </Row>
        </Container>
    </Fragment>
} export default LatestProducts