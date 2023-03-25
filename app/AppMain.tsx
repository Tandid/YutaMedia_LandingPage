"use client";

import { useRef } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Roadmap from "../sections/Roadmap";
import CaseStudies from "../sections/CaseStudies";
import Main from "../sections/Main";
import Services from "../sections/Services";
import Banner from "../sections/Banner";
import Articles from "../sections/Articles";
import World from "../sections/World";

const AppMain: React.FC = (): React.ReactElement => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <Navbar />
      {/* <Banner onStampClicked={onStampClicked} /> */}
      <Main />
      <div className="relative">
        <Services />
        <About />
        <div className="gradient-03 z-0" />
        <div>
          <Roadmap />
        </div>
      </div>
      <div className="relative">
        <CaseStudies />
        <div className="gradient-03 z-0" />
      </div>
      <div className="relative">
        <Articles />
        <div className="gradient-04 z-0" />
      </div>
      {/* <World /> */}
      <Footer />
    </div>
  );
};

export default AppMain;
