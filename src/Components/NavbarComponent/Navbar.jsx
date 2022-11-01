import React from "react";
import "./Navbar.css";
function Navbar()
{

 return(

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <div className="navbar-logo-box">
   <img src={require("../../Images/ninja-logo.png")} class="img-fluid navbar-logo-img" alt="Responsive image"></img>
   <img src={require("../../Images/navbar-text2.png")} class="img-fluid navbar-text" alt="Responsive image"></img> 
   
    {/* < span className="navbar-brand"><b style={{color:"purple"}}>ninjastudy</b></span > */}
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse remove-flex-grow navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#faq">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#features">Features</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#contact" aria-disabled="true">Contact</a>
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