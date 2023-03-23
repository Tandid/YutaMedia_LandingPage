'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="sm:p-16 xs:p-8 px-6 py-12 py-8 relative"
  >
    <div className="footer-gradient" />
    <div className="2xl:max-w-[1280px] w-full flex flex-col mx-auto gap-8">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Footer
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-sky-700 rounded-[32px] gap-[12px]"
        >
          <img
            src="/headset.svg"
            width="0"
            height="0"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white uppercase">
            Footer
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] opacity-10 bg-white" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Yuta Media</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 Yuta Media. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                height="0"
                width="0"
                className="cursor-pointer object-contain w-[24px] h-[24px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
