import React from "react";
import "./Navbar.css";
function Navbar()
{

 return(
<nav id="navbar" className="navbar navbar-expand-lg bg-light navbar-bg" >
  <div className="container-fluid">
    <div className="navbar-logo-box">
  <img src={require("../../Images/logo.png")} class="img-fluid navbar-logo-img" alt="Responsive image"></img>
    < span className="navbar-brand"><b style={{color:"purple"}}>ninjastudy</b></span >
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse remove-flex-grow">
      <div className="navbar-property-box">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link" href="#faq">FAQ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      </div>
        </div>
      <div className="navbar-button">
      <button type="button" className="btn btn-warning button-styling "> GET STARTED</button>
      </div>
      
    
    </div>

</nav>
 );

}
export default Navbar;