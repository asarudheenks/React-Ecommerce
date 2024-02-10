import React, { useContext } from 'react'
import './Specifications.css'
import { Mycontext } from '../Context/Context'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { GoHeart } from "react-icons/go";
import Header from '../Header/Header';
import { FiPenTool } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

function Specifications() {
  
  const Navigate = useNavigate()

    const {Products, productDetails, setproductDetails, Liked, setLiked, Cartitem, setCartitem,checkOut,setcheckOut, isLoggedin} =useContext(Mycontext)

    const handleLike =(product)=>{
        if(Liked.includes(product)){
            setLiked(Liked.filter((item)=> item !== product))
        }
        else{
            setLiked([...Liked,product])
        }
    }

    const handlecart = (product) => {
      const isProductInCart = Cartitem.find((cartitem) => cartitem.Id === product.Id);
    
      if (isProductInCart) {
        // If the product already exists in the cart, show an alert message
        window.alert("This item is already in your cart!");
      } else {
        // If the product doesn't exist, add it to the cart
        setCartitem([...Cartitem, product]);
      }
    };
    const handleBuy =(product)=>{

      if(checkOut.includes(product)){
        setcheckOut(checkOut.filter((buyitem)=> buyitem !== product))
      }
      else{
        setcheckOut([product])
      }
    }

    const AppleMobiles = Products.filter(
      (mobile) => mobile.Category === "APPLE Mobiles"
    );
    const Details = (products) => {
      if (productDetails.includes(products)) {
        setproductDetails(productDetails.filter((item) => item !== products));
      } else {
        setproductDetails([products]);
      }
    };
  return (
    <div style={{marginTop:"75px"}}>
      <Header/>
    {productDetails.map((details, index) => (
      <div className="Details" key={index}>
        <Container>
          <Row>
            <Col sm={3}>
              <Card style={{ width: "18rem" }} className="Details-card">
                <button className='heart' onClick={()=>handleLike(details)}><GoHeart /></button>
              
                <Card.Img
                  variant="top"
                  src={details.Images}
                  className="Details-img"
                />
                
                <div className="buttons">
                {isLoggedin ? (
  <Button className="cart-btn" onClick={() => handlecart(details)}>
    ADD TO CART
  </Button>
) : (
  <Button className="cart-btn" onClick={() => Navigate('/Login')}>
    ADD TO CART
  </Button>
)}

  
          {isLoggedin ? (
                  <Button variant="warning ms-4" onClick={()=>handleBuy(details)}>
                     <Link to={'/Checkout'} style={{textDecoration:"none", color:"white"}}>
                      BUY NOW
                      </Link> 
                      </Button>
          ) : (
            <Button variant="warning ms-4" onClick={() => Navigate('/Login')}>
            BUY NOW
          </Button>
          )
}
                </div>
              </Card>
            </Col>

            <Col sm={9} className="specs">
              <div className="specification">
              <h4>{details.Name}</h4><hr />
              <h5>₹ {details.Price.toLocaleString('en-IN')}</h5><br />
              <h6>{details.Description}</h6>
              </div>
              <h5><hr />Available Offers<hr /></h5>
              <FiPenTool />  Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹10,000 and aboveT&C <br /><br />
              <FiPenTool /> Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up to ₹1,750 on orders of ₹10,000 and aboveT&C <br /><br />
              <FiPenTool /> Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI Transactions on orders of ₹10,000 and aboveT&C <br /><br />
              <FiPenTool /> Special PriceGet extra 12% off (price inclusive of cashback/coupon)T&C<br />

          

            </Col>
          </Row>

        </Container>
      </div>
    ))}
     <h3 className="title" style={{marginTop:"20px"}}>The latest. Take a look at what's new right now.</h3>
      <div className="Home-container" >
        {AppleMobiles.map((mobiles) => (
          <div className="Home" key={mobiles.Id}>
            <Link to={"/Specifications"} onClick={() => Details(mobiles)} style={{textDecoration:"none"}}>
              <Card style={{ width: "12rem" }} className="Home-card">
                <Card.Img
                  variant="top"
                  src={mobiles.Images}
                  className="Home-cardimg"
                />
                <h6>{mobiles.Name}</h6>
              </Card>
            </Link>
          </div>
        ))}
      </div>
  </div>
  )
}

export default Specifications