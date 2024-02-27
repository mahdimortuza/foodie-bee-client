import Container from "@/components/Container";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import LoadingSkeleton from "@/components/loadingSkeleton/LoadingSkeleton";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import SupplyCard, { TCardProps } from "@/components/supplyCard/SupplyCard";
import { useGetAllSuppliesQuery } from "@/redux/features/supply/supplyApi";

const AllSupplies = () => {
  const { data, isError, isLoading } = useGetAllSuppliesQuery(undefined);

  if (isLoading) {
    return <LoadingSkeleton />;
  } else if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Container>
      <SectionTitle title="All Supplies" des="See our all supplies" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 place-items-center">
        {data.map((item: TCardProps) => (
          <SupplyCard key={item._id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default AllSupplies;
