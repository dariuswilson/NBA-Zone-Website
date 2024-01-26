import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import ServerDescription from "./components/ServerDescription/ServerDescription";
import AboutUs from "./components/AboutUs/AboutUs";
import SimpleDescription from "./components/SimpleDescription/SimpleDescription";

function App() {
  return (
    <div className="App">
      <Header />
      <ServerDescription />
      <SimpleDescription />
      <AboutUs />
    </div>
  );
}

export default App;
