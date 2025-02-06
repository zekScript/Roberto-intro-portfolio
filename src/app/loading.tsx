"use client";
import Loader from "@/components/anims/Loader";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader></Loader>
    </div>
  );
};

export default Loading;
