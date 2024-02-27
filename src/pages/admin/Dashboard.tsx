import DashboardPageTitle from "@/components/dashboardPageTitle/DashboardPageTitle";
import MonthlyDonation from "@/components/statisticsCharts/MonthlyDonation";
import RemainingCategoryQTY from "@/components/statisticsCharts/RemainingCategoryQTY";
import TotalStoredQTY from "@/components/statisticsCharts/TotalStoredQTY";
import YearlyDonationChart from "@/components/statisticsCharts/YearlyDonationChart";

const Dashboard = () => {
  return (
    <div className="p-10">
      <DashboardPageTitle title="Welcome to Foodie Bee dashboard." />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 ">
        <TotalStoredQTY />
        <RemainingCategoryQTY />
        <MonthlyDonation />
        <YearlyDonationChart />
      </div>
    </div>
  );
};

export default Dashboard;
