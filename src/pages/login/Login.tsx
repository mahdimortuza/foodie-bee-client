import Container from "@/components/Container";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Home } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.token) as TUser;
      console.log(user);

      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Successfully logged in", { id: toastId, duration: 3000 });
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
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
        New at Foodie Bee?{" "}
        <Link className="text-tangerine text-base font-semibold" to="/register">
          Register here...
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

export default Login;
