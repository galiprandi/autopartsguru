import { signIn } from "@/auth";
import SignIn from "@/public/icons/sign-in.svg";
import Image from "next/image";

export async function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/home" });
      }}
    >
      <button
        type="submit"
        className="contrast"
        style={{ padding: 0, margin: 0 }}
      >
        <Image src={SignIn} alt="Sign in" width={38} height={38} />
      </button>
    </form>
  );
}
