import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import women from "../../images/women.png"
import ledihil from "../../images/ledihil.png"
import parts from "../../images/parts.png"
import ladigenji from "../../images/ladigenji.png"
import womeicon from "../../images/women fashion.png"
import { Rating } from "@mui/material";

function WomenFashion() {
    return <Fragment>
        <Container className="mt-5 bagandShoseBorder">
            <Row>

                <h2 className="catagoriAndSellingHeading"><img className="brand-logo" src={womeicon} /> WOMEN'S FASHION </h2>

            </Row>

            <Row>

                <Col className="bagColum " lg={3} md={6} sm={12}>

                    <div className="mainBagcard ">
                        <div >
                            <img className="LatestCardImage" src={women} />
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
                            <img className="LatestCardImage" src={ledihil} />
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
                            <img className="LatestCardImage" src={parts} />
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
                            <img className="LatestCardImage" src={ladigenji} />
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

                <Button variant="outline-primary" size="lg"> View All <KeyboardDoubleArrowRightIcon /></Button>{' '}
            </Row>

        </Container>
    </Fragment>
} export default WomenFashion;