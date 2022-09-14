import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Brand from "../../images/top1.jpg";
import Adidas from "../../images/adidas.jpg";
import Nike from "../../images/nike.jpg"

function BrandNewSlide() {
  return <Fragment>
    <Container>
      <h1 className='brandsHeading'>Brands</h1>
      <a className='brandViewbutton' href=''>View All <KeyboardDoubleArrowRightIcon /> </a>

      <Row>
        <Col>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}

            ssr={true} // means to render carousel on server-side.
            infinite={true}
            //autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType={this.props.deviceType}

            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <a className='sliderHeadingProductlink' href=''>
                <img className='brandProfile' src={Brand} alt='logo' />
              </a></div>

            <div>
              <a className='sliderHeadingProductlink' href=''>
                <img className='brandProfile' src={Adidas} alt='logo' /></a>
            </div>


            <div>
              <a className='sliderHeadingProductlink' href=''>
                <img className='brandProfile' src={Nike} alt='logo' /></a>
            </div>
            <div>
              <a className='sliderHeadingProductlink' href=''>
                <img className='brandProfile' src={Adidas} alt='logo' /></a>
            </div>
          </Carousel>;
        </Col>
      </Row>
    </Container>
  </Fragment>
} export default BrandNewSlide