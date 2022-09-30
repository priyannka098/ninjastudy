import React from "react";
import "./Navbar.css";
function Navbar()
{

 return(
<nav id="navbar" className="navbar navbar-expand-lg bg-light navbar-bg" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ninjastudy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse remove-flex-grow">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">FAQ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <button type="button" class="btn btn-warning">GET STARTED</button>
    </div>
  </div>
</nav>
 );

}
export default Navbar;