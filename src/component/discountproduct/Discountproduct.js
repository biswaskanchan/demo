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

import Countdown from 'react-countdown';


function Discountproduct() {

  //const[colors,bgcolor]=useState()

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: .5,

  };
  
  const fullDays= 24;
  const hrs= 3600000*fullDays;
  const days=7
  const fullCount= days*hrs; 

 return <Fragment>


    <Container className="mt-4">

      <Row className="discountMaincontainer">
        <Col className="discountLeftsection" lg={4} md={8} sm={12}>
          <h2 className="flassh-dells">FLASH DEAL</h2>
          
          <div className="flash-section">     
                        <Countdown className="count-Down"
                  date={Date.now() + fullCount}/>
          </div>


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
                          <img className="sliderCardsImage" src={Shoes} alt="pic" />
                        </div>
                      </Col>

                      <Col className="sliderCardsImage" lg={8} md={8} sm={12}>
                        <Col>
                          <h3 className="sliderHeadingProduct">Hot Selling Laptop, Apple Laptop</h3>
                          <Stack spacing={1}>
                            <Rating name="size-small" defaultValue={3} size="small" />
                          </Stack>
                          <div>
                            <div><del className="sliderDeletprice"> $500.0 </del></div>
                            <div><p className="sliderPrice"> $450.0 </p></div>
                            {/*<div className="sliderCardsDiscount sliderCardsDiscountlink">
                                <p>10% Off</p>
                              </div> */}

                          </div>
                        </Col>
                      </Col>
                    </Row>
                  </Col>





                  <Col className="sliderCardsMain p-0">

                    <Row>
                      <Col className="" lg={4} md={12} sm={12} >

                        <img className="sliderCardsImage" src={Laptop} alt="pic" />


                      </Col>

                      <Col className="sliderCardsImage" lg={8} md={12} sm={12}>
                        <Col>
                          <h3 className="sliderHeadingProduct">Hot Selling Laptop, Apple Laptop</h3>

                          <Stack spacing={1}>
                            <Rating name="size-small" defaultValue={3} size="small" />
                          </Stack>

                          <div>
                            <div><del className="sliderDeletprice"> $500.0 </del></div>
                            <div><p className="sliderPrice"> $450.0 </p></div>
                            {/*<div >
                              <p className="sliderCardsDiscount sliderCardsDiscountlink">10% Off</p>
                              </div> */}
                          </div>

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
                        <img className="sliderCardsImage" src={Shoes} alt="pic" />

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
                        <img className="sliderCardsImage" src={Laptop} alt="pic" />

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