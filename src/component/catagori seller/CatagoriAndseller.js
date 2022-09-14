import React, { Fragment } from "react";
import { Col, Row, Container } from "react-bootstrap";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import bag from "../../images/4.jpg"
import ladis from "../../images/1.jpg"
import watch from "../../images/2.jpg"
import men from "../../images/3.jpg"
import crown from "../../images/crown.png"
import thumb from "../../images/thumbup.png"

function CatagoriAndSeller() {
    return <Fragment>
        <Container className="mt-5 p-0">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className="brandAndSelling ">
                        <h2 className="catagoriAndSellingHeading">
                            <img className="catagori-logo" src={crown} alt="" /> Categories</h2>
                        <Container>
                            <Row>
                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={bag} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Bags & Shoes</h4>
                                    </div>

                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={ladis} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Home, Pet & Appliances</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={watch} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Phones & Telecom</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={men} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Computer, Office & Security</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={bag} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Bags & Shoes</h4>
                                    </div>

                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={ladis} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Home, Pet & Appliances</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={watch} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Phones & Telecom</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={men} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Computer, Office & Security</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                        <a className='latestProductViewButton' href=''>View All <KeyboardDoubleArrowRightIcon /> </a>
                    </div>
                </Col>


                <Col lg={6} md={6} sm={12}>
                    <div className="brandAndSelling">
                        <h2 className="catagoriAndSellingHeading"><img className="catagori-logo" src={thumb} alt="" /> Sellers</h2>

                        <Container>
                            <Row>
                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={bag} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Bags & Shoes</h4>
                                    </div>

                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={ladis} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Home, Pet & Appliances</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={watch} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Phones & Telecom</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={men} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Computer, Office & Security</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={bag} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Bags & Shoes</h4>
                                    </div>

                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={ladis} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Home, Pet & Appliances</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={watch} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Phones & Telecom</h4>
                                    </div>
                                </Col>

                                <Col lg={3} md={3} sm={3}>
                                    <div>
                                        <img className="catagoriAndSellingPic" src={men} />
                                        <h4 className="cardTitleHeadingmax brandHeadingsection">Computer, Office & Security</h4>
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                        <a className='latestProductViewButton' href=''>View All <KeyboardDoubleArrowRightIcon /> </a>
                    </div>
                </Col>

            </Row>
        </Container>
    </Fragment>
} export default CatagoriAndSeller;