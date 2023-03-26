import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn, imgVariants } from "../utils/motion";
import { companies } from "../data/data";
import Image from "next/image";
import TitleText from "../components/TitleText";
import { Company } from "../data/data.interface";

const Main: React.FC = (): React.ReactElement => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 overflow-hidden ">
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <div className="bg-orange-50 w-full lg:h-[610px] h-auto min-h-[210px] rounded-[40px]">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col"
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="p-8 flex-[0.75] flex justify-center flex-col"
            >
              <TitleText title={<>Purpose driven content marketing</>} />
              <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
                <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-gray-800">
                  Stop publishing mindlessly.
                </h1>
                <h1 className="mt-[20px] font-bold text-[24px] leading-[30px] text-gray-800">
                  Start making a difference.
                </h1>
                <button
                  type="button"
                  className="py-4 px-6 bg-sky-300 rounded-[32px]"
                >
                  <span className="font-bold text-[16px] text-white">
                    Let's Chat!
                  </span>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={imgVariants("right")}
              className="flex-1 flex justify-center items-center"
            >
              <Image
                src="/Hero1.png"
                alt="hero"
                width="0"
                height="0"
                className="w-[90%] h-[90%] object-contain"
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
    <motion.nav
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8 opacity-50">
        {companies.map(
          (company: Company): React.ReactElement => (
            <Image
              key={company.name}
              src={company.imgUrl}
              alt={company.name}
              height="0"
              width="0"
              className="object-contain w-[150px] h-[100px]"
            />
          )
        )}
      </div>
    </motion.nav>
  </section>
);

export default Main;
