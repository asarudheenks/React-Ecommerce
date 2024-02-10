import "./App.css"
import { useState } from "react";
import { product } from "./Components/Context/Allproducts";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Components/Webpages/Home";
import { Mycontext } from "./Components/Context/Context";
import Mobiles from "./Components/Categories/Mobiles";
import Laptops from "./Components/Categories/Laptops";
import Shoes from './Components/Categories/Shoes';
import Cameras from './Components/Categories/Cameras';
import Fashion from './Components/Categories/Fashion';
import Specifications from "./Components/Webpages/Specifications";
import Wishlist from "./Components/Webpages/Wishlist";
import Cart from "./Components/Webpages/Cart"
import Login from "./Components/Registeration/Login";
import Register from "./Components/Registeration/Register";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Webpages/Checkout";
import Orders from "./Components/Webpages/Orders";
import ProductList from "./Components/Admin/ProductList";
import Profile from "./Components/Webpages/Profile";
import Searchitem from "./Components/Webpages/Searchitem";
import Adidas from "./Components/Brandes/Adidas";
import Apple from "./Components/Brandes/Apple";
import Asus from "./Components/Brandes/Asus";
import Hp from "./Components/Brandes/Hp";
import Lenovo from './Components/Brandes/Lenovo';
import Nike from "./Components/Brandes/Nike";
import Oppo from "./Components/Brandes/Oppo";
import Puma from './Components/Brandes/Puma';
import Realme from "./Components/Brandes/Realme";
import Redmi from "./Components/Brandes/Redmi";
import Samsung from "./Components/Brandes/Samsung";
import Totalusers from "./Components/Admin/Totalusers";





function App() {

  const [Products, setProducts] =useState(product)
  const [productDetails, setproductDetails] = useState([])
  const [Liked, setLiked] = useState([])
  const [Cartitem, setCartitem] = useState([])
  const [LoggedUser, setLoggedUser] = useState([])
  const [checkOut,setcheckOut] = useState([])
  const [Admin_Email, setAdmin_Email] = useState('Admin')
  const [Admin_Password, setAdmin_Password] = useState('Admin123');
  const [Address, setAddress] = useState("")
  const [User, setUser] = useState([])
  const [isLoggedin, setisLoggedin] = useState(false)
  const [Order, setOrder] = useState([])
  const {Addproduct, setAddproduct} = useState([])
 


  const updateQuantity = (updatedCart) => {
    setcheckOut(updatedCart);
  };

  const Values ={
    Products, setProducts,
    productDetails, setproductDetails,
    Liked, setLiked,
    Cartitem, setCartitem,
    LoggedUser, setLoggedUser,
    Admin_Email, setAdmin_Email,
    Admin_Password, setAdmin_Password,
    checkOut,setcheckOut,
    updateQuantity,
    Address, setAddress,
    User, setUser,
    isLoggedin, setisLoggedin,
    Order, setOrder,
    Addproduct, setAddproduct
  }
  
  
  return (
    <div className="App">
    <BrowserRouter>
    <Mycontext.Provider value={Values}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Mobiles" element={<Mobiles/>}/>
      <Route path="/Laptops" element={<Laptops/>}/>
      <Route path="/Shoes" element={<Shoes/>}/>
      <Route path="/Cameras" element={<Cameras/>}/>
      <Route path="/Fashion" element={<Fashion/>}/>
      <Route path="/Specifications" element={<Specifications/>}/>
      <Route path="/Wishlist" element={<Wishlist/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/Orders" element={<Orders/>}/>
      <Route path="/Allproducts" element={<ProductList/>}/>
      <Route path="Profile" element={<Profile/>}/>
      <Route path="/Searchitem" element={<Searchitem/>}/>
      <Route path="/Adidas" element={<Adidas/>}/>
      <Route path="/Apple" element={<Apple/>}/>
      <Route path="/Asus" element={<Asus/>}/>
      <Route path="/Hp" element={<Hp/>}/>
      <Route path="'/Lenovo" element={<Lenovo/>}/>
      <Route path="/Nike" element={<Nike/>}/>
      <Route path="/Oppo" element={<Oppo/>}/>
      <Route path="/Puma" element={<Puma/>}/>
      <Route path="/Realme" element={<Realme/>}/>
      <Route path="/Redmi" element={<Redmi/>}/>
      <Route path="/Samsung" element={<Samsung/>}/>
      <Route path="/Users" element={<Totalusers/>}/>
    </Routes>
    </Mycontext.Provider>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
