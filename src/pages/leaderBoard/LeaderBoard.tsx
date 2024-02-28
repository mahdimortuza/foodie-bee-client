// LeaderBoard.jsx

import Container from "@/components/Container";
import LeaderBoardCard from "@/components/leaderBoardCard/LeaderBoardCard";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [topDonors, setTopDonors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/donate")
      .then((response) => response.json())
      .then((data) => setTopDonors(data.message));
  }, []);

  return (
    <Container className="py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
        <SectionTitle title="Leader Board" des="Top Donors Recognition" />
        <div className="grid grid-cols-1  gap-8 mt-6">
          {topDonors.map((item) => (
            <LeaderBoardCard key={item.userName} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LeaderBoard;
