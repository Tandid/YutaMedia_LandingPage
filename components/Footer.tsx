import { motion } from "framer-motion";
import { socials } from "../data/data";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import { Social } from "../data/data.interface";

const Footer: React.FC = (): React.ReactElement => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="sm:p-16 xs:p-8 px-6 py-12 py-8 relative"
  >
    <div className="2xl:max-w-[1280px] w-full flex flex-col mx-auto gap-8">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-gray-800">
          Have an idea? Let's bring it to life.
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-sky-300 rounded-[32px] gap-[12px]"
        >
          <span className="font-bold text-[16px] text-white">Let's Chat!</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] opacity-10 bg-black" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Image src="/Hero.png" alt="menu" width="100" height="24" />
          <p className="font-normal text-[14px] text-gray-800 opacity-50">
            Copyright 2022 © Yuta Media, LLC | Purpose Driven Content Marketing
          </p>
          <div className="flex gap-4">
            {socials.map(
              (social: Social): React.ReactElement => (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  height="0"
                  width="0"
                  className="cursor-pointer object-contain w-[24px] h-[24px]"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
