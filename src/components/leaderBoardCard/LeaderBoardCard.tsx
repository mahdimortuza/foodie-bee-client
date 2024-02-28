// LeaderBoardCard.jsx

const LeaderBoardCard = ({ donor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="text-lg font-semibold text-gray-800">{donor.username}</p>
      <p className="text-gray-600 mt-2">${donor.amount} Donation</p>
    </div>
  );
};

export default LeaderBoardCard;
