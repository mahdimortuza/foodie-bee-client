import DashboardPageTitle from "@/components/dashboardPageTitle/DashboardPageTitle";
import { useUpdateSupplyMutation } from "@/redux/features/supply/supplyApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const EditSupplyManagement = () => {
  const dispatch = useAppDispatch();
  const id = useParams();
  // const { data } = useGetSingleSupplyQuery(id);

  console.log(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [updateSupply] = useUpdateSupplyMutation();

  const onSubmit = async ({ _id, data }: FieldValues) => {
    const toastId = toast.loading("Editing supply");
    try {
      const supplyData = {
        _id: _id,
        image: data.image,
        title: data.title,
        category: data.category,
        quantity: data.quantity,
        description: data.description,
      };
      const res = await updateSupply(supplyData).unwrap();
      console.log(res);
      dispatch(res);
      toast.success("Supply edited successfully", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      toast.success("Supply edited successfully", {
        id: toastId,
        duration: 3000,
      });
    }
    reset();
  };

  return (
    <div className="p-10">
      <DashboardPageTitle title="Edit the food supply" />

      <form
        className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-4"
        onSubmit={handleSubmit((_id) => onSubmit(_id))}
      >
        <div className="flex flex-col">
          <input
            className="rounded"
            placeholder="Image"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-red-500">Image Link is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="rounded"
            placeholder="Category"
            {...register("category", { required: true })}
          />
          {errors.category && (
            <span className="text-red-500">Category field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="rounded"
            placeholder="title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-500">Title field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="rounded"
            placeholder="Quantity"
            {...register("quantity", { required: true })}
          />
          {errors.quantity && (
            <span className="text-red-500">Quantity field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="rounded"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-500">Description field is required</span>
          )}
        </div>
        <input
          className=" bg-tangerine text-white rounded  font-bold"
          type="submit"
        />
      </form>
    </div>
  );
};

export default EditSupplyManagement;
