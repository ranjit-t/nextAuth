"use client";
import React, { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-2 text-lg">
      {!session ? (
        <>
          <Link href={"/signin"}>Signin</Link>
          <Link href={"/signup"}>Signup</Link>{" "}
        </>
      ) : (
        <>
          <Link href={"/dashboard"}>Dashboard</Link>
          <PrimaryButton
            onClick={async () => {
              signOut();
            }}
          >
            Signout
          </PrimaryButton>
        </>
      )}
    </div>
  );
}
