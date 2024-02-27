import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateSupplyMutation } from "@/redux/features/supply/createSupplyApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

export function AddSupplyDialog() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [createSupply] = useCreateSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating supply");
    try {
      const supplyData = {
        image: data.image,
        title: data.title,
        category: data.category,
        quantity: data.quantity,
        description: data.description,
      };
      const res = await createSupply(supplyData).unwrap();
      dispatch(res);
      toast.success("Supply created successfully", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      toast.success("Supply created successfully", {
        id: toastId,
        duration: 3000,
      });
    }
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-tangerine hover:bg-gray mx-auto">
          Add supply
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-4"
          onSubmit={handleSubmit(onSubmit)}
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
              placeholder="Title"
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
              <span className="text-red-500">
                Description field is required
              </span>
            )}
          </div>
          <input
            className=" bg-tangerine text-white rounded  font-bold"
            type="submit"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
