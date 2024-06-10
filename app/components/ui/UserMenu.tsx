import { auth } from "@/auth";
import IconButton from "./IconButton";
import Link from "next/link";
import { isAdminUser } from "@/app/services/users.service";

export default async function UserMenu() {
  const session = await auth();
  const isAdmin = await isAdminUser(session?.user?.email);

  return (
    <div className="grid">
      {isAdmin && (
        <Link href="/users">
          <IconButton
            icon="user-gear"
            data-tooltip="Manage Users"
            data-placement="right"
          />
        </Link>
      )}
    </div>
  );
}
