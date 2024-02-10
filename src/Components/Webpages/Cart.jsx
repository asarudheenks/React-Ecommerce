import React, { useContext } from 'react'
import "./Cart.css"
import { Mycontext } from '../Context/Context'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Header from '../Header/Header'
import { FiPenTool } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'


function Cart() {

    const {Cartitem, setCartitem, checkOut, setcheckOut, } = useContext(Mycontext)


    const handleDelete=(item)=>{

      setCartitem(Cartitem.filter((deleted)=> deleted !== item))
      
    }

    const handleBuy =(product)=>{

      if(checkOut.includes(product)){
        setcheckOut(checkOut.filter((buyitem)=> buyitem !== product))
      }
      else{
        setcheckOut([product])
      }
    }

  return (
    <div style={{marginTop:"75px"}}>
      <Header/>
    {Cartitem.length > 0 ? (
    Cartitem.map((cartproduct, index) => (
      <div className="cart" key={index}>
        <Container>
          <Row>
            <Col sm={3}>
              <Card style={{ width: "18rem" }} className="cart-card">
                
  
                <Card.Img
                  variant="top"
                  src={cartproduct.Images}
                  className="cart-img"
                />
                
                <div className="buttons">
                  
                  <Button variant="warning ms-5" onClick={()=>handleBuy(cartproduct)}> <Link to={'/Checkout'} style={{textDecoration:"none", color:"white"}}>BUY NOW</Link> </Button> <Button className='ms-5' onClick={()=>handleDelete(cartproduct)}> <RiDeleteBin6Line /></Button>
                </div>
              </Card>
            </Col>

            <Col sm={9} className="specs">
              <div className="specification">
              <h4>{cartproduct.Name}</h4><hr />
              <h5>₹ {cartproduct.Price.toLocaleString('en-IN')}</h5><br />
              <h6>{cartproduct.Description}</h6>
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
      ))
    ) : (
      <h1 className='Empty'> Your Cart Is Empty </h1>
    )
    }
    <Footer/>
  </div>
  )
}

export default Cart