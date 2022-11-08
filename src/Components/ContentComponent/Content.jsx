import React from "react";
import "./Content.css";
function Content()
{

 return(
   <>

   {/* First Box */}
    <div className="container-fluid bg-color-first content-scope-firstbox text-light p-5 firstflexbox">
      <div className=" home-style">
        <span className="display-4  font-weight-bold content-context smallspace" style={{marginBottom:"0rem"}}>Learn English</span>
        <span className="display-4  font-weight-bold content-context"> Speaking </span>
        <span className="display-4  font-weight-bold content-context" style={{marginBottom:"0rem"}}>The Fastest Way</span>
        <span className="text-left top-space-50 text-font arya-big">Practice English with ARYA -The Smartest A.I. English Tutor</span>
        <div className="small-para">
        <span className="text-left top-space-50 text-font arya-small">ARYA -The Smartest A.I. English Tutor</span>
        </div>
        <br></br>
        {/* <div className="promotion d-flex flex-column"> */}
        {/* <div style={{display:"flex"}}>
        <span style={{textDecorationLine:"line-through",fontSize:"1.2rem"}} >&#8377; 200/Month </span><span style={{marginLeft:"0.5rem"}}><strong style={{fontSize:"1.2rem",fontWeight:"500"}}> Free*</strong></span>
        </div>  */}
        {/* <span className="banner">*Limited Time Offer for Early Users Only</span>
        </div> */}
        <div className="buttons-div">

        <img src={require("../../Images/gplay.png")} class="img-fluid gplay-img " alt="Responsive image"></img>
                <button type="button" className="btn btn-primary play-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
</svg>Play video </button>
        </div>
        <img src={require("../../Images/home.gif")} class="img-fluid mobile-img-small " alt="Responsive image"></img>

        </div>
      <div>
        <img src={require("../../Images/home.gif")} class="img-fluid mobile-img" alt="Responsive image"></img>
        </div>
        </div>
        

{/* Second-Box */}
        
        <div id="features" className=" container-fluid bg-color-sec content-scope p-5 firstflexbox ">
        
        <img src={require("../../Images/arya.gif")} class="img-fluid mobile-img" alt="Responsive image"></img>
        <div className="d-flex flex-column content-text secondflexbox">
          <div className="d-flex flex-column heading-small">
        <h1 className="display-4 text-dark content-fontsize heading-small" style={{marginBottom:"0rem"}}>Just Start Speaking</h1>
        <h2 className="display-4 text-dark content-fontsize"> to enhance your fluency</h2>
        <span className="text-left text-muted" style={{marginTop:"30"}}></span>
        </div>
        
       <div className=" bullets-div">
       <div>
         <ul className="text muted top-space-50" >
            <li className="bullet">Direct Feedback</li>
            <li className="bullet"> 24/7 Availability</li>
            </ul>
         </div>
         <div style={{marginLeft:"1rem"}}>
            <ul className=" text muted top-space-50">
            <li className="bullet">Varied topics of interest</li>
            <li className="bullet">Instant replies</li>
         </ul>
       </div>
       </div>
       <div className=" bullets-div-small">
       
         <ul className="text muted top-space-50 show-in-big-hide-in-small" >
            <li className="bullet">Direct Feedback</li>
            <li className="bullet"> 24/7 Availability</li>
            <li className="bullet">Varied topics of interest</li>
            <li className="bullet">Instant replies</li>
         </ul>
         
         {/* for small bullent points */}

          {/* <div className="bullet-text-small"> */}
         <ul className="text muted  hide-in-big-show-in-small" >
            <li className="bullet">Direct Feedback</li>
            <li className="bullet">Varied topics of interest</li>
            </ul>
       
       </div>
       <img src={require("../../Images/arya.gif")} class="img-fluid mobile-img-small   " alt="Responsive image"></img>
        </div>
        </div>

{/* Third-box */}

        <div className="container-fluid content-scope bg-color-third p-5 firstflexbox">
        <div className=" secondflexbox heading-small">
        <span className="display-4  font-weight-bold content-fontsize" >Get help from your</span>
        <span className="display-4  font-weight-bold content-fontsize">native language </span>
      
      <div className="bullets-div ">
        <div>
        <ul className="text muted top-space-50 show-in-big-hide-in-small" >
            <li className="bullet">Dynamic learning</li>
            <li className="bullet"> Word Meaning </li>
          </ul>
            </div>
            <div style={{marginLeft:"1rem"}}>
            <ul className="text muted top-space-50" > 
            <li className="bullet">One Click Translation</li>
            <li className="bullet">Native Language Support</li>
            </ul>
          </div>
          <div>
          <ul className="text muted top-space-50 hide-in-big-show-in-small" > 
          <li className="bullet">One Click Translation</li>
          <li className="bullet"> Word Meaning </li>
          </ul>
          </div>
          </div>

          {/* for small bullent points */}

          <div className="bullets-div-small ">
        <ul className="text muted top-space-50" >
            <li className="bullet">One Click Translation</li>
            <li className="bullet"> Word Meaning </li>
            </ul>
          </div>
          <img src={require("../../Images/score.gif")} class="img-fluid mobile-img-small" alt="Responsive image"></img>

      </div>
        <img src={require("../../Images/score.gif")} class="img-fluid mobile-img" alt="Responsive image"></img>
        </div>
        
{/* Forth-box */}

        <div className="container-fluid  content-scope bg-color-sec p-5 firstflexbox ">
        <img src={require("../../Images/translate.gif")} class="img-fluid mobile-img" alt="Responsive image"></img>
        <div className="secondflexbox content-text ">
        <span className="display-4 text-dark content-fontsize heading-small">Turn your progress</span>
        <span className="display-4 text-dark content-fontsize">into rewards</span>
        <span className="text-left text-muted" style={{marginTop:"30"}}></span>
        
       <div className="bullets-div">
        <div>
          <ul className="text muted top-space-50 color" >
            <li className="bullet">Redeemable coins</li>
            <li className="bullet">Surprising goodies</li>
          
            </ul>
        </div>
          <div style={{marginLeft:"1rem"}}>
            <ul className="text muted top-space-50" >
              <li className="bullet">Encouraging consistency</li>
              <li className="bullet">Progressive learning</li>
            </ul>
          </div>
            </div>

            <div className=" bullets-div-small">
            <ul className="text muted top-space-50 show-in-big-hide-in-small" >
                <li className="bullet">Redeemable coins</li>
                <li className="bullet">Surprising goodies</li>
                <li className="bullet">Encouraging consistency</li>
               <li className="bullet">Progressive learning</li>
            </ul>
          </div>

          {/* for small bullet text */}
          <div className=" bullets-div-small hide-in-big-show-in-small ">
            <ul className="text muted top-space-50" >
                <li className="bullet">Surprising goodies</li>
               <li className="bullet">Progressive learning</li>
            </ul>
          </div>

          <img src={require("../../Images/translate.gif")} class="img-fluid mobile-img-small" alt="Responsive image"></img>
            



        
       </div>
        </div>
      
      
  

</>
  
 );
}


export default Content; 