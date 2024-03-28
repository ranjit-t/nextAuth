"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";

export default function HomePageButtonClick() {
  return (
    <PrimaryButton
      onClick={async () => {
        const resp = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/getProjects`
        );
        const respDat = await resp.json();
        console.log(respDat);
      }}
    >
      Get Projects
    </PrimaryButton>
  );
}
