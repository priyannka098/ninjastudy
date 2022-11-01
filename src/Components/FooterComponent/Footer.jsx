import React from "react";
import {render} from "react-dom";
import "./Footer.css";


function Features()
{

 return(
    <>
    <footer>
      <div  className="container-fluid bg-color-forth outfit-font">

        <div className="footer-big">
        <div className="innerbox">
        <div className="inner-left-box">
         <div className="img-box">
      
             <img src={require("../../Images/logo.png")} class="img-logo"  alt="Responsive image"></img> 
          
            {/* <span style={{fontSize:"10px"}}> Backed By</span> */}
            {/* <img src={require("../../Images/Y-combinator.png")} class="img-y-logo"  alt="Responsive image"></img> */}
            
       </div>
      <div className="footer-box1">  
            <p className="f-para">NinjaStudy ia a personal AI English tutor App,focused on improving your speaking skills.You can think of it as Siri/Alexa for English learners.</p>
      </div>
      <div className="image-icon-box ">
      -
      <div className ="circle">
      <img src={require("../../Images/lin.png")} class="img-fluid img-icon " alt="Responsive image"></img>
      </div>
      <div className ="circle">
      <img src={require("../../Images/twit.png")} class="img-fluid img-icon " alt="Responsive image"></img>
      
      </div>
      <div className ="circle">
      <img src={require("../../Images/insta.png")} class="img-fluid img-icon" alt="Responsive image"></img>
      
      </div>
      <div className ="circle">
       <img src={require("../../Images/youtube.png")} class="img-fluid img-icon" alt="Responsive image"></img>  
      
      </div>
      </div>
    </div>
      <div className="inner-right-box d-flex flex-row">
      <div className="footer-box2 d-flex flex-column outfit-font">
        <div className="sub-heading">
         <p><b> Privacy and terms</b></p>
         </div>
    
          <p> Community Guideliness</p>
          <p>Terms</p>
           <p>Privacy</p>
      </div>
      <div className="footer-box3 d-flex flex-column outfit-font">
          <p><b>Help and Support</b></p>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Blog</p>
      </div>
      <div className="footer-box4 d-flex flex-column outfit-font">
        <p><b>About Us</b></p>
        <p>Mission</p>
        <p>Carrers</p>
        <p>Press</p>
        <p>Investors</p>
      </div>
      </div>
      </div>
  
      <hr style={{ opacity:"1"}}></hr>

      <div className="bottom-box d-flex flex-row">
        <div className="text-style">
      <p  style={{marginRight:"4rem"}}>Term & Condition</p>
      <p >Privacy & Policy</p>
      </div>
      <div style={{width:"30% ",display:"flex",justifyContent:"end"}}>
      <p>	&copy; 2022 All right reserved.</p>
      </div>
      </div>
    </div>

    {/*  Footer clone*/}

<div className="footer-small">
       <div className="innerbox">
        <div className="inner-left-box">
        <div className="img-box">
      
            <img src={require("../../Images/logo.png")} class="img-logo"  alt="Responsive image"></img>
            {/* <span>ninjastudy</span> */}
            <div>
            {/* <span style={{fontSize:"10px"}}> Backed By</span> */}
            {/* <img src={require("../../Images/Y-combinator.png")} class="img-y-logo"  alt="Responsive image"></img> */}
            </div>
      </div>
      <div className="footer-box1">  
            <p className="f-para">NinjaStudy ia a personal AI English tutor App,focused on improving your speaking skills.You can think of it as Siri/Alexa for English learners.</p>
      </div>
      {/* <div className="image-icon-box ">
      <img src={require("../../Images/linkedin.png")} class="img-fluid img-icon " alt="Responsive image"></img>
      <img src={require("../../Images/twitter.png")} class="img-fluid img-icon " alt="Responsive image"></img>
      <img src={require("../../Images/instagram.png")} class="img-fluid img-icon" alt="Responsive image"></img>
      <img src={require("../../Images/youtube.png")} class="img-fluid img-icon" alt="Responsive image"></img>
      </div> */}
    </div>
      <div className="inner-right-box d-flex flex-row">
        <div>
      <div className="footer-box2 d-flex flex-column">
         <p><b> Privacy and terms</b></p>
          <p> Community Guideliness</p>
          <p>Terms</p>
           <p>Privacy</p>
      </div>
      <div className="footer-box3 d-flex flex-column">
          <p><b>Help and Support</b></p>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Blog</p>
      </div>
      </div>
      <div>
      <div className="footer-box4 d-flex flex-column">
        <p><b>About Us</b></p>
        <p>Mission</p>
        <p>Carrers</p>
        <p>Press</p>
        <p>Investors</p>
        </div>
      </div>
      </div>
      </div>

      <div className="image-icon-box ">
      <img src={require("../../Images/lin.png")} class="img-fluid img-icon " alt="Responsive image"></img>
      <img src={require("../../Images/twit.png")} class="img-fluid img-icon " alt="Responsive image"></img>
      <img src={require("../../Images/insta.png")} class="img-fluid img-icon" alt="Responsive image"></img>
      {/* <img src={require("../../Images/youtube.png")} class="img-fluid img-icon" alt="Responsive image"></img> */}
      </div>
  
      <hr style={{width:"100% ", opacity:"1"}}></hr>

      <div className="bottom-box d-flex flex-row">
        <div className="text-style">
       <p>Term & Condition</p> 
      <p style={{marginLeft:"1rem"}} >Privacy & Policy</p>
      </div>
      <div  className="right-reserved-styling">
      <p>	&copy; 2022 All right reserved.</p>
      </div>
      </div>
      </div>
      </div>


      </footer>

      </>
      
      

 );

}
export default Features;