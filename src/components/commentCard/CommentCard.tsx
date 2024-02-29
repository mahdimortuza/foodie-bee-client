import { ThumbsDown, ThumbsUp } from "lucide-react";

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
  const { author, comment, likes, disLikes } = item;
  return (
    <div className="bg-white p-4 mb-4 border rounded  flex items-center justify-between">
      <div>
        <h4 className="text-xl font-semibold">{author}</h4>
        <p>{comment}</p>
      </div>
      <div className="flex item-center gap-10">
        <div className="">
          <ThumbsUp />
          <span className="text-base font-bold text-tangerine">{likes}</span>
        </div>
        <div>
          <ThumbsDown />
          <span className="text-base font-bold text-red-500">{disLikes}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
