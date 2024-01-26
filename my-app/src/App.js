import React from "react";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ServerDescription from "./components/ServerDescription/ServerDescription";
import SimpleDescription from "./components/SimpleDescription/SimpleDescription";
import SidebarCard from "./components/SideBarCards/SidebarCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-layout">
        <main className="main-content">
          <ServerDescription />
          <SimpleDescription />
          <AboutUs />
          {/* ... other main content components */}
        </main>
        <aside className="sidebar">
          <SidebarCard />
        </aside>
      </div>
    </div>
  );
}

export default App;
