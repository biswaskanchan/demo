import React, { Fragment } from 'react'
import {Container, Col, Row } from 'react-bootstrap';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Brand from "../../images/top1.jpg";
import Adidas from "../../images/adidas.jpg";
import Nike from "../../images/nike.jpg"

function BrandsSection (){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: .5,
        slidesToScroll: .1
      };

    return <Fragment>
        <Container className='mt-3 p-0'>

            <h1 className='brandsHeading'>Brands</h1>
            <a className='brandViewbutton' href=''>View All <KeyboardDoubleArrowRightIcon/> </a>

            <Row className='brandsMainRow'>
                <Col>

       <Slider {...settings}>
                  <div>
                     <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Adidas} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Adidas} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Nike} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Adidas} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Nike} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Adidas} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Nike} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Nike} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>
                   </div>
                   <div>

                   <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Adidas} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Adidas} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Nike} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Adidas} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Nike} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Nike} alt='logo'/>
                        </a>

                        <a className='sliderHeadingProductlink' href=''>
                        <img className='brandProfile' src={Brand} alt='logo'/>
                        </a>

                        
                     
                   </div>
                  
                                
    </Slider>

                </Col>
            </Row>
        </Container>
    </Fragment>
}export default BrandsSection;