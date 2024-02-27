import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateSupplyMutation } from "@/redux/features/supply/updateSupplyapi";
import { useAppDispatch } from "@/redux/hooks";
import { SquarePen } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

type TSupplyProps = {
  _id: string;
  title: string;
  category: string;
  quantity: number;
  image: string;
  description: string;
};

type TSupplyItems = {
  item: TSupplyProps;
};

export function EditSupplyDialog({ item }: TSupplyItems) {
  const { _id, title, category, quantity, image, description } = item;

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const { id } = useParams();
  const [updateSupply] = useUpdateSupplyMutation();

  const onSubmit = async ({ _id, data }: FieldValues) => {
    const toastId = toast.loading("Updating supply");
    try {
      const supplyData = {
        image: data.image,
        title: data.title,
        category: data.category,
        quantity: data.quantity,
        description: data.description,
      };
      const res = await updateSupply({ _id, supplyData }).unwrap();
      console.log(res);
      dispatch(res);
      toast.success("Supply updated successfully", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      toast.success("Supply updated successfully", {
        id: toastId,
        duration: 3000,
      });
    }
    reset();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-tangerine hover:bg-yellow-500">
          <SquarePen />
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
          onSubmit={handleSubmit(() => onSubmit({ _id }))}
        >
          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="Image"
              {...register("image", { required: true })}
              defaultValue={image}
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
              defaultValue={category}
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
              defaultValue={title}
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
              defaultValue={quantity}
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
              defaultValue={description}
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
