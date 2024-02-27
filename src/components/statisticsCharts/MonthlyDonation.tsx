import { Chart } from "react-google-charts";

export const data = [
  ["Products", "This year donation (ton)"],
  ["January", 205],
  ["February", 200],
  ["March", 323],
  ["April", 520],
  ["May", 702],
  ["June", 200],
  ["July", 100],
  ["August", 700],
  ["September", 300],
  ["October", 200],
  ["November", 300],
  ["December", 200],
];

export const options = {
  title: "This year donation",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

const MonthlyDonation = () => {
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

export default MonthlyDonation;
