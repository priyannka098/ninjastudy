import React from "react";
import "./FAQ.css";

function Faq()
{
  return(
    <>
    <div id="faq" className="container-fluid top-level-container text-dark">
    <div className="faq-outlier">
    <div className="heading-box1">
    <span className="title-styling display-4">Frequently Asked Questions </span>

    </div>
    <div className="d-flex" style={{justifyContent:"space-between"}}>
      <div className="faq-outerbox1">
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
      <div className="accordion-body accor-body">Placeholder content for this accordion, which is intended to demonstrate the</div>
    </div>
  </div>
</div>
</div>
</div>

<div className="faq-image">
        <img src={require("../../Images/faq-image.png")} class="img-fluid " alt="Responsive image"></img>
</div>
        </div>
</div>
</div>

    </>

  );
}
  
export default Faq; 