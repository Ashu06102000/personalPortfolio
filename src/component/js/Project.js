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
     <h2    className="projectOne_h2"> 1 | 6</h2>
       <h1    className="projectOne_h1">Spotify-Clone</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > A spofity-clone where user and experince the music with good UI interfarence . get the source code from github</p>
     </div>
     <Link className="links"  to="/">details</Link>

     <div className="projectOne">
     <h2    className="projectOne_h2"> 2 | 5</h2>
       <h1    className="projectOne_h1">News Web Application</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > A simple news web-app which render news on real-time of each caterogy like General , health , science ... etc. by using  News Api which is  a open source API for developer </p>
     </div>
     <a  target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/NewsWeb">details</a>
    
     <a  target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/cryptoency">details</a>
     <div className="projectOne">
     <h2    className="projectOne_h2"> 3 | 5</h2>
       <h1   className="projectOne_h1">Netflix-Clone</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > Netflix-clone which fetch the movies from TMDB APi database which is provide details of movies and shows. and also free for development use .</p>
     </div>
     <a target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/NetflixClone">details</a>
    
     <a target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/x-box-website">details</a>
      <button onClick={() => console.log("hire me")}> <Link style={{color:'black' , textDecoration:'none'}}  to="/contact">WORK WITH ME</Link> </button>
    </>
  );
}
