import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import TypingText from "./TypingText";

interface RoadmapCardProps {
  index: number;
  id: string;
  imgUrl: string;
  title: string;
  subtitle: string;
  description: string;
  active: string;
  handleClick?: (id: string) => void;
}

const RoadmapCard: React.FC<RoadmapCardProps> = (
  props: RoadmapCardProps
): React.ReactElement => {
  const {
    index,
    id,
    imgUrl,
    title,
    subtitle,
    description,
    color,
    active,
    handleClick,
  } = props;
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg-flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={(): void => handleClick && handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        fill
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <div className="absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          <h3 className="font-semibold sm:text-[26px] text-[18px] text-gray-800">
            {title}
          </h3>
          {/* <h3 className="font-semibold sm:text-[20px] text-[18px] text-gray-800">
            {subtitle}
          </h3> */}
        </div>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div>
            <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
              {title}
            </h2>
            <p className="font-bold text-[20px] text-white">{subtitle}</p>
          </div>
        </div>
      )}

      {active !== id ? (
        <div></div>
      ) : (
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="absolute p-8 justify-start w-full flex-col font-normal text-[20px] text-gray-800"
        >
          {/* {description} */}
          {/* <TypingText title={description} /> */}
        </motion.div>
      )}
    </motion.div>
  );
};

export default RoadmapCard;
