import { auth } from "@/auth";
import { PropsWithChildren } from "react";
import { isAdminUser } from "../services/users.service";
import { Unauthorized } from "../components/ui/Unauthorized";

export default async function UserLayout({ children }: PropsWithChildren) {
  const session = await auth();
  const isAdmin = await isAdminUser(session?.user?.email);
  if (!isAdmin) return <Unauthorized />;
  return children;
}
