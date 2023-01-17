import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Home  from "./components/Home";
import  Solution from "./components/Pages/Solution";
import  Contact  from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Problem from "./components/Pages/Problem";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Home/>
        <About/>
        <Problem/>
        <Solution/>
        <Contact/>
      </Router>
    </>
  );
}

export default App;
