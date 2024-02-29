// import Autoplay from "embla-carousel-autoplay";
import reviewBanner from "@/assets/client-review-img/review-img.svg";
import user1 from "@/assets/client-review-img/user.svg";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Container from "@/components/Container";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import UserReviewCard from "@/components/userReviewCard/UserReviewCard";

const UserReview = () => {
  // const plugin = React.useRef(
  // Autoplay({ delay: 2000, stopOnInteraction: true })
  // );
  return (
    <Container className="py-5">
      <SectionTitle title="Reviews" des="Our satisfied Customer" />
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:gap-0">
        <Carousel
          // plugins={[plugin.current]}
          className="w-full max-w-xs 
          shadow-[0_20px_30px_-15px_rgba(0,0,0,0.3)] rounded-2xl"
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem>
              <UserReviewCard
                img={user1}
                name="Willians Jhone"
                designation="CEO & Co-Founder"
                review="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Amet nisl tincidunt adipiscing dictumst blandit hac. 
                Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, 
                dolor egestas mus.”"
              />
            </CarouselItem>
            <CarouselItem>
              <UserReviewCard
                img={user1}
                name="Willians Jhone"
                designation="CEO & Co-Founder"
                review="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Amet nisl tincidunt adipiscing dictumst blandit hac. 
                Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, 
                dolor egestas mus.”"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className=" bg-tangerine text-white" />
          <CarouselNext className=" bg-tangerine text-white" />
        </Carousel>

        {/* user review banner image  */}
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-[370px] md:w-[500px] h-auto"
          src={reviewBanner}
        />
      </div>
    </Container>
  );
};

export default UserReview;
