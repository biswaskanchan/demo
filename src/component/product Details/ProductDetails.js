import React, { Fragment,useState } from "react";
import { Col, Row,Container,button } from "react-bootstrap";
import Rating from '@mui/material/Rating';
import juta from "../../images/nike.png"

function ProdutDetails(){

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


    return <Fragment>
        <Container>
            <Row>
                <Col lg={6} md={12} sm={12}>
                <img src={juta}/>
                </Col>


                <Col lg={6} md={12} sm={12}>
                  <div>
                    <div>
                        <h2>hi this is lateset Product</h2>
                    </div>

                    <div>
                    <Rating  value={3} readOnly />
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