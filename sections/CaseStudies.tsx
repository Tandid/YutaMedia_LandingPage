import { motion } from "framer-motion";
import { staggerContainer, fadeIn, imgVariants } from "../utils/motion";
import TitleText from "../components/TitleText";
import TypingText from "../components/TypingText";
import Image from "next/image";

const CaseStudies: React.FC = (): React.ReactElement => (
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
        <TypingText
          title="| Content Marketing Case Studies"
          textStyles="text-center"
        />
        <TitleText
          title={<>Learn how we've helped these businesses grow</>}
          textStyles="text-center"
        />
      </motion.div>
    </section>
    {/* Case Study 1 */}
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={imgVariants("left")}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src="/Case01.png"
            alt="case01"
            width="0"
            height="0"
            className="w-[90%] h-[90%] h-auto object-cover rounded-[40px]"
            unoptimized
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col gap-4"
        >
          {/* <TypingText title="| How Yuta Media Works" /> */}
          <TitleText title={<>Case Study #1</>} />
          <h1 className="font-bold lg:text-[26px] text-[26px] text-gray-800">
            How we grew a beatbox publication organically from 4,000 to 150,000
            monthly readers in 6 months
          </h1>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-gray-600">
            Learn how we grew a community to 150,000+ through SEO, community
            management, and more.
          </p>
        </motion.div>
      </motion.div>
    </section>
    {/* Case Study 2 */}
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col gap-4"
        >
          {/* <TypingText title="| How Yuta Media Works" /> */}
          <TitleText title={<>Case Study #2</>} />
          <h1 className="font-bold lg:text-[26px] text-[26px] text-gray-800">
            How we helped this SaaS business raise $30 million
          </h1>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-gray-600">
            Learn how Yuta Media helped Exceed.ai raise $30M on a shoestring
            budget.
          </p>
        </motion.div>
        <motion.div
          variants={imgVariants("right")}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src="/Case02.png"
            alt="case02"
            width="0"
            height="0"
            className="w-[90%] h-[90%] h-auto object-cover rounded-[40px]"
            unoptimized
          />
        </motion.div>
      </motion.div>
    </section>
  </div>
);

export default CaseStudies;
