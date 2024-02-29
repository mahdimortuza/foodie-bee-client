import Container from "@/components/Container";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import LoadingSkeleton from "@/components/loadingSkeleton/LoadingSkeleton";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import TestimonialCard, {
  TReviewProps,
} from "@/components/testimonialCard/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGetTestimonialQuery } from "@/redux/features/testimonial/testimonialApi";

const TestimonialSection = () => {
  const {
    data: testimonials,
    isLoading,
    isError,
  } = useGetTestimonialQuery(undefined);
  console.log(testimonials);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Container className="py-5">
      <SectionTitle title="Testimonials" des="Our donor's feedback" />
      <div>
        <Carousel>
          <CarouselContent>
            {testimonials.map((item: TReviewProps) => (
              <CarouselItem
                key={item._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default TestimonialSection;
