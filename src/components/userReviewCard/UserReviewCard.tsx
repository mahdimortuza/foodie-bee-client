type TReviewProps = {
  img: string;
  name: string;
  designation: string;
  review: string;
};
const UserReviewCard = ({ img, name, designation, review }: TReviewProps) => {
  return (
    <div className="rounded p-2 m-2">
      <div className="flex  items-center">
        <img className="mx-auto rounded-full" src={img} />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <h4 className="text-sm font-semibold">{designation}</h4>
        </div>
      </div>
      <p className="text-center mt-10">{review}</p>
    </div>
  );
};

export default UserReviewCard;
