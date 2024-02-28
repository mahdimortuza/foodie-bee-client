import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/404/cat-404.png";
const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <img className="w-[380px] h-auto" src={errorImg} />
      <h1 className="-mt-12 text-5xl font-bold text-red-500">404</h1>
      <p className="mt-5 text-2xl font-semibold text-tangerine">
        Dang! The cat ate your meal again.
      </p>

      <Link to="/">
        <div className="flex gap-2 mt-10">
          <Home className=" text-tangerine " />
          <h3 className="font-bold text-tangerine">Back to home</h3>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
