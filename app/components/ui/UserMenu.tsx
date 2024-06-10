import { auth } from "@/auth";

import IconButton from "./IconButton";
import { DB } from "@/lib/db/db";
import Link from "next/link";

export default async function UserMenu() {
  const session = await auth();

  const email = session?.user?.email;

  const user = email
    ? await DB.user.findFirst({
        where: {
          email,
          role: "ADMIN",
        },
        select: {
          role: true,
        },
      })
    : false;

  const role = user ? user.role : "USER";
  const isAdmin = role === "ADMIN";

  console.log({ role });
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
