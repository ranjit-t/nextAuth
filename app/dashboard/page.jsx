"use client";
import PrimaryButton from "@/components/PrimaryButton";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/signin");
  }
  return (
    <main className="text-center flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <PrimaryButton>Dahshboard</PrimaryButton>
      <section className="flex items-center gap-4 border-2 p-4 px-8 rounded-lg">
        <img
          src={session.user.image}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="text-left text-lg">
          <p>Name : {session.user.name}</p>
          <p>Email : {session.user.email}</p>
        </div>
      </section>
    </main>
  );
}
