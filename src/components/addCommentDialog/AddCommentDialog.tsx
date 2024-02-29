import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCreateCommentMutation } from "@/redux/features/community/communityApi";
import { useAppDispatch } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

export function AddCommentDIalog() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [createComment] = useCreateCommentMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating a post");
    try {
      const commentData = {
        author: data.name,
        comment: data.comment,
        likes: 0,
        disLikes: 0,
      };
      const res = await createComment(commentData).unwrap();
      dispatch(res);
      toast.success("Comment added successfully", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      toast.success("Comment added successfully", {
        id: toastId,
        duration: 3000,
      });
    }
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-tangerine hover:bg-gray mx-auto">
          Add a comment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.category && (
              <span className="text-red-500">Name field is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              className="rounded"
              placeholder="Comment"
              {...register("comment", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500">Comment field is required</span>
            )}
          </div>

          <input
            className=" bg-tangerine text-white rounded  font-bold"
            type="submit"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
