import { NextResponse } from "next/server";
import { auth } from "../auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function GET(req, res) {
  const session = await auth();
  console.log(session?.user);
  if (!session) {
    // redirect("/signin");
    return new NextResponse(JSON.stringify("Not auth"), { status: 401 });
  } else {
    return new NextResponse(
      JSON.stringify([{ project: "Hi" }, { project: "Hello" }]),
      { status: 200 }
    );
  }
}
