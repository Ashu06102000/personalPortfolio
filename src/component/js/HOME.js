import React, { Fragment } from "react";
import "D:/portfolio/portfolio/src/component/CSS/Home.css";
import profile from "../images/ashish.jpeg";
import { Link } from "react-router-dom";


export default function HOME({ mode }) {
  return (
    <Fragment>
      <section>
        <p
          className="about_content"
          style={{ color: mode === "white" ? "black" : "white" }}
        >
          hey there ! i'm yash chandrakant thakur. a front end web developer .
          you can also check my resume
        </p>

        <img
          style={{ border: "2px solid rgb(11, 175, 240)" }}
          src={profile}
          alt=""
        />
        <p
          className="about_content"
          style={{ color: mode === "white" ? "black" : "white" }}
        >
          {" "}
          open minded person so don't heritate to contact me
        </p>
      </section>
      <div className="skill_favo">
        <div className="skill_favo_stack">
          <ul>
            <li>STACKS</li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              JAVASCRIPT
            </li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              REACT.JS
            </li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              HTML 5
            </li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              CSS 3
            </li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              PYTHON
            </li>
          </ul>
        </div>
        <div className="skill_favo_stack">
          <ul>
            <li>LOVE</li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              ANIME
            </li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              TRADING
            </li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              AAKASHI
            </li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              LOYALTY
            </li>
            <li style={{ color: mode === "white" ? "black" : "white" }}>
              KOUSEI
            </li>
          </ul>
        </div>
      </div>
      <div className="dark">
      
      </div>
      <div className="buttonDiv" style={{justifyContent:'center',display:'flex'}}>
      <Link className="button" to="/contact" onClick={() => console.log("hire me")}>WORK WITH ME</Link>

      </div>
     
    </Fragment>
  );
}
