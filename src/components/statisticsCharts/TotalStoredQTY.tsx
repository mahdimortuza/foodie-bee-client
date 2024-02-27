import { Chart } from "react-google-charts";

export const data = [
  ["Supplies", "In ton"],
  ["Stored", 800],
  ["Processed", 500],
  ["Ready to distribute", 500],
];
export const options = {
  title: "Supply update",
  is3D: true,
};

const TotalStoredQTY = () => {
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
