import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const VolunteerSection = () => {
  return (
    <Container className="py-10">
      <section className="bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl font-semibold mb-4 text-tangerine"
          >
            Virtual Volunteerism
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-600 mb-8"
          >
            Make a difference in your community. Become a volunteer and help us
            distribute food to those in need.
          </motion.p>

          <Link to="/volunteer">
            <Button className="bg-gradient-to-b from-[#EFAB68] to-[#F48E28]  hover:bg-gradient-to-b hover:from-[#F48E28] hover:to-[#EFAB68]   text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Sign Up as a Volunteer
            </Button>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default VolunteerSection;
