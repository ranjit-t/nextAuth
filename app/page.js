import HomePageButtonClick from "@/components/HomePageButtonClick";
import { auth } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await auth();
  console.log(session?.user);
  return (
    <main className="text-center flex flex-col items-center gap-4">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p>You can experiance the smoothness of this auth app</p>
      <HomePageButtonClick />
    </main>
  );
}
