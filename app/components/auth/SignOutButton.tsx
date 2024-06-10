import { auth, signOut } from "@/auth";
import Image from "next/image";
import SignOut from "@/public/icons/sign-out.svg";

export async function SignOutButton() {
  const session = await auth();

  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="contrast"
        style={{ padding: 0, margin: 0 }}
      >
        <Image
          //@ts-expect-error s
          src={session?.user?.images ?? SignOut}
          alt={session?.user?.name ?? "Avatar"}
          width={38}
          height={38}
          style={{ borderRadius: session?.user?.image ? "50%" : 0 }}
        />
      </button>
    </form>
  );
}
