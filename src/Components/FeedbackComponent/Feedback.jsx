import React, { useEffect, useState } from "react"
import feedback from "./FeedbackData.json";
import "./Feedback.css"

function Feedback()
{
 const[carouselItems,setCarouselItems]=useState([]);

useEffect(()=>{
const numPages=Math.ceil(feedback.reviews.length/3);
console.log("useeffect running: "+feedback.reviews.name);
let items=[];
  for(let i=0;i<numPages;i++){
    let cards=[];
    for(let j=0;j<3 && (3*i+j)<feedback.reviews.length;j++){
      cards.push(
      <div class="card card-style" key={feedback.reviews[(3*i)+j].id}>
      <div class="card-body card-align">
        <div className="feedback-top">
      <img src={feedback.reviews[(3*i)+j].image} class="img-fluid fed-img" alt="Responsive image"></img>
      
      <div className="star-rating">
      {[...Array(5)].map((_, index) => {

           return (
          <button
            type="button"
            key={index}
            className={index< feedback.reviews[(3*i)+j].Rating ? "on" : "off"}
          >
            {<span className="star st-btn">&#9733;</span> }
          </button>
        );
      })}
    </div>
        <p className="card-text">{feedback.reviews[(3*i)+j].Description}</p>
        </div>
        <div className="feedback-bottom">
        <h5 class="card-title">{feedback.reviews[(3*i)+j].Name}</h5>
        {/* <p class="card-text">{"Rating: "+feedback.reviews[(3*i)+j].Rating}</p> */}
        <p  className="">{feedback.reviews[(3*i)+j].Profession}</p>
        </div>
      </div>
    </div>
    )
    }
      items.push(
      <div className={"carousel-item"+ (i==0?" active ":" ")+""} style={{backgroundColor: "rgb(210, 217, 226)"}} key={"item-"+i}>
        <div style={{width:"100%",display:"flex", justifyContent:"center"}}>
          {cards}
        </div>
        
      </div>
    )
      }
    setCarouselItems(items);
      
},[]);


return(
<>
<div className="container-fluid bg-color-feedback text-dark   ">
        <div className="heading-box2">
        <span className=" display-4 font-weight-bold " style={{fontWeight:"500"}}>What Our Students Say About Us </span>
</div>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {carouselItems}
  </div>
  <div className="car-btn carousel-control-prev">
  <button className=" button-style" type="button" style={{background:"blue"}} data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  </div>
  <div  className="car-btn carousel-control-next">
  <button className=" button-style" style={{background:"blue"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
</div>
</div>
</>
)
}
export default Feedback;


