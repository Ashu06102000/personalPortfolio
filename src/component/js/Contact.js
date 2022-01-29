import React from "react";
import "../CSS/Contact.css";

export default function Contact({ mode }) {
  return (
    <div>
    
      <h1
        style={{ color: mode === "white" ? "black" : "white" }}
        className="contact_title"
      >
        contact
      </h1>

      <p className="contact_grap"  style={{ color: mode === "white" ? "black" : "white" }}>i would like to hear you are intersted in contact me <br />send me an e-mail on <br /> <span>yash6102000thakur@gmail.com</span></p>
      <div className="buttons">
        <button className="contact_buttons" onClick={() => console.log("hire me")}>
          {" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/yash-thakur-0b71051b9/"
          >
            LINKEDIN
          </a>{" "}
        </button>
        <button className="contact_buttons" onClick={() => console.log("hire me")}>
          {" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Ashu06102000"
          >
            GITHUB
          </a>{" "}
        </button>
      
     
      </div>
    </div>
  );
}
