import { Chart } from "react-google-charts";

export const data = [
  ["Product", "Quantity in ton"],
  ["Flour", 1000],
  ["Rice", 1100],
  ["Packed", 800],
  ["Processed", 600],
  ["Dry", 1000],
  ["Veggie", 900],
];

export const options = {
  chart: {
    title: "Stock products quantity",
  },
};
const RemainingCategoryQTY = () => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default RemainingCategoryQTY;
