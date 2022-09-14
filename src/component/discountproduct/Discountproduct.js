import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { useState, useEffect,Clock } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Shoes from "../../images/1.jpg";
import Laptop from "../../images/top5.jpg"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';




function Discountproduct() {

  //const[colors,bgcolor]=useState()

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: .5,

  };

  return <Fragment>


    <Container className="mt-4">

      <Row className="discountMaincontainer">
        <Col className="discountLeftsection" lg={4} md={8} sm={12}>
          <h2>FLASH DEAL</h2>
          <h3>time section</h3>


        </Col>

        <Col className="p-0" lg={8} md={8} sm={12}>

          <Slider className="discountSlider" {...settings}>

            <div>
              <Container>
                <Row>

                  <Col className="sliderCardsMain p-0">

                    <Row>
                      <Col className="" lg={4} md={4} sm={12} >
                        <div>
                          <div className="sliderCardsDiscount sliderCardsDiscountlink">
                            10% Off
                          </div>

                          <a className="sliderCardsDiscountlink" href="">
                            <img className="sliderCardsImage" src={Shoes} alt="pic" />
                          </a>
                        </div>
                      </Col>

                      <Col className="sliderCardsImage" lg={8} md={8} sm={12}>
                        <Col>
                          <a className="sliderHeadingProductlink" href="">
                            <h3 className="sliderHeadingProduct">Hot Selling Laptop, Apple Laptop</h3>

                          </a>

                          <Stack spacing={1}>
                            <Rating name="size-small" defaultValue={3} size="small" />
                          </Stack>
                          <del className="sliderDeletprice"> $500.0 </del>
                          <p className="sliderPrice"> $450.0 </p>

                        </Col>
                      </Col>
                    </Row>


                  </Col>





                  <Col className="sliderCardsMain p-0">

                    <Row>
                      <Col className="" lg={4} md={12} sm={12} >
                        <div className="sliderCardsDiscount">
                          <a className="sliderCardsDiscountlink" href="#"><p>10% Off</p></a>
                        </div>

                        <a className="sliderCardsDiscountlink" href="">
                          <img className="sliderCardsImage" src={Laptop} alt="pic" />
                        </a>

                      </Col>

                      <Col className="sliderCardsImage" lg={8} md={12} sm={12}>
                        <Col>
                          <a className="sliderHeadingProductlink" href="">
                            <h3 className="sliderHeadingProduct">Hot Selling Laptop, Apple Laptop</h3>
                          </a>

                          <Stack spacing={1}>
                            <Rating name="size-small" defaultValue={3} size="small" />
                          </Stack>
                          <del className="sliderDeletprice"> $500.0 </del>
                          <p className="sliderPrice"> $450.0 </p>

                        </Col>
                      </Col>
                    </Row>

                  </Col>




                </Row>
              </Container>
            </div>
            <div>

              <Container>
                <Row>

                  <Col className="sliderCardsMain p-0">

                    <Row>
                      <Col className="" lg={4} md={12} sm={12} >
                        <div className="sliderCardsDiscount">
                          <a className="sliderCardsDiscountlink" href="#"><p>10% Off</p></a>
                        </div>

                        <a className="sliderCardsDiscountlink" href="">
                          <img className="sliderCardsImage" src={Shoes} alt="pic" />
                        </a>

                      </Col>

                      <Col className="sliderCardsImage" lg={8} md={12} sm={12}>
                        <Col>
                          <a className="sliderHeadingProductlink" href="">
                            <h3 className="sliderHeadingProduct">Hot Selling Laptop, Apple Laptop</h3>
                          </a>

                          <Stack spacing={1}>
                            <Rating name="size-small" defaultValue={3} size="small" />
                          </Stack>
                          <del className="sliderDeletprice"> $500.0 </del>
                          <p className="sliderPrice"> $450.0 </p>

                        </Col>
                      </Col>
                    </Row>


                  </Col>





                  <Col className="sliderCardsMain p-0">

                    <Row>
                      <Col className="" lg={4} md={4} sm={12} >
                        <div className="sliderCardsDiscount">
                          <a className="sliderCardsDiscountlink" href="#"><p>10% Off</p></a>
                        </div>

                        <a className="sliderCardsDiscountlink" href="">
                          <img className="sliderCardsImage" src={Laptop} alt="pic" />
                        </a>

                      </Col>

                      <Col className="sliderCardsImage" lg={8} md={8} sm={12}>
                        <Col>
                          <a className="sliderHeadingProductlink" href="">
                            <h3 className="sliderHeadingProduct">Hot Selling Laptop, Apple Laptop</h3>
                          </a>

                          <Stack spacing={1}>
                            <Rating name="size-small" defaultValue={3} size="small" />
                          </Stack>
                          <del className="sliderDeletprice"> $500.0 </del>
                          <p className="sliderPrice"> $450.0 </p>

                        </Col>
                      </Col>
                    </Row>

                  </Col>




                </Row>
              </Container>


            </div>


          </Slider>

        </Col>

      </Row>

    </Container>
  </Fragment>



} export default Discountproduct