import { auth, signOut } from "@/auth";

export async function SignOutButton() {
  const session = await auth();
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">
        {session?.user?.image ? (
          <img
            src={session.user.image}
            alt={session?.user?.name ?? "Avatar"}
            width={25}
            height={25}
          />
        ) : (
          <span>{session?.user?.name ?? "Sign Out"}</span>
        )}
      </button>
    </form>
  );
}
