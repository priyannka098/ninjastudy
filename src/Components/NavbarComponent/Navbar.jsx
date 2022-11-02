import React from "react";
import "./Navbar.css";
function Navbar()
{

 return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <div className="navbar-logo-box">
   <img src={require("../../Images/ninja-logo.png")} className="img-fluid navbar-logo-img" alt="Responsive image"></img>
   <img src={require("../../Images/navbar-text2.png")} className="img-fluid navbar-text" alt="Responsive image"></img> 
   
    {/* < span className="navbar-brand"><b style={{color:"purple"}}>ninjastudy</b></span > */}
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse remove-flex-grow navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link nav-item-colour " aria-current="page" href="#faq">FAQ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-item-colour" href="#features">Features</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link nav-item-colour" href="#contact" aria-disabled="true">Contact</a>
        </li>
      </ul>
      <div className="navbar-button">
      <button type="button" className="btn btn-warning button-styling "> GET STARTED</button>
      </div>
    </div>
    
  </div>
</nav>
 
 );

}
export default Navbar;