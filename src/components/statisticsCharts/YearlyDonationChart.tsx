import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales"],
  ["2020", 1000],
  ["2021", 1070],
  ["2022", 1000],
  ["2023", 1030],
];
export const options = {
  title: "Yearly distribution (in ton)",
  curveType: "function",
  legend: { position: "bottom" },
};
const YearlyDonationChart = () => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default YearlyDonationChart;
