import img4 from "@/assets/review-img/img-4.jpeg";
import img5 from "@/assets/review-img/img-5.jpeg";
import img6 from "@/assets/review-img/img-6.jpeg";
import img1 from "@/assets/review-img/img1.jpg";
import img2 from "@/assets/review-img/img2.jpeg";
import img3 from "@/assets/review-img/img3.jpeg";

import Container from "@/components/Container";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import TestimonialCard from "@/components/testimonialCard/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const TestimonialSection = () => {
  return (
    <Container className="py-5">
      <SectionTitle title="Testimonials" des="Our donor's feedback" />
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                profileImg={img1}
                userName="GracefulEater29"
                reviewText=' "Absolutely love the variety and freshness of the food offerings, a delightful experience every time!"'
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                profileImg={img2}
                userName="AdventureExplorer56"
                reviewText='"Impressed with the speedy delivery and top-notch service; my go-to for satisfying cravings."'
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                profileImg={img3}
                userName="WellnessGuru83"
                reviewText='"Nutrient-packed options make maintaining a healthy lifestyle a breeze, exceptional quality and taste."'
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                profileImg={img4}
                userName="TechSavvyFoodie"
                reviewText=' "Innovative menu choices and seamless online ordering, a tech-savvy food lover dream come true!"'
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                profileImg={img5}
                userName="CozyHomeChef45"
                reviewText='"Feel like a gourmet chef at home with the premium ingredients and easy-to-follow recipes."'
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard
                profileImg={img6}
                userName="SustainableDiner21"
                reviewText='"Commendable commitment to sustainability, from eco-friendly packaging to responsibly sourced ingredients."'
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default TestimonialSection;
