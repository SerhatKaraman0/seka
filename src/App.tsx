import "./App.css";
import BackgroundComponent from "./components/BackgroundComponent";
import MainContentComponent from "./components/MainContentComponent";
import NavbarComponent from "./components/NavbarComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import LuxuryBusinessCard from "./components/MobileComponent";

import React, { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {  // Mobile breakpoint
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-black relative w-screen h-screen max-w-full">
      {/* Only show these components if not mobile */}
      {!isMobile && (
        <>
          <NavbarComponent />
          <MainContentComponent />
          <BackgroundComponent />
          <ProjectsComponent />
        </>
      )}

      {/* Show MobileComponent for mobile screens */}
      {isMobile && <LuxuryBusinessCard />}
    </div>
  );
}

export default App;
