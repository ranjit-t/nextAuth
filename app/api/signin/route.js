import User from "@/models/usersModel";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnection from "@/lib/dbConnection";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    await dbConnection();

    const existingUser = await User.find({ email });
    if (existingUser.length) {
      if (existingUser[0].password === password) {
        cookies().set("loggedUser", JSON.stringify({ email }));
        return new NextResponse(
          JSON.stringify({
            message: "User logged in successfully",
            email,
            name: existingUser[0].name,
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }),
          {
            status: 200,
          }
        );
      } else {
        return new NextResponse(
          JSON.stringify({ message: "Sorry, Wrong password" }),
          {
            status: 408,
          }
        );
      }
    } else {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
  } catch (e) {
    return new NextResponse(JSON.stringify({ message: e.message }), {
      status: 500,
    });
  }
}
