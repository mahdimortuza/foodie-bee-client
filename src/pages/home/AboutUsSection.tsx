import delivery from "@/assets/about-us-img/delivery.svg";
import spoonCross from "@/assets/about-us-img/spoon-cross.svg";
import spoon from "@/assets/about-us-img/spoon.svg";
import Container from "@/components/Container";
import AboutCard from "@/components/aboutCard/AboutCard";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const AboutUsSection = () => {
  return (
    <Container className=" py-5">
      <SectionTitle title="About us" des="Why Choose Our Favorite Food" />

      {/* about items  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <AboutCard
          img={spoonCross}
          title="Qualityfull Food"
          des="But I must explain to you how all this
mistaken idea of denouncing pleasur and
prasising pain was bron."
        />
        <AboutCard
          img={spoon}
          title="Healthy Food"
          des="But I must explain to you how all this
mistaken idea of denouncing pleasur and
prasising pain was bron."
        />
        <AboutCard
          img={delivery}
          title="Healthy Food"
          des="But I must explain to you how all this
mistaken idea of denouncing pleasur and
prasising pain was bron."
        />
      </div>
    </Container>
  );
};

export default AboutUsSection;
