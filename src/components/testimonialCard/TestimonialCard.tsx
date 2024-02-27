import { Star, StarHalf } from "lucide-react";

type TReviewProps = {
  profileImg: string;
  userName: string;
  reviewText: string;
};
const TestimonialCard = ({
  profileImg,
  userName,
  reviewText,
}: TReviewProps) => {
  return (
    <div
      className={`w-[350px] lg:w-[400px] p-5 rounded-[24px] transition-all duration-200
  hover:shadow-[0px_5px_10px_0px_rgba(0,0,0,0.5)]
  mx-auto`}
    >
      <div className="flex gap-3 items-center ">
        <img className="w-[100px] h-[100px] rounded-full" src={profileImg} />
        <div>
          <h3 className=" text-[25px] font-inter text-red-500 font-bold leading-[150%]">
            {userName}
          </h3>
          <div className="flex gap-1 mt-4">
            <Star className=" text-tangerine" />
            <Star className=" text-tangerine" />
            <Star className=" text-tangerine" />
            <Star className=" text-tangerine" />
            <StarHalf className=" text-tangerine" />
          </div>
        </div>
      </div>

      <p className="mt-6 font-inter text-[18px] leading-[144%]">{reviewText}</p>
    </div>
  );
};

export default TestimonialCard;
