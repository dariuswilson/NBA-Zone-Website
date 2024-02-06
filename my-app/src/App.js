import React from "react";
import Header from "./components/Header/Header";
import {
  faTiktok,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

import ActiveCard from "./components/ActiveCard/ActiveCard";
import ServerDescription from "./components/ServerDescription/ServerDescription";
import SidebarCard from "./components/SideBarCards/SidebarCard";
import Footer from "./components/Footer/Footer";
import GameNights from "./components/GameNights/GameNights";
import AccessNBAStreams from "./components/AccessNBAStreams/AccessNBAStreams";
import FavoritePlayer from "./components/FavoritePlayer/FavoritePlayer";
import ChooseTeam from "./components/ChooseTeam/ChooseTeam";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-layout">
        <main className="main-content">
          <ServerDescription />
          <AccessNBAStreams />
          <ActiveCard />
          <GameNights />
          <FavoritePlayer />
          <ChooseTeam />
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
