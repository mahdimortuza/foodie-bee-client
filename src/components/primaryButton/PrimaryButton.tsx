import { Button } from "../ui/button";

type TButtonProps = {
  title: string;
  className?: string;
  href?: string;
};

const PrimaryButton = ({ title, className }: TButtonProps) => {
  return (
    <Button className={`bg-red-500 text-white font-bold  ${className}`}>
      {title}
    </Button>
  );
};

export default PrimaryButton;
