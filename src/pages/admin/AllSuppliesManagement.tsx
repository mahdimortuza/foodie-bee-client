import { AddSupplyDialog } from "@/components/addSupplyDialog/AddSupplyDialog";
import DashboardPageTitle from "@/components/dashboardPageTitle/DashboardPageTitle";
import DataTable, { TItemData } from "@/components/dataTable/DataTable";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import LoadingSkeleton from "@/components/loadingSkeleton/LoadingSkeleton";
import { useGetAllSuppliesQuery } from "@/redux/features/supply/supplyApi";

const AllSuppliesManagement = () => {
  const { data, isLoading, isError } = useGetAllSuppliesQuery(undefined);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div className="p-5">
      <DashboardPageTitle title="Food supplies of Foodie Bee" />
      <div className="mt-10">
        <AddSupplyDialog />

        <div>
          <div className="grid grid-cols-6 gap-5 mt-4">
            <div className="text-lg font-semibold">SL/NO</div>
            <div className="text-lg font-semibold">Title</div>
            <div className="text-lg font-semibold">Category</div>
            <div className="text-lg font-semibold">Quantity</div>
            <div className="text-lg font-semibold">Edit</div>
            <div className="text-lg font-semibold">Delete</div>
          </div>
        </div>
        {data.map((item: TItemData, index: number) => (
          <DataTable key={item._id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AllSuppliesManagement;
