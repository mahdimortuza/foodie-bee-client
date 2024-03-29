import arrow from "@/assets/hero-imgs/arrow.svg";
import burger from "@/assets/hero-imgs/burger.svg";
import cake from "@/assets/hero-imgs/cake.svg";
import combo from "@/assets/hero-imgs/combo.svg";
import pizza from "@/assets/hero-imgs/pizza.svg";
import Container from "@/components/Container";
import HeroItemCard from "@/components/heroItemCard/HeroItemCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <Container className="py-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
        {/* 1st col  */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 className=" text-3xl md:text-5xl font-semibold">
            Connecting Farms to Forks
          </motion.h1>
          <p className=" text-base md:text-xl mt-6">
            Transforming food distribution for freshness and efficiency –
            welcome to
            <span className=" text-tangerine text-2xl font-bold">
              Foodie Bee
            </span>
            , your reliable partner in sustainable supply chain management.
          </p>
          <div className=" mt-10 flex items-center gap-10">
            <NavLink to="/">
              <Button className=" bg-gradient-to-b from-[#EFAB68] to-[#F48E28]  ">
                Donate a meal
              </Button>
            </NavLink>
            <NavLink to="/">
              <span className="flex gap-1 items-center">
                <PlayCircle className=" text-tangerine w-[40px] h-[40px]" />
                <span className="text-xl font-bold">Supply Process</span>
              </span>
            </NavLink>
          </div>
        </motion.div>

        {/* 2nd col  */}
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block"
          src={arrow}
        />

        {/* 3rd col  */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-2 md:w-full 
        bg-gradient-to-b from-tangerine to-light-tangerine rounded-2xl"
        >
          <HeroItemCard
            img={burger}
            name={"Burger"}
            des={"Mushroom Sauce"}
            price={5.15}
          />
          <HeroItemCard
            img={combo}
            name={"Food Combo"}
            des={"Mushroom Sauce"}
            price={9.15}
          />
          <HeroItemCard
            img={pizza}
            name={"Pizza"}
            des={"Mushroom Sauce"}
            price={6.15}
          />
          <HeroItemCard
            img={cake}
            name={"Cake"}
            des={"Mushroom Sauce"}
            price={5.15}
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;
