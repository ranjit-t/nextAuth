import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function GET(req, res) {
  return new NextResponse(
    JSON.stringify([{ project: "Hi" }, { project: "Hello" }]),
    { status: 200 }
  );
}
