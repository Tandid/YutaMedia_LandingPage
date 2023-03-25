import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import ServiceCard from "../components/ServiceCard";
import TypingText from "../components/TypingText";
import { services } from "../data/data";
import TitleText from "../components/TitleText";
import { Service } from "../data/data.interface";

const Services: React.FC = (): React.ReactElement => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
    >
      <TypingText title="| Services" textStyles="text-center" />
      <TitleText
        title={<>We're a boutique content studio designed to help you grow.</>}
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-row flex-wrap justify-evenly gap-[30px] ml-50">
        {services.map(
          (service: Service, index: number): React.ReactElement => (
            <ServiceCard
              key={`Service-${index}`}
              index={index + 1}
              {...service}
            />
          )
        )}
      </div>
    </motion.div>
  </section>
);

export default Services;
