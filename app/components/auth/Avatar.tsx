import { auth, signOut } from "@/auth";
import { SignInButton } from "@components/auth/SignInButton";
import { SignOutButton } from "@components/auth/SignOutButton";

export async function Avatar() {
  const session = await auth();

  if (!session?.user) return <SignInButton />;

  return <SignOutButton />;
}
