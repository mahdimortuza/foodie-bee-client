import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const LoadingSkeleton = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <Progress value={progress} className="w-[380px] " />
    </div>
  );
};

export default LoadingSkeleton;
