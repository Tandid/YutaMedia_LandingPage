"use client";

import { useRef } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Roadmap from "../sections/Roadmap";
import CaseStudies from "../sections/CaseStudies";
import Main from "../sections/Main";
import Services from "../sections/Services";
import Articles from "../sections/Articles";

const AppMain: React.FC = (): React.ReactElement => {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <Main />
      <div className="relative">
        <Services />
        <About />
        <div className="z-0" />
        <div>
          <Roadmap />
        </div>
      </div>
      <div className="relative">
        <CaseStudies />
        <div className="z-0" />
      </div>
      <div className="relative">
        <Articles />
        <div className="z-0" />
      </div>
      <Footer />
    </div>
  );
};

export default AppMain;
