"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-[orangered] text-7xl font-bold">404</h1>
        <h1 className="text-3xl font-bold mb-4">You seem lost</h1>
        <p className="mb-4">Let&apos;s go back home</p>
        <Button variant="outline" onClick={() => router.push("/")}>
          Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
