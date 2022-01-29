import React from "react";
import "D:/portfolio/portfolio/src/component/CSS/Project.css";
import { Link } from "react-router-dom";
export default function Project({ mode }) {
  return (
    <>
      <div id="project">
        <p style={{ color: mode === "white" ? "black" : "white" }}>
          i heared you are intrested to know about my projects. you can cheakout
          here in details <br /> <a   style={{ color: mode === "white" ? "black" : "white" }} href="#one">↓</a> 
        </p>
      </div>
     <div id="one" className="projectOne">
     <h2    className="projectOne_h2"> 1 | 6</h2>
       <h1    className="projectOne_h1">Personal Portfolio</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > this is a personal portfolio website which i want a simple and minimal . you can cheank the datails about how i  made build this and get a source code from github</p>
     </div>
     <Link className="links"  to="/">details</Link>

     <div className="projectOne">
     <h2    className="projectOne_h2"> 2 | 5</h2>
       <h1    className="projectOne_h1">News Web Application</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > A simple news web-app which render news on real-time of each caterogy like General , health , science ... etc. by using  News Api which is  a open source API for developer </p>
     </div>
     <div className="projectOne">
     <h2    className="projectOne_h2"> 3 | 5</h2>
       <h1    className="projectOne_h1">Cryptoency</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > this website provide data about cryptocurrency . access price actions , their volume , market cap and more... </p>
     </div>
     <a  target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/cryptoency">details</a>
     <div className="projectOne">
     <h2    className="projectOne_h2"> 4 | 5</h2>
       <h1   className="projectOne_h1">Netflix-Clone</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > Netflix-clone which fetch the movies from TMDB APi database which is provide details of movies and shows. and also free for development use .</p>
     </div>
     <a target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/NetflixClone">details</a>
     <div className="projectOne">
     <h2   className="projectOne_h2"> 5 | 5</h2>
       <h1    className="projectOne_h1">X-box website</h1>
       <p style={{ color: mode === "white" ? "black" : "white" }} > A simple x-box site which i made at earlier stage when i'm learning basic HTML and CSS , but after that i wrapped up in react </p>
     </div>
     <a target="_blank" rel="noreferrer" className="links"  href="https://github.com/Ashu06102000/x-box-website">details</a>
      <button onClick={() => console.log("hire me")}>WORK WITH ME</button>
    </>
  );
}
