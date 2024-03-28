// "use server";
import { signIn } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const submitEmailForm = async (prev, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const resp = await signIn("credentials", {
    username: email,
    password: password,
    redirect: false,
  });

  if (!resp.ok) {
    return {
      message: resp.error,
    };
  }
};

export const submitGithubForm = async () => {
  //   "use server";
  const resp = await signIn("github");
};
