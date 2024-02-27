import Container from "@/components/Container";
import { useRegistrationMutation } from "@/redux/features/auth/registerApi";
import { useAppDispatch } from "@/redux/hooks";
import { Home } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

// type TRegistration = {
//   name: string;
//   email: string;
//   password: string;
// };

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registration] = useRegistrationMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Signing in");

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const res = await registration(userInfo).unwrap();
      dispatch(res);
      toast.success("Registration successful, please login", {
        id: toastId,
        duration: 3000,
      });
      navigate("/login");
    } catch (error) {
      toast.success("Registration successful, please login", {
        id: toastId,
        duration: 3000,
      });
      navigate("/login");
    }
  };

  return (
    <Container className=" h-screen flex flex-col items-center justify-center gap-5">
      <form
        className="flex flex-col w-[370px] gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="rounded"
          placeholder="Full Name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500">Name field is required</span>
        )}
        <input
          className="rounded"
          placeholder="example@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">Email field is required</span>
        )}

        <input
          className="rounded"
          placeholder="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">Password field is required</span>
        )}

        <input
          className=" bg-tangerine text-white rounded py-2  font-bold"
          type="submit"
        />
      </form>
      <p className=" text-black text-sm">
        Already have an account?{" "}
        <Link className="text-tangerine text-base font-semibold" to="/login">
          Login here...
        </Link>
      </p>

      <Link to="/">
        <div className="flex gap-2 mt-10">
          <Home className=" text-tangerine " />
          <h3 className="font-bold text-tangerine">Back to home</h3>
        </div>
      </Link>
    </Container>
  );
};

export default Registration;
