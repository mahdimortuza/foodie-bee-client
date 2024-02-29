import { motion } from "framer-motion";
type TTitleProps = {
  title: string;
  des: string;
};

const SectionTitle = ({ title, des }: TTitleProps) => {
  return (
    <div className="text-center mt-8 mb-10">
      <motion.h5
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-xl font-semibold text-tangerine"
      >
        {title}
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className=" text-4xl font-bold  mx-auto"
      >
        {des}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
