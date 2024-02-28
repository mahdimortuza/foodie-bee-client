import Container from "@/components/Container";
import LeaderBoardCard from "@/components/leaderBoardCard/LeaderBoardCard";
import { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [topDonors, setTopDonors] = useState([]);

  useEffect(() => {
    // Fetch top donors data from your API or storage
    // For demonstration, initializing with some sample data
    setTopDonors([
      { id: 1, username: "GenerousUser1", amount: 1000 },
      { id: 2, username: "KindSupporter2", amount: 800 },
      { id: 3, username: "BigHeart3", amount: 700 },
    ]);
  }, []);
  return (
    <Container className="py-5">
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Donors Leaderboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topDonors.map((donor) => (
            <LeaderBoardCard key={donor.id} donor={donor} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LeaderBoard;
