import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Mycontext } from '../Context/Context'
import './Wishlist.css'
import React, { useContext } from 'react'
import { GoHeart } from "react-icons/go";
import Header from '../Header/Header';

function Wishlist() {
    const {Liked, setLiked, Cartitem, setCartitem, Cartcount, setCartcount} = useContext(Mycontext)

    const handleUnlike = (product)=>{
setLiked(Liked.filter((likeditem)=> likeditem !== product))
    }
    const handlecart=(product)=>{
      if(Cartitem.includes(product)){
        setCartitem(Cartitem.filter((cartitem)=> cartitem !== product))
      }
      else{
        setCartitem([...Cartitem, product])
        setCartcount(Cartcount + 1)
      }
    }
  return (
    <div style={{marginTop:"75px"}}>
      <Header/>
    {Liked.length > 0 ? (
    Liked.map((details, index) => (
      <div className="Details" key={index}>
        <Container>
          <Row>
            <Col sm={3}>
              <Card style={{ width: "18rem" }} className="Details-card">
                <button className='heart' onClick={()=>handleUnlike(Liked)}><GoHeart /></button>
              
                <Card.Img
                  variant="top"
                  src={details.Images}
                  className="Details-img"
                />
                <div className="buttons">
                  <Button className="cart-btn" onClick={()=>handlecart(details)}>ADD TO CART</Button>
                  <Button className="buy-btn">BUY NOW</Button>
                </div>
              </Card>
            </Col>

            <Col sm={9} className="specs">
              <h4>{details.Name}</h4>
            </Col>
          </Row>
        </Container>
      </div>
    ))
    ) : (
<h1 className='Empty'>Your Wishlist is Empty</h1>

    )
  }
  </div>
   
  )
}

export default Wishlist