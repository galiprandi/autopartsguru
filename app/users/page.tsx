import { DB } from "@/lib/db/db";

export default async function Users() {
  const users = await DB.user.findMany();
  return (
    <section>
      <h1>Users</h1>
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
