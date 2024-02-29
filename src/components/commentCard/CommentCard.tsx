import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export type TCommentProps = {
  _id: string;
  author: string;
  comment: string;
  likes: number;
  link: string;
  disLikes: number;
};

type TCommentItem = {
  item: TCommentProps;
};

const CommentCard = ({ item }: TCommentItem) => {
  const { author, comment, likes, link, disLikes } = item;
  return (
    <div className="bg-white p-4 mb-4 border rounded  flex items-center justify-between">
      <div>
        <h4 className="text-xl font-semibold">{author}</h4>
        <p>{comment}</p>
        <div className="flex item-center gap-10">
          <div>
            <ThumbsUp />
            <span>{likes}</span>
          </div>
          <div>
            <ThumbsDown />
            <span>{disLikes}</span>
          </div>
        </div>
      </div>
      <Link to={link}>
        <Button className=" bg-tangerine">View gallery</Button>
      </Link>
    </div>
  );
};

export default CommentCard;
