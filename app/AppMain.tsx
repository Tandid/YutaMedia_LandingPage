"use client";

import { useRef } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Explore from "../sections/Explore";
import GetStarted from "../sections/GetStarted";
import Main from "../sections/Main";
import Banner from "../sections/Banner";
import Articles from "../sections/Articles";
import World from "../sections/World";

const AppMain: React.FC = (): React.ReactElement => {
  const exploreRef = useRef<HTMLDivElement | null>(null);

  const onStampClicked = (): void => {
    exploreRef.current &&
      exploreRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 overflow-hidden">
      <Navbar />
      {/* <Banner onStampClicked={onStampClicked} /> */}
      <Main />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <div ref={exploreRef}>
          <Explore />
        </div>
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-03 z-0" />
      </div>
      {/* <World />  */}
      <div className="relative">
        <Articles />
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  );
};

export default AppMain;
