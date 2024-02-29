import { motion } from "framer-motion";
export type TVolunteerProps = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
};
type TVolunteerItem = {
  item: TVolunteerProps;
};
const VolunteerCard = ({ item }: TVolunteerItem) => {
  const { name, email, phoneNumber, location } = item;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="border p-4 mb-4"
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phoneNumber}</p>
      <p>Location: {location}</p>
    </motion.div>
  );
};

export default VolunteerCard;
