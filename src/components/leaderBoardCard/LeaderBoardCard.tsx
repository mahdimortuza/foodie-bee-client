// LeaderBoardCard.jsx

import { Button } from "../ui/button";

const LeaderBoardCard = ({ item }) => {
  const { userName, amount } = item;
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between  items-center">
      <div>
        <p className="text-lg font-semibold text-gray-800">{userName}</p>
        <p className="text-gray-600 mt-2">${amount} Donation</p>
      </div>
      <Button>Details</Button>
    </div>
  );
};

export default LeaderBoardCard;
