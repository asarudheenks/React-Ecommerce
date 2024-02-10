import { Mycontext } from "../Context/Context";

import Categories from "../Header/Categories";
import "./Home.css";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import Slidecarousel from "../Header/Slidecarousel";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  const { Products, productDetails, setproductDetails, } = useContext(Mycontext);

  const AppleMobiles = Products.filter(
    (mobile) => mobile.Category === "APPLE Mobiles"
  );

  const AsusLaptops = Products.filter(
    (laptop) => laptop.Category === "ASUS Laptops"
  );

  const Details = (products) => {
    if (productDetails.includes(products)) {
      setproductDetails(productDetails.filter((item) => item !== products));
    } else {
      setproductDetails([products]);
    }
  };
  
  return (
    <div >
      <Header/>
      <Categories />
      <Slidecarousel />
      <h3 className="title">The latest. Take a look at what's new right now.</h3>
      <div className="Home-container">
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
      <img
        src={
          "https://m.media-amazon.com/images/G/31/img23/BAU-Dec/Laptops_Brand-Banners/Dell_Vostro14_3420_ELP_1500X300._CB570494119_.jpg"
        }
        alt=""
      />
 <h3 className="title">Designed with colors to match your vibe, .</h3>
      <div className="Home-container">
        {AsusLaptops.map((Laptop) => (
          <div className="Home" key={Laptop.Id}>
            <Link to={"/Specifications"} onClick={() => Details(Laptop)} style={{textDecoration:"none"}}>
              <Card style={{ width: "12rem" }} className="Home-Lapcard">
                <Card.Img
                  variant="top"
                  src={Laptop.Images}
                  className="Home-Lapimg"
                />
                <h6>{Laptop.Name}</h6>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
