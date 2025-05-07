import Image from "next/image";
import StartPage from "./StartPage/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/bg_bg3.svg')] bg-fixed bg-no-repeat bg-top bg-cover">
      <StartPage />
    </div>
  );
}