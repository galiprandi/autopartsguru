import { UsersList } from "./components/UsersList";
import { GetUsersService } from "../services/users.service";
import { GetRoles } from "../services/roles.service";
import { AddUserForm } from "./components/AddUserForm";

const users = await GetUsersService();
const roles = await GetRoles();

export default async function Users() {
  return (
    <>
      <section>
        <nav>
          <ul>
            <li>
              <h3>Usuarios</h3>
            </li>
          </ul>
          <ul>
            <li>
              <AddUserForm roles={roles} />
            </li>
          </ul>
        </nav>

        <UsersList data={users} />
      </section>
    </>
  );
}

export type UsersDataType = (typeof users)[number];
