import React, { useContext, useState } from "react";
import { Mycontext } from "../Context/Context";
import "./Checkout.css";
import {
  Form,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";



function Checkout() {
  const { checkOut, updateQuantity, Order, setOrder } = useContext(Mycontext);

  const Navigate =useNavigate()

  const handleDecrease = (index) => {
    const updatedCart = [...checkOut];
    if (updatedCart[index].Quantity > 1) {
      updatedCart[index].Quantity -= 1;
      updateQuantity(updatedCart);
    }
  };

  const handleIncrease = (index) => {
    const updatedCart = [...checkOut];
    updatedCart[index].Quantity += 1;
    updateQuantity(updatedCart);
  };

  const { Address, setAddress } = useContext(Mycontext);

  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Houseno, setHouseno] = useState("");
  const [Street, setStreet] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [Pincode, setPincode] = useState("");
  const [Town, setTown] = useState("");
  const [showModal, setShowModal] = useState(false);

  const userAddress = {
    Firstname,
    Lastname,
    MobileNumber,
    Houseno,
    Landmark,
    Pincode,
    Town,
    Street,
  };

  const handleContinue = (product) => {
    if (Order.includes(product)) {
      setOrder(Order.filter((ordereditem) => ordereditem !== product));
    } else {
      setOrder([...Order, product]);
    }

    if (
      !Firstname ||
      !Lastname ||
      !MobileNumber ||
      !Houseno ||
      !Street ||
      !Pincode ||
      !Town
    ) {
      alert("Please fill the required  fields");
    } else {
      setAddress([...Address, userAddress]);
      setShowModal(true);
    }
  };
  const handleClose = () => {
    setShowModal(false);
    Navigate('/')
  };
  console.log(Address);

  return (
    <div style={{ marginTop: "75px" }}>
      <Header />
      {checkOut.map((buyitem, index) => (
        <div className="checkout" key={index}>
          <Container>
            <Row>
              <h2 id="order-head">ORDER SUMMARY</h2>
              <Col sm={3}>
                <Card style={{ width: "18rem" }} className="checkout-card">
                  <Card.Img
                    variant="top"
                    src={buyitem.Images}
                    className="checkout-img"
                  />
                  <div className="qtybtn">
                    Quantity :{" "}
                    <Button
                      className="me-2"
                      onClick={() => handleDecrease(index)}
                    >
                      -
                    </Button>
                    {buyitem.Quantity}
                    <Button
                      className="ms-2"
                      onClick={() => handleIncrease(index)}
                    >
                      +
                    </Button>
                  </div>
                </Card>
              </Col>
              <Col sm={4} className="check-spec">
                <h3>{buyitem.Name}</h3>
                <h4>₹ {buyitem.Price.toLocaleString("en-IN")}</h4>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col sm={6}>
                <label htmlFor="firstName">First Name</label>
                <Form.Control
                  type="text"
                  placeholder=""
                  id="firstName"
                  value={Firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="w-100"
                />
                <label htmlFor="lastName">Last Name</label>
                <Form.Control
                  type="text"
                  placeholder=""
                  id="lastName"
                  className="w-100"
                  value={Lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <Form.Control
                  type="number"
                  placeholder=" "
                  id="mobileNumber"
                  className="w-100"
                  value={MobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <label htmlFor="address1">
                  Flat, House no., Building, Company, Apartment
                </label>
                <Form.Control
                  type="text"
                  placeholder=""
                  id="address1"
                  className="w-100"
                  value={Houseno}
                  onChange={(e) => setHouseno(e.target.value)}
                />
              </Col>
              <Col sm={6}>
                <label htmlFor="address2">Area, Street, Sector, Village</label>
                <Form.Control
                  type="text"
                  placeholder=""
                  id="address2"
                  className="w-100"
                  value={Street}
                  onChange={(e) => setStreet(e.target.value)}
                />
                <label htmlFor="landmark">Landmark</label>
                <Form.Control
                  type="text"
                  placeholder="eg : Appolo hospital"
                  id="landmark"
                  className="w-100"
                  value={Landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                />
                <label htmlFor="townCity">Town/City</label>
                <Form.Control
                  type="text"
                  placeholder=""
                  id="townCity"
                  value={Town}
                  onChange={(e) => setTown(e.target.value)}
                />
                <label htmlFor="pincode">Pincode</label>
                <Form.Control
                  type="number"
                  placeholder=""
                  id="pincode"
                  value={Pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </Col>
            </Row>
          </Container>

          <Container fluid>
            <Row>
              <Col sm={6} className="check-total">
                <h3>Price details</h3>
                <hr />
                <h3>Price (1 item) ₹ {buyitem.Price}</h3>
                <h3>Delivery charges </h3>
                <hr />
                <h3>
                  Total payable: ₹{" "}
                  {(buyitem.Quantity * buyitem.Price).toLocaleString("en-IN")}
                </h3>
                <Button
                  variant="warning ms-5 mt-5"
                  onClick={() => handleContinue(buyitem)}
                >
                  PROCEED TO BUY
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      ))}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Order Successfully</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
}

export default Checkout;
