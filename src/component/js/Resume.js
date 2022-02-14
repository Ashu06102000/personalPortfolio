import React from "react";
import "../CSS/Resume.css";
function Resume({ mode }) {
  return (
    <div>
      <div style={{ textAlign: "center",marginTop:'100px' }} className="resume">
        <a
          style={{
            color: mode === "white" ? "black" : "white",
            textDecoration: "none",
            fontSize: "30px",
            textTransform: "uppercase",
           
          }}
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1rO2oHHONlxWSBz2mAWdYSPkUTYBU3S4I/view?usp=sharing"
        >
          Click Me
        </a>
      </div>
    </div>
  );
}

export default Resume;
