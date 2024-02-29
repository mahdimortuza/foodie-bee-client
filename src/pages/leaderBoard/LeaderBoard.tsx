// LeaderBoard.jsx

import Container from "@/components/Container";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import LeaderBoardCard, {
  TLeaderBoardProps,
} from "@/components/leaderBoardCard/LeaderBoardCard";
import LoadingSkeleton from "@/components/loadingSkeleton/LoadingSkeleton";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { useGetDonationQuery } from "@/redux/features/donation/createDonationApi";

const LeaderBoard = () => {
  const {
    data: topDonors,
    isLoading,
    isError,
  } = useGetDonationQuery(undefined);
  console.log(topDonors);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  if (isError) {
    return <ErrorMessage />;
  }
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
