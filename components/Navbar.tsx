import { motion } from "framer-motion";
import Image from "next/image";

import { navVariants } from "../utils/motion";

const Navbar: React.FC = (): React.ReactElement => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="sm:px-16 px-6 py-8 relative"
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
      <h2 className="uppercase font-extrabold text-[24px] leading-[30px] text-black">
        Yuta Media
      </h2>

      <h3 className="uppercase font-extrabold text-[16px] leading-[30px] text-black">
        Blog
      </h3>
      <h3 className="uppercase font-extrabold text-[16px] leading-[30px] text-black">
        Case Studies
      </h3>
      <button className="uppercase font-extrabold text-[16px] leading-[30px] text-black">
        Get Started
      </button>
      <Image src="/Menu.svg" alt="menu" width="24" height="24" />
    </div>
  </motion.nav>
);

export default Navbar;
