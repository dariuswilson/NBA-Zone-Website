import React from "react";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import ServerDescription from "./components/ServerDescription/ServerDescription";
import SimpleDescription from "./components/SimpleDescription/SimpleDescription";
import SidebarCard from "./components/SideBarCards/SidebarCard";
import Footer from "./components/Footer/Footer";

import {
  faTiktok,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
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
        </main>
        <aside className="sidebar">
          <SidebarCard
            title="Follow NBA Zone!"
            socials={[
              {
                name: "Tiktok",
                link: "https://www.tiktok.com/@nbatrends_",
                icon: faTiktok,
              },
              {
                name: "Instagram",
                link: "https://www.instagram.com/swishundisputed/",
                icon: faInstagram,
              },
              {
                name: "Twitter",
                link: "https://twitter.com/nbaTrends_",
                icon: faTwitter,
              },
              {
                name: "Discord",
                link: "https://discord.gg/nbachat",
                icon: faDiscord,
              },
            ]}
          />
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default App;
