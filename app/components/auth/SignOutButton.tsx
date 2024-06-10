import { auth, signOut } from "@/auth";
import Image from "next/image";
import Icon from "@components/ui/Icon";

export async function SignOutButton() {
  const session = await auth();

  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="contrast icon">
        {session?.user?.image ? (
          <Image
            src={session?.user?.image}
            alt={session?.user?.name ?? "Avatar"}
            width={38}
            height={38}
            style={{ borderRadius: "50%" }}
          />
        ) : (
          <Icon icon="right-from-bracket" />
        )}
      </button>
    </form>
  );
}
