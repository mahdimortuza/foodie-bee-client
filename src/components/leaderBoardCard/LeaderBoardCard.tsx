import { Button } from "../ui/button";

export type TLeaderBoardProps = {
  _id: string;
  name: string;
  amount: string;
};

export type TLeaderBoardItems = {
  item: TLeaderBoardProps;
};

const LeaderBoardCard = ({ item }: TLeaderBoardItems) => {
  const { name, amount } = item;
  return (
    <div className="bg-white p-4  rounded-lg shadow flex justify-between  items-center">
      <div>
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-gray-600 mt-2">${amount} Donation</p>
      </div>
      <Button>Details</Button>
    </div>
  );
};

export default LeaderBoardCard;
