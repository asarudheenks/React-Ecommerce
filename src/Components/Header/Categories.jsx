import React from "react";
import "./Categories.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div style={{marginTop:"75px"}}>
      <h2 style={{ textAlign: "center" }}>Categories</h2>
      <div className="Category-container">
        <Link to={'/Mobiles'} style={{ textDecoration: "none" }}>
          <Card style={{ width: "8rem" }} className="category-card">
            <Card.Img
              variant="top"
              src={
                "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70"
              }
              className="category-cardimg"
            />
            <h6>Mobiles</h6>
          </Card>
        </Link>
        <Link to={'/Laptops'} style={{ textDecoration: "none" }}>
        <Card style={{ width: "8rem" }} className="category-card">
          <Card.Img
            variant="top"
            src={
              "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/x/l/l/-original-imagqkqnwknygzkr.jpeg?q=70"
            }
            className="category-cardimg"
          />
          <h6>Laptops</h6>
        </Card>
        </Link>
        <Link to={'/Shoes'} style={{ textDecoration: "none" }}>
        <Card style={{ width: "8rem" }} className="category-card">
          <Card.Img
            variant="top"
            src={"https://m.media-amazon.com/images/I/513ucfpZprL._SY695_.jpg"}
            className="category-cardimg"
          />
          <h6>Shoes</h6>
        </Card>
        </Link>
        <Link to={'/Cameras'} style={{ textDecoration: "none" }}>
        <Card style={{ width: "8rem" }} className="category-card">
          <Card.Img
            variant="top"
            src={
              "https://m.media-amazon.com/images/I/71j3bPnm+UL._AC_UY327_FMwebp_QL65_.jpg"
            }
            className="category-cardimg"
          />
          <h6>DSLR</h6>
        </Card>
        </Link>
        <Link to={'/Fashion'} style={{ textDecoration: "none" }}>
        <Card style={{ width: "8rem" }} className="category-card">
          <Card.Img
            variant="top"
            src={
              "https://m.media-amazon.com/images/I/611L0RDM9xL._AC_UL480_FMwebp_QL65_.jpg"
            }
            className="category-cardimg"
          />
          <h6>Fashion</h6>
        </Card>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
