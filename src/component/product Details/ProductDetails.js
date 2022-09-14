import React, { Fragment, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Rating from '@mui/material/Rating';
import juta from "../../images/nike.png"
import shirt from "../../images/1.jpg"
import ledi from "../../images/2.jpg"
import man from "../../images/3.jpg"

function ProdutDetails() {

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    if (8 <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    //dispatch(addItemsToCart( quantity));
    alert("Item Added To Cart");
  };

  const [mainp , setpic] = useState({
    smallpic:[juta,shirt,ledi,man]
    

  })
 const changePic =()=>{
  setpic({smallpic:[0]})
 }

 const changePic1 =()=>{
  
  setpic({smallpic:[1]})
 }
 const changePic2 =()=>{
  setpic({smallpic:[2]})
 }
 const changePic3 =()=>{
  setpic({smallpic:[3]})
 }
  return <Fragment>
    <Container>
      <Row>
        <Col lg={6} md={12} sm={12}>

          <div > < img className="main-pic" src={mainp.smallpic[0]} /></div>

          <div className="change-img">

         <div >
            <img onClick={changePic} className="img-size" src={mainp.smallpic[0]}  alt="juta"/>
          </div>
          <div  >
           <img  onClick={changePic1} id="ledis" className="img-size" src={mainp.smallpic[1]} alt="ladis" />
            
          </div>
          <div >
            <img onClick={changePic2}  className="img-size" src={mainp.smallpic[2]} alt="watch" />
          </div>
          <div>
            <img onClick={changePic3} className="img-size " src={mainp.smallpic[3]} alt="men" />
          </div>
</div>
         

        </Col>


        <Col lg={6} md={12} sm={12}>
          <div>
            <div>
              <h2>hi this is lateset Product</h2>
            </div>

            <div>
              <Rating value={3} readOnly />
              <span>
                {""}(Reviews)
              </span>
            </div>

            <div className="">
              <h1>$400</h1>
            </div>
            <div className="">
              <button onClick={decreaseQuantity}>-</button>
              <input readOnly type="number" value={quantity} />
              <button onClick={increaseQuantity}>+</button>
            </div>

            <button
              //disabled={8 < 1 ? true : false}
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>

            <p>
              Status:
              <b className={8 < 1 ? "redColor" : "greenColor"}>
                {8 < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>


            <div className="">
              Description : <p>hi i am kanchan</p>
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  </Fragment>
} export default ProdutDetails