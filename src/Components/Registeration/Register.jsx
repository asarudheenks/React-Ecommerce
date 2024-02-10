import "./Register.css";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash, FaRegUserCircle } from "react-icons/fa";
import { Mycontext } from "../Context/Context";

function Register() {
  const { User, setUser } = useContext(Mycontext);

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !Username.trim() ||
      !Email.trim() ||
      !Password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill in all the required fields");
    } else if (Password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const userDetails = {
        Username,
        Email,
        Password,
        confirmPassword,
      };
      localStorage.setItem("user", JSON.stringify([...User, userDetails]));
      setUser([...User, userDetails]);
      Navigate("/Login");
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Reg-main">
      <div className="content">
        <div className="text">Register</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <FaRegUserCircle className="icon" />
            <input
              type="email"
              placeholder="Enter Your Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <div className="field">
            <FaLock className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              required
            />
            <span className="toggle-icon" onClick={handleTogglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <br />

          <Button className="login-btn" onClick={handleSubmit}>
            Register Now
          </Button>
          <div className="sign-up">
            Already have an account? <Link to={"/Login"}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
