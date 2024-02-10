import React, { useContext } from 'react'
import { Mycontext } from '../Context/Context'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Orders() {
    const {Order} = useContext(Mycontext)
  return (
    <div>
         { Order.length > 0 ?(
         Order.map((order, index) => (
        <div className="checkout" key={index}>
          <Container>
            <Row>
              <Col sm={3}>
                <Card style={{ width: "18rem" }} className="checkout-card">
                  <Card.Img
                    variant="top"
                    src={order.Images}
                    className="checkout-img"
                  />
                  
                </Card>
              </Col>
              <Col sm={4} className="check-spec">
                <h3>{order.Name}</h3>
                <h4>₹ {order.Price.toLocaleString('en-IN')}</h4>
                
              </Col>
        
            </Row>
            
          </Container>
          
        </div>
        
      ))
         ) :(
            <h4 className='Empty'>Your Order is Empty</h4>
         )
    }

    </div>
  )
}

export default Orders