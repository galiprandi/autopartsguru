"use server";

import { DB } from "@/lib/db/db";
import { UsersList } from "./components/UsersList";

const users = await DB.user.findMany();

export default async function Users() {
  const users = await DB.user.findMany();
  return (
    <section>
      <h3>Users</h3>

      <UsersList data={users} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} ({user.role})
          </li>
        ))}
      </ul>
    </section>
  );
}

export type UsersDataType = (typeof users)[number];
