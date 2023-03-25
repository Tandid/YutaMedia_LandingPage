import { motion } from "framer-motion";
import TypingText from "../components/TypingText";
import TitleText from "../components/TitleText";

import { fadeIn, staggerContainer } from "../utils/motion";

const About: React.FC = (): React.ReactElement => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
    >
      <TypingText title="| Why We're Different" textStyles="text-center" />
      <TitleText title={<>Quality is everything.</>} textStyles="text-center" />
    </motion.div>
  </section>
);

export default About;
