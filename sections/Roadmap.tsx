"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import RoadmapCard from "../components/RoadmapCard";
import TitleText from "../components/TitleText";
import TypingText from "../components/TypingText";
import { roadmaps } from "../data/data";
import { Roadmap } from "../data/data.interface";

const Roadmap: React.FC = (): React.ReactElement => {
  const [active, setActive] = useState("roadmap-1");
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| Our Process" textStyles="text-center" />
        <TitleText
          title={<>We're always Learning.</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {roadmaps.map(
            (roadmap: Roadmap, index: number): React.ReactElement => (
              <RoadmapCard
                key={roadmap.id}
                {...roadmap}
                index={index}
                active={active}
                handleClick={setActive}
              />
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Roadmap;
