import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  faTiktok,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

import Staff from "./pages/StaffPage/StaffPage";
import ActiveCard from "./components/ActiveCard/ActiveCard";
import ServerDescription from "./components/ServerDescription/ServerDescription";
import SidebarCard from "./components/SideBarCards/SidebarCard";
import Footer from "./components/Footer/Footer";
import GameNights from "./components/GameNights/GameNights";
import AccessNBAStreams from "./components/AccessNBAStreams/AccessNBAStreams";
import FavoritePlayer from "./components/FavoritePlayer/FavoritePlayer";
import ChooseTeam from "./components/ChooseTeam/ChooseTeam";
import InclusiveCommunity from "./components/InclusiveCommunity/InclusiveCommunity";
import PictureOfNBALegends from "./components/PictureOfNBALegends/PictureOfNBALegends";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content-layout">
          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ServerDescription />
                    <AccessNBAStreams />
                    <ActiveCard />
                    <GameNights />
                    <FavoritePlayer />
                    <ChooseTeam />
                    <InclusiveCommunity />
                    <PictureOfNBALegends />
                  </>
                }
              />
              <Route path="/staff" element={<Staff />} />
            </Routes>
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
    </BrowserRouter>
  );
}

export default App;
