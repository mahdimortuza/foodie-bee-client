import img1 from "@/assets/gallery-img/1.jpg";
import img2 from "@/assets/gallery-img/2.jpg";
import img3 from "@/assets/gallery-img/3.jpg";
import img4 from "@/assets/gallery-img/4.jpg";
import img5 from "@/assets/gallery-img/5.jpg";
import img7 from "@/assets/gallery-img/6.jpg";
import img8 from "@/assets/gallery-img/7.jpg";
import img9 from "@/assets/gallery-img/8.jpg";
import img6 from "@/assets/gallery-img/9.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Container from "@/components/Container";
import GalleryCard from "@/components/galleryCard/GalleryCard";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const GallerySection = () => {
  return (
    <Container className="py-10">
      <SectionTitle title="Gallery" des="Our memorable moments" />

      {/* gallery contents   */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-28 md:gap-0 mt-20 place-items-center">
        {/* 1st col */}
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs   "
        >
          <CarouselContent className="-mt-1 h-[200px]">
            <CarouselItem className="pt-1 md:basis-1/2">
              <GalleryCard img={img1} />
            </CarouselItem>
            <CarouselItem className="pt-1 md:basis-1/2">
              <GalleryCard img={img2} />
            </CarouselItem>
            <CarouselItem className="pt-1 md:basis-1/2">
              <GalleryCard img={img3} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* 2nd col */}
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            <CarouselItem className="pt-1 md:basis-1/2">
              <GalleryCard img={img4} />
            </CarouselItem>
            <CarouselItem className="pt-1 md:basis-1/2">
              <GalleryCard img={img5} />
            </CarouselItem>
            <CarouselItem className="pt-1 md:basis-1/2">
              <GalleryCard img={img6} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* 3rd col */}
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="-mt-1 h-[200px]">
            <CarouselItem className="pt-1 md:basis-1/2">
              <GalleryCard img={img7} />
            </CarouselItem>
            <CarouselItem className="pt-1 md:basis-1/2">
              <GalleryCard img={img8} />
            </CarouselItem>
            <CarouselItem className="pt-1 md:basis-1/2">
              <GalleryCard img={img9} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Container>
  );
};

export default GallerySection;
