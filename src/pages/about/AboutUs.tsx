import Container from "@/components/Container";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import LoadingSkeleton from "@/components/loadingSkeleton/LoadingSkeleton";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import VolunteerCard, {
  TVolunteerProps,
} from "@/components/volunteerCard/VolunteerCard";
import { useGetVolunteerQuery } from "@/redux/features/voulnteer/volunteerApi";

const AboutUs = () => {
  const {
    data: volunteers,
    isLoading,
    isError,
  } = useGetVolunteerQuery(undefined);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  if (isError) {
    return <ErrorMessage />;
  }
  return (
    <Container className="py-5">
      <SectionTitle title="Volunteer" des="Our Volunteers" />

      <div>
        {volunteers.map((item: TVolunteerProps) => (
          <VolunteerCard key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default AboutUs;
