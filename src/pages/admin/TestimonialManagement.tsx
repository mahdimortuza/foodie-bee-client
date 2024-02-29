import DashboardPageTitle from "@/components/dashboardPageTitle/DashboardPageTitle";
import { useCreateTestimonialMutation } from "@/redux/features/testimonial/testimonialApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const TestimonialManagement = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [createTestimonial] = useCreateTestimonialMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating testimonial");
    try {
      const testimonial = {
        profileImg: data.profileImg,
        userName: data.userName,
        reviewText: data.reviewText,
        review: Number(data.review),
      };
      const res = await createTestimonial(testimonial).unwrap();
      dispatch(res);
      toast.success("Testimonial created successfully", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      toast.success("Testimonial created successfully", {
        id: toastId,
        duration: 3000,
      });
    }
    reset();
  };

  return (
    <div className="p-10">
      <DashboardPageTitle title="Create a new testimonial" />

      <form
        className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <input
            className="rounded"
            placeholder="Profile image"
            {...register("profileImg", { required: true })}
          />
          {errors.profileImg && (
            <span className="text-red-500">Profile image Link is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="rounded"
            placeholder="User name"
            {...register("userName", { required: true })}
          />
          {errors.userName && (
            <span className="text-red-500">User name field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="rounded"
            placeholder="Review text"
            {...register("reviewText", { required: true })}
          />
          {errors.reviewText && (
            <span className="text-red-500">Review Text field is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="rounded"
            placeholder="Rate out of 5"
            {...register("review", { required: true })}
          />
          {errors.review && (
            <span className="text-red-500">Review field is required</span>
          )}
        </div>

        <input
          className=" bg-tangerine text-white rounded  font-bold py-2"
          type="submit"
        />
      </form>
    </div>
  );
};

export default TestimonialManagement;
