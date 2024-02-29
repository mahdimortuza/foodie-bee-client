import Container from "@/components/Container";
import { AddCommentDIalog } from "@/components/addCommentDialog/AddCommentDialog";
import CommentCard, {
  TCommentProps,
} from "@/components/commentCard/CommentCard";
import ErrorMessage from "@/components/errorMessage/ErrorMessage";
import LoadingSkeleton from "@/components/loadingSkeleton/LoadingSkeleton";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { useGetCommentsQuery } from "@/redux/features/community/communityApi";

const Community = () => {
  const { data: comments, isLoading, isError } = useGetCommentsQuery(undefined);
  console.log(comments);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  if (isError) {
    return <ErrorMessage />;
  }
  return (
    <Container className="py-5">
      <SectionTitle title="Community" des="Expression of our grateful people" />
      <div className="container mx-auto p-8">
        <div className="">
          <h1 className="text-3xl font-bold mb-4">Gratitude Wall</h1>
          <AddCommentDIalog />
        </div>

        <div className="mt-10">
          {comments.map((item: TCommentProps) => (
            <CommentCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Community;
