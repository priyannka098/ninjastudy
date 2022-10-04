import React from "react";
import "./Content.css";
function Content()
{

 return(
   <>

   {/* First Box */}
    <div className="container-fluid bg-color-first content-scope text-light p-5 firstflexbox">
      <div className=" secondflexbox">
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}>Learn English</span>
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}> Speaking The </span>
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}> Fastest Way</span>
        <span className="text-left top-space-50 text-font">Practice English with ARYA -The Smartest A.I English Tutor</span>
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
        <img src={require("../../Images/home.gif")} class="img-fluid mobile-img" alt="Responsive image"></img>
        </div>
        </div>
        

{/* Second-Box */}
        
        <div className=" container-fluid bg-color-sec content-scope p-5 firstflexbox ">
        
        <img src={require("../../Images/arya.gif")} class="img-fluid mobile-img" alt="Responsive image"></img>
        <div className="d-flex flex-column">
        <span className="display-4 text-dark " style={{fontWeight:"400"}}>Just Start Speaking to  </span>
        <span className="display-4 text-dark"style={{fontWeight:"400"}}>enhance your fluency</span>
        <span className="text-left text-muted" style={{marginTop:"30"}}></span>
        <span className="text-left text-muted top-space-50">Fast deployment with our expert support.Boost your revenue.Reduce support</span>
       <span className="text-left text-muted "> operations by over 30%.fast deployment with our expert support.</span>
       <div className="d-flex flex-row">
       <div>
         <ul className=" text muted top-space-50" >
            <li >Direct Feedback</li>
            <li> 24/7 Availability</li>
            </ul>
         </div>
         <div>
            <ul className=" text muted top-space-50">
            <li>Varied topics of interest</li>
            <li>Instant replies</li>
         </ul>
       </div>
       </div>
        </div>
        </div>

{/* Third-box */}

        <div className="container-fluid content-scope bg-color-third p-5 firstflexbox">
        <div className=" secondflexbox">
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}>Get help from your</span>
        <span className="display-4  font-weight-bold" style={{fontWeight:"500"}}>native language </span>
      
        <span className="text-left top-space-50 text-font">Fast deployment with our expert support.Boost your revenue.Reduce support </span>
        <span className="text-left text-font">operations by over 30%.fast deployment with our expert support.</span>
      
        <div>
        <ul className="text muted top-space-50" >
            <li >Dynamic learning</li>
            <li>One Click Translation </li>
          </ul>
            </div>
            <div>
            <ul className="text muted top-space-50" > 
            <li>Word Meaning </li>
            <li>Native Language Support</li>
            </ul>
          </div>
      </div>
        <img src={require("../../Images/score.gif")} class="img-fluid mobile-img" alt="Responsive image"></img>
        </div>
        
{/* Forth-box */}

        <div className="container-fluid  content-scope bg-color-sec p-5 firstflexbox ">
        <img src={require("../../Images/translate.gif")} class="img-fluid mobile-img" alt="Responsive image"></img>
        <div className="d-flex flex-column">
        <span className="display-4 text-dark" style={{fontWeight:"400"}}>Get Translations In</span>
        <span className="display-4 text-dark" style={{fontWeight:"400"}}>Native Languages</span>
        <span className="text-left text-muted" style={{marginTop:"30"}}></span>
        <span className="text-left text-muted top-space-50">Fast deployment with our expert support.Boost your revenue.Reduce support</span>
       <span className="text-left text-muted "> operations by over 30%.fast deployment with our expert support.</span>
       <div>
         <ul className="text muted top-space-50" >
            <li >Redeemable coins</li>
            <li>Encouraging consistency </li>
            </ul>
            </div>
            <div>
            <ul className="text muted top-space-50" >
            <li>Surprising goodies</li>
            <li>Progressive learning</li>
            </ul>
            </div>
        
       </div>
        </div>
      
      
  

</>
  
 );
}


export default Content; 