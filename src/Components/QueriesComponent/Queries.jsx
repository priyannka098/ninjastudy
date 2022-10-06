import React from "react";
import "./Queries.css";


function Queries(){

return(
    <>
    <div id="contact" className="container-fluid bg-color-fifth text-dark d-flex" style={{justifyContent:"center"}}>
        <div className="d-flex flex-column" style={{width:"80%"}}>
        <div className="heading-box2">
        <span className=" display-4 font-weight-bold" style={{fontWeight:"500"}}>Any Queries? </span>
        <span className=" display-4 font-weight-bold" style={{fontWeight:"500"}}> Ask us </span>
        </div>
        <div className="d-flex flex-row"style={{justifyContent:"space-between"}}>
        
        <div className="form-big">
            <form>
                <div className="askbox1">
                    <div className="d-flex flex-column" style={{marginRight:"2rem", width:"40%"}}>
                        <label for="name" className="">Enter your name:</label>
                        <input type="text"  className="input-box" id="name" placeholder="enter your name"></input>
                    </div>
                    <div className="d-flex flex-column" style={{ width:"40%"}} >
                        <label for="email">Enter your email:</label>
                        <input type="text" className="input-box" id="email"  placeholder=" Enter your email"></input>
                    </div>
                </div>
            <div className="askbox2"> 
                <div className="textarea-div">
                <label for="textarea">Enter the message:</label>
                <textarea id="w3review" className="textarea1" name="textarea" rows="3">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea> 
                </div>
                <div className="submit">
                    <button type="submit" className="btn btn-dark submit-btn">Submit</button>
                </div>
            </div>
            </form>
        </div>

        <div className="form-small">
            
                    <div className="d-flex flex-column"> 
                        <label for="name" className="">Enter your name:</label>
                        <input type="text"  className="input-box" id="name" placeholder="enter your name"></input>
                    </div> 
                    <div className="d-flex flex-column" >
                        <label for="email">Enter your email:</label>
                        <input type="text" className="input-box" id="email"  placeholder=" Enter your email"></input>
                    </div>
                <div className="textarea-div">
                <label for="textarea">Enter the message:</label>
                <textarea id="w3review" className="textarea1" name="textarea" rows="3">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea> 
                </div>
                <div className="submit">
                    <button type="submit" className="btn btn-dark submit-btn">Submit</button>
                </div>

 
        </div>


        <div className="ask-image">
        <img src={require("../../Images/askgif.gif")} class="img-fluid queries-img"  alt="Responsive image"></img>
        </div> 
        </div>
    
</div>
</div>

    </>


);
}
export default Queries;
