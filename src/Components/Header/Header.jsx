import React, { useContext, useState,} from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { FaCircleUser } from "react-icons/fa6";
import { IoFingerPrint } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { FaBoxOpen } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { Mycontext } from "../Context/Context";
import { TbLogout } from "react-icons/tb";

function Header() {
  const {  isLoggedin, setisLoggedin, Products, Cartitem, setCartitem , LoggedUser,setLoggedUser,} = useContext(Mycontext);


  // const userFound = LoggedUser.find((user) =>user.Email && user.Password);
  const Navigate = useNavigate();
  const cartcount = Cartitem.length

  const handleLogout = () => {
    setisLoggedin(false);
    setLoggedUser([])
    setCartitem([]) 
    Navigate("/");
  };
  

  const [searchInput, setsearchInput] = useState('')
  console.log(setsearchInput);
const handleSearch =()=>{
  if(searchInput.toLowerCase().includes("adi")){
    Navigate('/Adidas')
  }
  else if(searchInput.toLowerCase().includes("as")){
    Navigate( '/Asus')
  }
  else if(searchInput.toLowerCase().includes("ap")){
    Navigate( '/Apple')
  }
  else if(searchInput.toLowerCase().includes("hp")){
    Navigate( '/Hp')
  }
  else if(searchInput.toLowerCase().includes("len")){
    Navigate( '/Lenovo')
  }
  else if(searchInput.toLowerCase().includes("ni")){
    Navigate( '/Nike')
  }
  else if(searchInput.toLowerCase().includes("op")){
    Navigate( '/Oppo')
  }
  else if(searchInput.toLowerCase().includes("pu")){
    Navigate( '/Puma')
  }
  else if(searchInput.toLowerCase().includes("real")){
    Navigate( '/Realme')
  }
  else if(searchInput.toLowerCase().includes("red")){
    Navigate( '/Redmi')
  }
  else if(searchInput.toLowerCase().includes("sam")){
    Navigate( '/Samsung')
  }
  else if(searchInput.toLowerCase().includes("cam")){
    Navigate( '/Camera')
  }
  else if(searchInput.toLowerCase().includes("tsh")){
    Navigate( '/Fashion')
  }
  else if(searchInput.toLowerCase().includes("lap")){
    Navigate( '/Laptops')
  }
  else if(searchInput.toLowerCase().includes("mo")){
    Navigate( '/Mobiles')
  }
  else if(searchInput.toLowerCase().includes("sh")){
    Navigate( '/Shoes')
  }
  else {
    const foundProduct = Products.find(product =>
      product.Name.toLowerCase() === searchInput.toLowerCase()
    );

    if (foundProduct) {
      const productId = foundProduct.Name;
      Navigate(`/product/${productId}`);
    } else {
      alert('Product not found');
    }
  }
}

  return (
    <div>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ backgroundColor: "aquamarine", minHeight: "75px" }}
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand>
              <h2 className="Logo">Your Choice</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end w-75"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3"></Nav>
                <input
                  type="search"
                  value={searchInput}
                  className="me-2"
                  placeholder="Search"
                  onChange={(e)=> setsearchInput(e.target.value)}
                />
                
                <Button variant="outline-success" className="me-5" onClick={handleSearch}>
                  Search
                </Button>
                <Dropdown className="me-5">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {isLoggedin ? (
                      <>
                        <FaCircleUser /> {LoggedUser[0]?.Email} 
                      </>
                    ) : (
                      <>
                        <FaCircleUser /> Login
                      </>
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      {isLoggedin ? (
                        <Button variant="outline-info" className="w-100" onClick={handleLogout}>
                          <span>
                            <TbLogout /> Logout
                          </span>
                        </Button>
                      ) : (
                        <Button variant="outline-info" className="w-100">
                          <Link to={"/Login"} style={{ textDecoration: "none", color: "black" }}>
                            <span>
                              <IoFingerPrint /> Login
                            </span>
                          </Link>
                        </Button>
                      )}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Button variant="outline-info" className="w-100">
                        <Link to={'/Profile'} style={{ textDecoration: "none", color: "black" }}>
                          <FaCircleUser /> Profile
                        </Link>
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Button variant="outline-info" className="w-100">
                        <Link to={"/Wishlist"} style={{ textDecoration: "none", color: "black" }}>
                          {" "}
                          <GoHeart /> Wishlist
                        </Link>
                      </Button>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Button variant="outline-info" className="w-100">
                        <Link to={'/Orders'} style={{ textDecoration: "none", color: "black" }}>
                          {" "}
                          <FaBoxOpen /> Orders
                        </Link>
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link to={"/Cart"} style={{ textDecoration: "none", color: "black" }}>
                  <Button
                    className="position-relative  me-3"
                    style={{ height: "40px" }}
                    variant="warning"
                  >
                    {cartcount > 0 && (
                      <Badge
                        pill
                        bg="danger"
                        className="position-relative end translate-middle badge"
                      >
                        {cartcount}
                      </Badge>
                    )}{" "}
                    <GrCart /> Cart{" "}
                  </Button>
                </Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
