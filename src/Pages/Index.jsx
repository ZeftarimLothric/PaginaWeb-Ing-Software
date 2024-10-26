import { useState, useEffect } from "react";
// import { HomePage } from "./1.HomePage/HomePage";
// import { Documentacion } from "./2.Documentacion/Documentacion";
// import Nabvar from "../components/Navbar";

import { LandingPage } from "./1.HomePage/LandingPage";
import { CoursePage } from "./2.Documentacion/CoursePage";

function Index() {
  // const [navbar, setNavbar] = useState({
  //   INICIO: true,
  //   COMIENZO: false,
  // });
  // return (
  //   <>
  //     <div className="backdrop-blur-[3px]">
  //       <Nabvar navbar={navbar} setNavbar={setNavbar} />
  //       <div>
  //         {navbar.INICIO && <HomePage setNavbar={setNavbar} />}
  //         {navbar.COMIENZO && <Documentacion />}
  //       </div>
  //     </div>
  //   </>
  // );
  // return <LandingPage />;
  const [currentPage, setCurrentPage] = useState("inicio");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "inicio" && (
        <LandingPage onNavigate={handleNavigation} />
      )}
      {currentPage === "comienzo" && (
        <CoursePage onNavigate={handleNavigation} />
      )}
    </>
  );
}

export default Index;
