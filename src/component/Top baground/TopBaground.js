import React, { Fragment } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import slide from "../../images/shopingnew.jpg";
import cameto from "../../images/topcamera.png";
import hedPho from "../../images/tolbag.png"
function TopBaground() {
    return <Fragment>
        <Container fluid={true} className="p-0">

            <Row>
                <Col className="top-leftbancoler" sm={12} md={12} lg={3}>
                
                </Col>
                <Col sm={12} md={12} lg={9}>
                <Carousel>
                <Carousel.Item interval={1000}>
                    <img className="d-block  sile-top" src={slide} alt="First slide" />
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img className="d-block  sile-top" src={cameto} alt="Second slide" />
                </Carousel.Item>

                <Carousel.Item>
                    <img className="d-block  sile-top" src={hedPho} alt="Third slide" />
                </Carousel.Item>
            </Carousel>

                </Col>
            </Row>
        </Container>
    </Fragment>
} export default TopBaground