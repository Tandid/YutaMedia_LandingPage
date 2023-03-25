import { motion } from "framer-motion";
import Image from "next/image";
import { fade } from "../utils/motion";

interface ServiceCardProps {
  index: number;
  title: string;
  subtitle: string;
  imgUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (
  props: ServiceCardProps
): React.ReactElement => {
  const { index, title, subtitle, imgUrl } = props;
  return (
    <motion.div
      variants={fade("right", "spring", index * 0.3, 1)}
      className="flex items-center text-center md:flex-col flex-col gap-6 w-100"
    >
      <Image
        src={imgUrl}
        width="0"
        height="0"
        alt="article"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
        unoptimized
      />
      <div className="flex flex-col">
        <h3 className="font-bold lg:text-[36px] text-[26px] text-gray-800">
          {title}
        </h3>
        <p className="md:w-[350px] mt-[16px] font-normal lg:text-[20px] text-[14px] text-gray-600">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
