import { motion } from "framer-motion";
import TypingText from "../components/TypingText";
import TitleText from "../components/TitleText";
import Image from "next/image";

import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const About: React.FC = (): React.ReactElement => (
  <div>
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <div className="z-0" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
      >
        <TypingText title="| Why We're Different" textStyles="text-center" />
        <TitleText
          title={<>Quality is everything.</>}
          textStyles="text-center"
        />
      </motion.div>
    </section>
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row gap-6"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col sm:p-8 p-4 rounded-[32px] relative"
        >
          <h4 className="font-normal sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-gray-800">
            Our research process is our silver bullet. We're dedicated to
            understanding your customers, product, and industry inside and out.
          </h4>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <Image
            src="/bg.png"
            alt="cover"
            width="0"
            height="0"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
            unoptimized
          />
          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  </div>
);

export default About;
