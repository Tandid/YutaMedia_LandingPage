import { motion } from "framer-motion";
import Image from "next/image";

import { navVariants } from "../utils/motion";

const Navbar: React.FC = (): React.ReactElement => (
  <motion.nav
    variants={navVariants}
    // initial="hidden"
    // whileInView="show"
    className="sm:px-16 py-4 relative"
  >
    <div className="absolute w-[50%] inset-0" />
    <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
      <Image src="/Hero.png" alt="menu" width="100" height="10" />
      {/* <h3 className="uppercase font-extrabold text-[16px] leading-[30px] text-gray-800">
        Blog
      </h3>
      <h3 className="uppercase font-extrabold text-[16px] leading-[30px] text-gray-800">
        Case Studies
      </h3> */}
      <Image src="/Menu.svg" alt="menu" width="24" height="10" />
    </div>
  </motion.nav>
);

export default Navbar;
