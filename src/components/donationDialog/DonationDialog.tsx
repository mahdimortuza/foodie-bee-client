import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateDonationMutation } from "@/redux/features/donation/createDonationApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function DonationDialog() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [createDonation] = useCreateDonationMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Making donation");
    try {
      const donationData = {
        name: data.name,
        phone: data.phone,
        amount: data.amount,
      };
      const res = await createDonation(donationData).unwrap();
      dispatch(res);
      toast.success("Donation created successfully", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      toast.success("Donation created successfully", {
        id: toastId,
        duration: 3000,
      });
    }
    navigate("/admin/dashboard");
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-tangerine hover:bg-yellow-500">
          Donate Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a donation</DialogTitle>
          <DialogDescription>
            Donate a meal of donate money to buy one.
          </DialogDescription>
        </DialogHeader>
        <form
          className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-500">Phone field is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="amount"
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <span className="text-red-500">Amount field is required</span>
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
