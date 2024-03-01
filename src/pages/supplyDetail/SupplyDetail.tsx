import Container from "@/components/Container";
import { DonationDialog } from "@/components/donationDialog/DonationDialog";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import LoadingSkeleton from "@/components/loadingSkeleton/LoadingSkeleton";
import { useGetSingleSupplyQuery } from "@/redux/features/supply/supplyApi";
import { useParams } from "react-router-dom";

const SupplyDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleSupplyQuery(id);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  if (isError) {
    return <ErrorMessage />;
  }
  const { image, title, category, quantity, description } = data.result;

  return (
    <Container>
      <div className="container mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <img
            src={image}
            className="rounded-lg w-[370px] h-auto object-cover"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600">
            {" "}
            <span className="font-semibold text-lg">category:</span> {category}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-lg">
            <span className="font-semibold text-lg">Quantity:</span> {quantity}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-lg">Description: </span>
            {description}
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <DonationDialog />
        </div>
      </div>
    </Container>
  );
};

export default SupplyDetail;
