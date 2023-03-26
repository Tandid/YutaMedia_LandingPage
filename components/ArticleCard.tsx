import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";

interface ArticleCardProps {
  index: number;
  title: string;
  subtitle: string;
  imgUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = (
  props: ArticleCardProps
): React.ReactElement => {
  const { index, title, subtitle, imgUrl } = props;
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      whileHover={{
        scale: 1.03,
      }}
      className="flex md:flex-row flex-col gap-4"
    >
      <Image
        src={imgUrl}
        width="0"
        height="0"
        alt="article"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
        unoptimized
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-bold lg:text-[42px] text-[26px] text-gray-800">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-gray-600">
            {subtitle}
          </p>
        </div>
        <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-black cursor-pointer">
          <Image
            src="/arrow.svg"
            width="0"
            height="0"
            alt="arrow"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
