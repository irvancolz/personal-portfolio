import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Component } from "./component";
import { counterContext } from "./helper/Context";
import mainAnimationController from "./helper/mainAnimationController";
import { Pages } from "./pages";

const {Navbar, Slider} = Component()
const {Hero, Project, About, Contact} = Pages()

function App() {

  const {mainCounter} = useContext(counterContext)

  useEffect(()=>{
    mainAnimationController();
  },[mainCounter])

  return (
    <div className="App">
      <Slider />
      <Navbar />
      <Routes >
        <Route path="/" element={<Hero />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Project" element={<Project />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
