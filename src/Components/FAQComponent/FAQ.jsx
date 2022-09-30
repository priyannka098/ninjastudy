import React from "react";
import "./FAQ.css";

function Faq()
{
  return(
    <>
    <div className="container-fluid top-level-container text-dark   ">
      <div className="heading-box1">
    <span className="font-weight-bold font-height" style={{fontWeight:"500"}}>Frequently Asked Questions </
    span>
    </div>
    <div className="img-txt-box">
    <div className="outerbox2 ">
    <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item accor-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed  accor-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is NinjaStudy?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body accor-body">NinjaStudy is a personal AI English tutor Ap focused on improving your speaking skills.You can think of it as Sri/alexa for English learners.</div>
    </div>
  </div>
  <div className="accordion-item accor-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed  accor-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        I am a beginner.Is NinjaStudy right for me?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body accor-body">liuerlvhervurelhv,rwvbj wrhvkjfevh ekyvrewj vewuyvewkuvh ekuvyrevreykuv erkuvyhv eruovyer lvf</div>
    </div>
  </div>
  <div className="accordion-item accor-item">
    <h2 className="accordion-header" id="flush-headingThree" >
      <button className="accordion-button collapsed  accor-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Can I use NinjaStudy for free?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body accor-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
</div>

<div className="faq-image">
        <img src={require("../../Images/FAQ.png")} class="img-fluid " alt="Responsive image"></img>
        </div>
        </div>
</div>

    </>

  );
}
  
export default Faq; 