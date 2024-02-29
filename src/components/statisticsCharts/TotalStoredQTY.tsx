import { useGetAllSuppliesQuery } from "@/redux/features/supply/supplyApi";
import { Chart } from "react-google-charts";
import ErrorMessage from "../errorMessage/ErrorMessage";
import LoadingSkeleton from "../loadingSkeleton/LoadingSkeleton";

type TItems = {
  category: string;
  description: string;
  image: string;
  quantity: number;

  title: string;
  _id: string;
};
export type TDonation = {
  totalDonation: number;
};
const TotalStoredQTY = ({ totalDonation }: TDonation) => {
  const {
    data: amount,
    isError: Serror,
    isLoading: Sloading,
  } = useGetAllSuppliesQuery(undefined);

  if (Sloading) {
    return <LoadingSkeleton />;
  } else if (Serror) {
    return <ErrorMessage />;
  }
  // total amount in stock
  const mappedAmount = amount.map((item: TItems) => item.quantity);
  const totalAmount = mappedAmount.reduce(
    (acc: number, num: number) => acc + Number(num),
    0
  );
  // total length of length
  const mappedLength = amount.map((item: TItems) => item._id.length);
  const totalLength = mappedLength.length;
  const data = [
    ["Supplies", " "],
    ["Total amount", totalAmount],
    ["Total supplies", totalLength],
    ["Total donation", totalDonation],
  ];
  const options = {
    title: "Supply update",
    is3D: true,
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default TotalStoredQTY;
