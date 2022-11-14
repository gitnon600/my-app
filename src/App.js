import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(5 11 84 / 90%)";
      showAlert("Dark mode has been enabled","success");
      document.title="Mytextmod1-Dark Mode";
      // setInterval(()=>{
      //   document.title="this is amazing";
      // },2000);
      // setInterval(() => {
      //   document.title="install now";
      // }, 1500);
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      document.title="Mytextmod1-Light Mode"
    }
  };
  return (
    
    <>
    <Router>
      <Navbar
        title="Mytextmod1"
        aboutUs="about us "
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch><Route exact path="/about">
            <About />
          </Route>
        <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          </Route>
          
         
          
       </Switch> */}
         {/* <BrowserRouter> */}
        <Routes>
            <Route exact path ="/about" element={<About/>}/>
            <Route exact path ="/" element={<TextForm showAlert ={showAlert} heading="Enter your text here for analysis " mode={mode} />}/> 
         </Routes>
        {/* </BrowserRouter> */}
        
      </div>
      </Router>
    </>
    
  );
}

export default App;
