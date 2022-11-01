import React from "react";
import "./Queries.css";
import { useState } from "react";


function Queries(){
    
    //form states
    const[ name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[message,setMessage]=useState('');

    //submit event
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name,email,message);
        const data={
            Name:name,
            Email:email,
            Message:message
        }
        fetch("https://sheet.best/api/sheets/48035481-2db7-45a8-9247-ccf3afdfe8ee", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((r) => r.json())
            .then((data) => {
              // The response comes here
              console.log(data);
            })
            .catch((error) => {
              // Errors are reported there
              console.log(error);

              //clearing form fields
              
            })
            setName('');
            setEmail('');
            setMessage('');
    }
return(
    <>
    <div id="contact" className="container-fluid bg-color-fifth text-dark d-flex" style={{justifyContent:"center"}}>
        <div className="d-flex flex-column queries-parent">
        <div className="heading-box2">
        <span className=" display-4 font-weight-bold heading-text">Any Queries? </span>
        <span className=" display-4 font-weight-bold heading-text"> Ask us </span>
        </div>
        <div className="d-flex flex-row"style={{justifyContent:"space-between"}}>
        
        <div className="form-big">
            <form
                 onSubmit={handleSubmit} >
                <div className="askbox1">
                    <div className="d-flex flex-column " style={{marginRight:"2rem", width:"40%"}}>
                        <label for="name" >Enter your name:</label>
                        <input type="text"  className="input-box" id="name" placeholder=" Your full name"
                        onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div>
                    <div className="d-flex flex-column" style={{ width:"40%"}} >
                        <label for="email">Enter your email:</label>
                        <input type="text" className="input-box" id="email"   placeholder=" Your email"
                        onChange={(e)=>setEmail(e.target.value)} value={email} />
                    </div>
                </div>
            <div className="askbox2"> 
                <div className="textarea-div">
                <label for="message">Enter the message:</label>
            
                <textarea id="message"  name=" textarea" className="textarea1" rows="3" placeholder="Your Message"
                 onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
                </div>
                <div className="submit">
                    <button type="submit" className="btn btn-dark submit-btn">Submit</button>
                </div>
            </div>
            </form>
        </div>

        <div className="form-small">
            
                    <div className="d-flex flex-column"> 
                        <label for="name" className="input-text-style">Enter your name:</label>
                        <input type="text"  className="input-box" id="name" placeholder=" Your Full name"
                        onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div> 
                    <div className="d-flex flex-column" style={{marginTop:"1rem"}}> 
                        <label for="email">Enter your email:</label>
                        <input type="text" className="input-box" id="email"  placeholder="  Your Email"
                        onChange={(e)=>setName(e.target.value)} value={name}/>
                    </div>
                <div className="textarea-div">
                <label for="textarea">Enter the message:</label>
                <textarea id="textarea" className="textarea1" name="textarea" rows="3" placeholder="Message" 
                 onChange={(e)=>setName(e.target.value)} value={name}></textarea> 
                </div>
                <div className="submit-bottom">
                <button type="submit" className="btn btn-dark submit-btn submit-btn-small">Submit</button>
                </div>
        </div>
        <div className="ask-image">
        <img src={require("../../Images/Queries.png")} class="img-fluid queries-img"  alt="Responsive image"></img>
        </div> 
        </div>
    
</div>
</div>

    </>


);
}
export default Queries;
