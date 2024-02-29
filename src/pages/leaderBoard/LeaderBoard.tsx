// LeaderBoard.jsx

import Container from "@/components/Container";
import LeaderBoardCard, {
  TLeaderBoardProps,
} from "@/components/leaderBoardCard/LeaderBoardCard";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [topDonors, setTopDonors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/donate")
      .then((response) => response.json())
      .then((data) => setTopDonors(data));
  }, []);

  return (
    <Container className="py-5">
      <SectionTitle title="Leader Board" des="Top Donors Recognition" />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
        <div className="grid grid-cols-1  gap-8 mt-6">
          {topDonors.map((item: TLeaderBoardProps) => (
            <LeaderBoardCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LeaderBoard;
