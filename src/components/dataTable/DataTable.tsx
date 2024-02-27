import { useDeleteSupplyMutation } from "@/redux/features/supply/deleteSupplyApi";
import { Trash } from "lucide-react";
import Swal from "sweetalert2";
import { EditSupplyDialog } from "../editSupplyDialog/EditSupplyDialog";
import { Button } from "../ui/button";

export type TItemData = {
  _id: string;
  title: string;
  category: string;
  quantity: number;
  image: string;
  description: string;
};

export type TTableProps = {
  item: TItemData;
  index: number;
};

const DataTable = ({ item, index }: TTableProps) => {
  const { _id, title, category, quantity } = item;

  const [deleteSupplyApi] = useDeleteSupplyMutation();
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSupplyApi(id);

        Swal.fire({
          title: "Deleted!",
          text: ` ${title} has been deleted.`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="grid grid-cols-6 gap-5 mt-4">
      <div className="font-medium">{index + 1}</div>
      <div>{title}</div>
      <div>{category}</div>
      <div className="text-right">{quantity}</div>
      <div className="flex justify-between">
        <EditSupplyDialog item={item} />

        <Button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 hover:bg-red-600"
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default DataTable;
