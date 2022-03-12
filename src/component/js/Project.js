import React from "react";
import "D:/portfolio/portfolio/src/component/CSS/Project.css";
import { Link } from "react-router-dom";
export default function Project({ mode }) {
  return (
    <>
      <div id="project">
        <p style={{ color: mode === "white" ? "black" : "white" }}>
          i heared you are intrested to know about my projects. you can cheakout
          here in details about projects <br /> <a   style={{ color: mode === "white" ? "black" : "white" }} href="#one">↓</a> 
        </p>
      </div>
     <div id="one" className="projectOne">
     <h2    className="projectOne_h2"> 1 | 4</h2>
       <h1    className="projectOne_h1">Disney-Clone</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} >Stacking - NEXT.JS | REACT.JS | NEXTAUTH | TAILWIND CSS | FIREBASE</p>
     </div>
     <a  target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/disneyPlusClone">details</a>

     <div className="projectOne">
     <h2    className="projectOne_h2"> 2 | 4 </h2>
       <h1    className="projectOne_h1">News Web Application</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} >Stacking - REACT.JS | HTML | CSS | NEWS-API</p>
     </div>
     <a  target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/NewsWeb">details</a>
    
   
     <div className="projectOne">
     <h2    className="projectOne_h2"> 3 | 4</h2>
       <h1   className="projectOne_h1">Netflix-Clone</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > Stacking - REACT.JS | HTML | CSS | TMDB-API</p>
     </div>
     <a target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/NetflixClone">details</a>   <div className="projectOne">
     <h2    className="projectOne_h2"> 4 | 4</h2>
       <h1   className="projectOne_h1">Hidden-leaf restaurant</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > Stacking - NEXT.JS | REACT.JS | REDUX | MONGODB | TAILWIND CSS</p>
     </div>
     <a target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/Hidden-Leaf-restaurant">details</a>
    
     
      <button onClick={() => console.log("hire me")}> <Link style={{color:'black' , textDecoration:'none'}}  to="/contact">WORK WITH ME</Link> </button>
    </>
  );
}
