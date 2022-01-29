import React, { Fragment, useState } from "react";
import "./App.css";
import Footer from "./component/js/Footer";
import HOME from "./component/js/HOME.js";
import Navibar from "./component/js/Navibar";
import Project from "./component/js/Project";

import { Route, Routes } from "react-router-dom";
import Contact from "./component/js/Contact";
import Resume from "./component/js/Resume";

function App() {
  const [mode, setMode] = useState();
  const toggleMode = () => {
    if (mode === "black") {
      setMode("white");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("black");
      document.body.style.backgroundColor = "black";
    }
  };
  return (
    <Fragment>
      <div>
        <Navibar toggleMode={toggleMode} mode={mode} />
        <Routes>
          <Route path="/" element={<HOME mode={mode} />} />
          <Route path="/projects" element={<Project mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
          <Route path="/resume" element={<Resume mode={mode} />} />
        </Routes>
        <Footer mode={mode} />
      </div>
    </Fragment>
  );
}

export default App;
