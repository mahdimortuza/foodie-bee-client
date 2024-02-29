import { motion } from "framer-motion";
type TTitleProps = {
  title: string;
};

const DashboardPageTitle = ({ title }: TTitleProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="text-center text-3xl font-semibold text-tangerine"
    >
      {title}
    </motion.h1>
  );
};

export default DashboardPageTitle;
