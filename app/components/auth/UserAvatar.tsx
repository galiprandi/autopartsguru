import { auth, signOut } from "@/auth";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return <SignInButton />;

  return <SignOutButton />;
}
