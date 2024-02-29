import burger from "@/assets/subscribe-img/burger.svg";
import Container from "@/components/Container";
import { MousePointer2 } from "lucide-react";

const SubscribeSection = () => {
  return (
    <Container className="my-16">
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 place-items-center bg-light-tangerine rounded-2xl">
        <img className="w-[300px]" src={burger} />
        <div className=" w-[30ch] md:w-[40ch] ">
          <h2 className="  text-3xl font-bold text-red-600">
            Subcribe To Our Newsletter
          </h2>
          <p className="mt-5 text-black">
            Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus
            mauris sem sed urna venenatis vivamus. Egestas in velit nulla
            viverra turpis id ac. Amet faucibus tempus.
          </p>
          <div className="flex items-center relative mt-5 ">
            <input
              className="rounded-xl w-[350px] md:w-[450px]"
              type="text"
              placeholder="Type your email....."
            />
            <MousePointer2 className=" rotate-[137deg] absolute left-[230px] md:left-[320px] text-tangerine" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SubscribeSection;
