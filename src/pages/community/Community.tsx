import Container from "@/components/Container";
import { AddCommentDIalog } from "@/components/addCommentDialog/AddCommentDialog";
import CommentCard, {
  TCommentProps,
} from "@/components/commentCard/CommentCard";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const Community = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/community")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

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
