"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function PrimaryButton({ children, onClick, className }) {
  const { pending } = useFormStatus();
  return (
    <button
      className={`btn btn-success text-white w-fit min-h-10 h-10 ${className}`}
      onClick={onClick}
      disabled={pending}
    >
      {pending ? "submitting..." : <>{children}</>}
    </button>
  );
}
