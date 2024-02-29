import DashboardPageTitle from "@/components/dashboardPageTitle/DashboardPageTitle";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import LoadingSkeleton from "@/components/loadingSkeleton/LoadingSkeleton";
import TotalStoredQTY from "@/components/statisticsCharts/TotalStoredQTY";
import { useGetDonationQuery } from "@/redux/features/donation/createDonationApi";

export type TItems = {
  name: string;
  phone: string;
  amount: number;
};

const Dashboard = () => {
  // donation mapping
  const {
    data: donation,
    isError: Derror,
    isLoading: Dloading,
  } = useGetDonationQuery(undefined);

  if (Dloading) {
    return <LoadingSkeleton />;
  } else if (Derror) {
    return <ErrorMessage />;
  }
  const mappedDonation = donation.map((item: TItems) => item.amount);
  const totalDonation = mappedDonation.reduce(
    (acc: number, num: number) => acc + Number(num),
    0
  );

  return (
    <div className="p-10">
      <DashboardPageTitle title="Welcome to Foodie Bee dashboard." />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 ">
        <TotalStoredQTY totalDonation={totalDonation} />
      </div>
    </div>
  );
};

export default Dashboard;
