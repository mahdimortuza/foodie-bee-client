import Container from "@/components/Container";
import DashboardPageTitle from "@/components/dashboardPageTitle/DashboardPageTitle";
import { useCreateVolunteerMutation } from "@/redux/features/voulnteer/volunteerApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const Volunteer = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [createVolunteer] = useCreateVolunteerMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating volunteer");
    try {
      const volunteer = {
        userName: data.userName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        location: data.location,
      };
      const res = await createVolunteer(volunteer).unwrap();
      dispatch(res);
      toast.success("Volunteer created successfully", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      toast.success("Volunteer created successfully", {
        id: toastId,
        duration: 3000,
      });
    }
    reset();
  };
  return (
    <Container className="py-5">
      <div className="p-10">
        <DashboardPageTitle title="Join us as a volunteer" />

        <form
          className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="User Name"
              {...register("userName", { required: true })}
            />
            {errors.userName && (
              <span className="text-red-500">User Name Link is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email field is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="Phone Number"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <span className="text-red-500">
                Phone Number field is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="Location"
              {...register("location", { required: true })}
            />
            {errors.location && (
              <span className="text-red-500">Location field is required</span>
            )}
          </div>
          <input
            className=" bg-tangerine text-white rounded  font-bold py-2"
            type="submit"
          />
        </form>
      </div>
    </Container>
  );
};

export default Volunteer;
