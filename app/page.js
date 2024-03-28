import HomePageButtonClick from "@/components/HomePageButtonClick";

export default function Home() {
  return (
    <main className="text-center flex flex-col items-center gap-4">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p>You can experiance the smoothness of this auth app</p>
      <HomePageButtonClick />
    </main>
  );
}
