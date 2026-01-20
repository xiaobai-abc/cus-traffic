"use client";
import cn from "classnames";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function TestPage() {
  const router = useRouter();

  return (
    <div className={cn("border-red-400 p-1")}>
      <button onClick={() => router.push("/")}>Go to home</button>
    </div>
  );
}
export default TestPage;
