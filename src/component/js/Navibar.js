import React, { Fragment } from "react";

import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import menu from "../images/menu.png";
import { useState } from "react";
export default function Navibar({ mode, toggleMode }) {

  const [show, setShow] = useState(false);

  const [cursorX, setcursorX] = useState();
  const [cursorY, setcursorY] = useState();

 window.addEventListener('mousemove',(e)=>{
   setcursorX(e.pageX)
   setcursorY(e.pageY)
 })
   
  
 
 
  return (
    <Fragment>
      <header>
        <p
          className="logo"
          onClick={toggleMode}
          style={{ color: mode === "white" ? "black" : "white" }}
        >
          A
        </p>
        <div className="ul_before">
          <ul className={show ? "header-ul mobile-header-ul" : "header-ul"}>
            <Link
             onClick={() => setShow(false)}
              id="home"
              className="links"
              to="/"
              style={{ color: mode === "white" ? "black" : "white" }}
            >
              Home
            </Link>
            <Link
           onClick={() => setShow(false)}
              className="links"
              to="/projects"
              style={{ color: mode === "white" ? "black" : "white" }}
            >
              projects
            </Link>
            <Link
             onClick={() => setShow(false)}
              id="contacts"
              className="links"
              to="/contact"
              style={{ color: mode === "white" ? "black" : "white" }}
            >
              contact
            </Link>
            <Link
             onClick={() => setShow(false)}
              id="resume"
              className="links"
              to="/resume"
              style={{ color: mode === "white" ? "black" : "white" }}
            >
              resume
            </Link>
            <div
             className="cursor"
              style={{ background: mode === "white" ? "transparent" : "white" ,color: mode === "black" ? "white" : "black",left:cursorX + 'px',
            top:cursorY + 'px'}}
           
            ></div>
          </ul>
          
        </div>
        <div className="menu_link" onClick={() => setShow(!show)}>
          <img src={menu} alt="" />
        </div>
      </header>
    </Fragment>
  );
}
