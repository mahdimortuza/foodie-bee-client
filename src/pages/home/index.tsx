import AboutUsSection from "./AboutUsSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import SubscribeSection from "./SubscribeSection";
import SupplySection from "./SupplySection";
import TestimonialSection from "./TestimonialSection";
import UserReview from "./UserReview";
import VolunteerSection from "./VolunteerSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SupplySection />
      <TestimonialSection />
      <GallerySection />
      <AboutUsSection />
      <UserReview />
      <SubscribeSection />
      <VolunteerSection />
    </div>
  );
};

export default Home;
