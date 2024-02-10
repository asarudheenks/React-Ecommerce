import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Mycontext } from "../Context/Context";

function Login() {
  const {
    User,
    setUser,
    setisLoggedin,
    Admin_Email,
    Admin_Password,
    LoggedUser,
    setLoggedUser,
  } = useContext(Mycontext);
  const Navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = () => {
    if (Email === Admin_Email && Password === Admin_Password) {
      alert("Successfully Logged in as Admin");
      Navigate("/Admin");
    } else {
      const LoggedUserdetails = {
        Email: "",
        Password: "",
      };
      setLoggedUser([...LoggedUser,LoggedUserdetails])
      const foundUser = User.find(
        (user) => user.Email === Email && user.Password === Password
      );

      if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));

        setUser([foundUser]);

        setisLoggedin(true);

        alert(`Successfully Logged in as ${foundUser.Username}`);
        Navigate("/");
      } else {
        alert("User not Found");
      }
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  console.log(User);

  return (
    <div className="Log-main">
      <div className="content">
        <div className="text">Login</div>
        <form>
          <div className="field">
            <MdEmail className="icon" />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="field">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-icon" onClick={handleTogglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <br />
          <div className="forgot-pass">
            <Link>Forgot Password?</Link>
          </div>
          <Button className="login-btn" onClick={handleLogin}>
            Log in
          </Button>
          <div className="sign-up">
            Not a member? <Link to={"/Register"}> Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
