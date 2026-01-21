import Image from "next/image";
import { redirect, permanentRedirect } from "next/navigation";
export default function Home() {
  permanentRedirect(`/dashboard`); // Navigate to the new post page

  // return <div className="border-red-400 w-full h-full">123</div>;
}
