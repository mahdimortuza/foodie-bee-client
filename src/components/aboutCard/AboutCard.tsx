import { motion } from "framer-motion";
type TAboutProps = { img: string; title: string; des: string };
const AboutCard = ({ img, title, des }: TAboutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="border rounded-2xl text-center font-inter p-10 w-[340px]
    hover:shadow-[0_20px_30px_-5px_rgba(0,0,0,0.3)]  transition-all duration-300
    "
    >
      <img className="mx-auto" src={img} />
      <h2 className="mt-10 text-3xl font-bold">{title}</h2>
      <p className="mt-5 text-base">{des}</p>
    </motion.div>
  );
};

export default AboutCard;
