import Container from "@/components/Container";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import LoadingSkeleton from "@/components/loadingSkeleton/LoadingSkeleton";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import SupplyCard, { TCardProps } from "@/components/supplyCard/SupplyCard";
import { Button } from "@/components/ui/button";
import { useGetLimitedSuppliesQuery } from "@/redux/features/supply/limitedSupplyApi";
import { Link } from "react-router-dom";

const SupplySection = () => {
  const { data, isError, isLoading } = useGetLimitedSuppliesQuery(undefined);

  if (isLoading) {
    return <LoadingSkeleton />;
  } else if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Container className="py-5">
      <SectionTitle title="Services" des="Our Supplies" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 place-items-center">
        {data.map((item: TCardProps) => (
          <SupplyCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="supplies">
          <Button className="bg-tangerine hover:bg-light-tangerine hover:text-black">
            View All
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default SupplySection;
