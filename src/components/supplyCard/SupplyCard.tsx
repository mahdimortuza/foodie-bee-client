import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export type TCardProps = {
  _id: string;
  title: string;
  category: string;
  image: string;
  quantity: string;
};
type TSupplyItem = {
  item: TCardProps;
};

const SupplyCard = ({ item }: TSupplyItem) => {
  const { _id, image, category, title, quantity } = item;
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="w-[370px] h-[330px] rounded-xl shadow-[0_20px_30px_0px_rgba(0,0,0,0.1)] rounded-t-3xl"
    >
      <div className="overflow-hidden  ">
        <img
          className="h-[220px] w-full hover:scale-105 transition-all duration-300 rounded-t-3xl"
          src={image}
        />
      </div>
      <div className="flex justify-between items-center my-5 mx-5 gap-2">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm">
            Category: <span>{category}</span>
          </p>
        </div>
        <div className="">
          <p className="text-sm">
            Quantity: <span className="text-red-500">{quantity}</span>
          </p>
          <NavLink className="" to={`/supplies/${_id}`}>
            <Button className="rounded-3xl mt-2 bg-gradient-to-b from-[#EFAB68] to-[#F48E28] ">
              View details
            </Button>
          </NavLink>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default SupplyCard;
