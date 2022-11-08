 import React from "react";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "../node_modules/bootstrap/dist/js/bootstrap";
 import {Routes,Route} from "react-router-dom";
 import Content from "./Components/ContentComponent/Content";
 import Navbar from "./Components/NavbarComponent/Navbar";
 import Download from "./Components/DownloadComponent/Download";
 import Footer from "./Components/FooterComponent/Footer";
 import Feedback from "./Components/FeedbackComponent/Feedback";
 import FAQ from "./Components/FAQComponent/FAQ";
 import Queries from "./Components/QueriesComponent/Queries";
import './App.css';

const App=() =>{
  return (
    <>
    <Navbar/>
    <Content/>
    <Download/> 
    <Feedback/>
    <FAQ/>
    <Queries/>
    <Footer/>
    
     {/* <Routes/>
        <Route path='/' element={<Home/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/contact' element={<Contact/>}/>
        
        <Routes/>  */}
      
   </>   
  );
}

export default App;
