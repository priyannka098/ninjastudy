import React from "react";
import "./Download.css";
function Download()
{

 return(
   <>
   <div  className="download-styling download-small">
    <h1 className="download-heading">Learn more than just </h1>
    <h1 className="download-heading" style= {{marginTop:"0"}}> English</h1>
    <span style={{marginTop:"1.5rem",fontWeight:"500"}} > Over 1000 students join us monthly</span>
    <img src={require("../../Images/download-img.png")} className="download-img" alt="Responsive image"></img>
    
    <button className="download-btn"> Download App Now</button>

   </div>
   </>
 )
}
export default Download;