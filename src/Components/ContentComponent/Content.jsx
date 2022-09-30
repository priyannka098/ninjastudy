import React from "react";
import "./Content.css";
function Content()
{

 return(
   <>

   {/* First Box */}
    <div className="container-fluid bg-color-first text-light p-5 firstflexbox">
      <div className=" secondflexbox">
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}>Your Personal</span>
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}> English AI Tutor </span>
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}> Friend</span>
        <span className="text-left top-space-50 text-font"><strong>Meet ARYA</strong> - Become fluent in English by speaking with her</span>
        <span className="text-left text-font">and getting help with grammar,pronunciation,and fluency.</span>
        <div className="buttons-div">
        <img src={require("../../Images/gplay.png")} class="img-fluid gplay-img" alt="Responsive image"></img>
       
        <button type="button" className="btn btn-primary play-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
</svg>  Play video </button>
        </div>
        </div>
      <div>
        <img src={require("../../Images/mobile.png")} class="img-fluid mobile-img" alt="Responsive image"></img>
        </div>
        </div>
        

{/* Second-BOx */}
        
        <div className=" container-fluid bg-color-sec p-5 firstflexbox ">
        
        <img src={require("../../Images/mobile.png")} class="img-fluid mobile-img" alt="Responsive image"></img>
        <div className="d-flex flex-column">
        <span className="display-4 text-dark " style={{fontWeight:"400"}}>Practice Real LIfe </span>
        <span className="display-4 text-dark"style={{fontWeight:"400"}}>  Conversation</span>
        <span className="text-left text-muted" style={{marginTop:"30"}}></span>
        <span className="text-left text-muted top-space-50">Fast deployment with our expert support.Boost your revenue.Reduce support</span>
       <span className="text-left text-muted "> operations by over 30%.fast deployment with our expert support.</span>
       <div className="d-flex flex-row">
       <div>
         <ul className=" text muted top-space-50" >
            <li > 24/7 Support</li>
            <li> AI chart Asistant</li>
            </ul>
         </div>
         <div>
            <ul className=" text muted top-space-50">
            <li>Unlimited</li>
            <li> Save time and money</li>
         </ul>
       </div>
       </div>
        </div>
        </div>

{/* Third-box */}

        <div className=" container-fluid bg-color-sec p-5 firstflexbox">
        <div className=" secondflexbox">
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}>Correct Your grammar</span>
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}>on the go </span>
      
        <span className="text-left top-space-50 text-font">Fast deployment with our expert support.Boost your revenue.Reduce support </span>
        <span className="text-left text-font">operations by over 30%.fast deployment with our expert support.</span>
        <ul className="text muted top-space-50" >
            <li > 24/7 Support</li>
            <li> Unlimited Support </li>
            <li>AI Chart Assistant </li>
            <li> Save time and money</li>
            </ul>
        </div>
        <img src={require("../../Images/mobile.png")} class="img-fluid mobile-img" alt="Responsive image"></img>
        </div>
{/* Forth-box */}

        <div className=" container-fluid bg-color-sec p-5 firstflexbox ">
        <img src={require("../../Images/mobile.png")} class="img-fluid mobile-img" alt="Responsive image"></img>
        <div className="d-flex flex-column">
        <span className="display-4 text-dark" style={{fontWeight:"400"}}>Get Translations In</span>
        <span className="display-4 text-dark" style={{fontWeight:"400"}}>Native Languages</span>
        <span className="text-left text-muted" style={{marginTop:"30"}}></span>
        <span className="text-left text-muted top-space-50">Fast deployment with our expert support.Boost your revenue.Reduce support</span>
       <span className="text-left text-muted "> operations by over 30%.fast deployment with our expert support.</span>
       <div>
         <ul className="text muted top-space-50" >
            <li > 24/7 Support</li>
            <li> Unlimited Support </li>
            <li>AI Chart Assistant </li>
            <li> Save time and money</li>
         </ul>
       </div>
        </div>
        </div>
 

     
        
      

</>




    
 );
}


export default Content; 