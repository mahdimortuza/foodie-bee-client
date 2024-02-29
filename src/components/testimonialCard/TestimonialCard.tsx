import { motion } from "framer-motion";
export type TReviewProps = {
  _id: string;
  profileImg: string;
  userName: string;
  reviewText: string;
  review: number;
};
type TTestimonialItem = {
  item: TReviewProps;
};
const TestimonialCard = ({ item }: TTestimonialItem) => {
  const { profileImg, userName, reviewText, review } = item;
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className={`w-[350px] lg:w-[400px] p-5 rounded-[24px] transition-all duration-200
  hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
  mx-auto`}
    >
      <div className="flex gap-3 items-center ">
        <img className="w-[100px] h-[100px] rounded-full" src={profileImg} />
        <div>
          <h3 className=" text-[25px] font-inter text-red-500 font-bold leading-[150%]">
            {userName}
          </h3>
          <div className="flex gap-1 mt-4">{review}</div>
        </div>
      </div>

      <p className="mt-6 font-inter text-[18px] leading-[144%]">{reviewText}</p>
    </motion.div>
  );
};

export default TestimonialCard;
