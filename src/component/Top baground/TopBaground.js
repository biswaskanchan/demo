import React, { Fragment } from "react";
import {  Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide from "../../images/shopingnew.jpg";
import cameto from "../../images/topcamera.png";
import hedPho from "../../images/tolbag.png"
import Slider from "react-slick";
function TopBaground() {

    var setting = {
        dots: false,
        infinite:true,
        arrows:false,
        autoplay:true,
        Speed:3000,
        fade:true,
        autoplaySpeed:4000    
    };

    return <Fragment>
        <Container fluid={true} className="p-0">

            <Row>
                <Col className="top-leftbancoler " sm={12} md={12} lg={3}>
                
                </Col>

                <Col className="" sm={12} md={12} lg={9}>
                <Slider {...setting}>
                    <div>
                        <img className="d-block  sile-top" src={slide} alt="First slide" />
                    </div>

                    <div>
                    <img className="d-block  sile-top" src={cameto} alt="Second slide" />
                    </div>

                    <div>
                    <img className="d-block  sile-top" src={hedPho} alt="Third slide" />
                    </div>
                </Slider>
                </Col>
            </Row>
        </Container>
    </Fragment>
} export default TopBaground