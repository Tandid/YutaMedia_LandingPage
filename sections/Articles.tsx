import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import ArticleCard from "../components/ArticleCard";
import TypingText from "../components/TypingText";
import { articles } from "../data/data";
import TitleText from "../components/TitleText";
import { Article } from "../data/data.interface";

const Articles: React.FC = (): React.ReactElement => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
    >
      <TypingText title="| Articles" textStyles="text-center" />
      <TitleText title={<>Our latest resources</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {articles.map(
          (article: Article, index: number): React.ReactElement => (
            <ArticleCard
              key={`Article-${index}`}
              index={index + 1}
              {...article}
            />
          )
        )}
      </div>
    </motion.div>
  </section>
);

export default Articles;
