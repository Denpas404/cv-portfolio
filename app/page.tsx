import StartPage from "./StartPage/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/abstractBg2.svg')] bg-fixed bg-no-repeat bg-top bg-cover">
      <StartPage />
    </div>
  );
}