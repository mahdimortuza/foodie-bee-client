import { motion } from "framer-motion";
type TReviewProps = {
  img: string;
  name: string;
  designation: string;
  review: string;
};
const UserReviewCard = ({ img, name, designation, review }: TReviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="rounded p-2 m-2"
    >
      <div className="flex  items-center">
        <img className="mx-auto rounded-full" src={img} />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <h4 className="text-sm font-semibold">{designation}</h4>
        </div>
      </div>
      <p className="text-center mt-10">{review}</p>
    </motion.div>
  );
};

export default UserReviewCard;
